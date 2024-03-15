import { useSocket } from "@/content/socket";
import { useRouter } from "next/router";

const { useState, useEffect, useRef } = require("react");

const usePeer = () => {
  const [peer, setPeer] = useState(null);
  const [myId, setMyId] = useState("");
  const roomId = useRouter().query.roomId;
  const isPeerSet = useRef(false);
  const socket = useSocket();

  useEffect(() => {
    if (isPeerSet.current || !roomId || !socket) return;
    isPeerSet.current = true;
    {
      (async function initPeer() {
        const myPeer = new (await import("peerjs")).default();
        setPeer(myPeer);

        myPeer.on("open", (id) => {
          console.log(`your peer id is ${id}`);
          setMyId(id);
          socket?.emit("join-room", roomId, id);
        });
      })();
    }
  }, []);

  return [peer, myId];
};

export default usePeer;
