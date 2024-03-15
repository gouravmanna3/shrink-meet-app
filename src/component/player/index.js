import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Player = (props) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const { url, muted, playing } = props;
  return (
    <div>
      {hasWindow && <ReactPlayer url={url} muted={muted} playing={playing} />}
    </div>
  );
};

export default Player;
