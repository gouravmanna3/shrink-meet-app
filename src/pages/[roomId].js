import { useEffect } from "react";
import { useSocket } from "@/content/socket";
import { useMediaStream } from "@/hooks/useMediaStream";
import usePeer from "@/hooks/usePeer";
import Player from "@/component/player";
import usePlayer from "@/hooks/usePlayer";

const Room = () => {
  const socket = useSocket();
  const [peer, myId] = usePeer();
  const [players, setPlayers] = usePlayer();

  // gets the audio and video stream
  const { stream } = useMediaStream();

  // when user joins the room
  useEffect(() => {
    if (!socket || !peer || !stream) return;

    // display the userId of connected user
    const handleUserConnected = (newUser) => {
      console.log(`user connected in room with userId ${newUser}`);

      // calling the joined user and sending the stream [user 1]
      const call = peer.call(newUser, stream);

      call.on("stream", (incomingStream) => {
        console.log(`incoming stream from joined user ${newUser}`);
        setPlayers((prev) => ({
          ...prev,
          [newUser]: {
            url: incomingStream,
            muted: false,
            playing: true,
          },
        }));
      });
    };

    // call handleUserConnected function when "user-connected" event is triggered [defining]
    socket.on("user-connected", handleUserConnected);

    return () => {
      socket.off("user-connected", handleUserConnected);
    };
  }, [setPlayers, peer, socket, stream]);

  useEffect(() => {
    if (!peer || !stream) return;
    peer.on("call", (call) => {
      const { peerId: callerId } = call;
      // answering the call and sending the stream [user 2]
      call.answer(stream);

      call.on("stream", (incomingStream) => {
        console.log(`incoming stream from someone ${callerId}`);
        setPlayers((prev) => ({
          ...prev,
          [callerId]: {
            url: incomingStream,
            muted: false,
            playing: true,
          },
        }));
      });
    });
  }, [peer, stream]);

  useEffect(() => {
    if (!stream || !myId) return;
    console.log(`setting my stream ${myId}`);
    setPlayers((prev) => ({
      ...prev,
      [myId]: {
        url: stream,
        muted: false,
        playing: true,
      },
    }));
  }, [myId, setPlayers, stream]);

  return (
    <div>
      {Object.keys(players).map((playerId) => {
        const { url, muted, playing } = players[playerId];
        return (
          <Player key={playerId} url={url} muted={muted} playing={playing} />
        );
      })}
    </div>
  );
};

export default Room;
