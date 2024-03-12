import { useRef, useState, useEffect } from "react";

export const useMediaStream = () => {
  const [stream, setStream] = useState(null);
  const isStreamSet = useRef();
  useEffect(() => {
    if (isStreamSet.current) return;
    isStreamSet.current = true;
    {
      (async function initStream() {
        try {
          const userMedia = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true,
          });
          console.log("setting your stream", userMedia);
          setStream(userMedia);
        } catch (error) {
          console.log("Error in media navigator", error);
        }
      })();
    }
  }, []);

  return {
    stream,
  };
};
