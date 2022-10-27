import { useEffect, useRef, useState } from "react";

const Player = ({
  activeSong,
  isPlaying,
  volume,
  onTimeUpdate,
  onLoadedData,
  seekTime,
  onEnded,
  repeat,
}) => {
  const ref = useRef(null);
  // console.log(ref);
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);
  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);
  return (
    <div>
      <audio
        src={activeSong?.hub?.actions && activeSong?.hub?.actions[1]?.uri}
        ref={ref}
        loop={repeat}
        onEnded={onEnded}
        onTimeUpdate={onTimeUpdate}
        onLoadedData={onLoadedData}
      />
    </div>
  );
};

export default Player;
