import { useSocket } from "@/content/socket";
import { useMediaStream } from "@/hooks/useMediaStream";
import usePeer from "@/hooks/usePeer";
import Player from "@/component/player";
import ReactPlayer from "react-player";

const Room = () => {
  const socket = useSocket();
  const [peer, myId] = usePeer();
  const { stream } = useMediaStream();

  return (
    <div>
      <Player url={stream} muted playing playerId={myId} />
    </div>
  );
};

export default Room;
