import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import {
  Mic,
  Video,
  PhoneOff,
  MicOff,
  VideoOff,
  UserSquare2,
} from "lucide-react";
import cx from "classnames";

import styles from "./player.module.css";

const Player = (props) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const { url, muted, playing, isActive } = props;
  return (
    <div
      className={cx(styles.playerContainer, {
        [styles.notActive]: !isActive,
        [styles.active]: isActive,
        [styles.notPlaying]: !playing,
      })}
    >
      {!playing ? (
        <UserSquare2 className={styles.user} size={isActive ? 400 : 150} />
      ) : (
        hasWindow && (
          <ReactPlayer
            url={url}
            muted={muted}
            playing={playing}
            width="100%"
            height="100%"
          />
        )
      )}

      {!isActive ? (
        muted ? (
          <MicOff className={styles.icon} size={20} />
        ) : (
          <Mic className={styles.icon} size={20} />
        )
      ) : undefined}
    </div>
  );
};

export default Player;
