import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import bodyPhoto from "../../public/images/video_call.png";

import styles from "@/styles/home.module.css";
import Image from "next/image";
import { CirclePlus, Keyboard, Video } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");
  // useEffect(() => {
  //   socket?.on("connect", () => {
  //     console.log(socket.id);
  //   });
  // }, [socket]);

  const createAndJoin = () => {
    const roomId = uuidv4();
    router.push(`/${roomId}`);
  };

  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`);
    else {
      alert("Please provide a valid room ID");
    }
  };

  return (
    <main className="bg-blue-100 h-lvh">
      <Header />
      <section className="flex items-center">
        <div className="basis-1/2 mt-28">
          <div className="px-32 text-center">
            <h1 className="font-normal text-[2.5rem] leading-tight">
              Bringing Faces Closer, No Matter the Distance
            </h1>
            <button
              onClick={createAndJoin}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium items-center my-5 py-3 px-4 border border-blue-700 rounded"
            >
              <CirclePlus size={20} className="inline-block mr-2" />
              <span>New meeting</span>
            </button>
            <div className="relative flex items-center text-gray-600">
              <Keyboard
                size={20}
                className="absolute ml-3 pointer-events-none"
              />
              <input
                className="appearance-none block w-5/6 border border-gray-500 rounded py-3 pl-10 pr-4 mr-2 leading-tight focus:outline-none"
                placeholder="Enter Room ID"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
              />
              <button
                className="text-blue-600 hover:bg-blue-200 font-medium py-3 px-4 rounded"
                onClick={joinRoom}
              >
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="basis-1/2 mt-8">
          <Image src={bodyPhoto} alt="video_conference_photo" />
        </div>
      </section>
    </main>
  );
}

{
  /* <a
  href="#_"
  class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
  data-rounded="rounded-md"
  data-primary="blue-600"
  data-primary-reset="{}"
>
  Button Text
</a>; */
}
