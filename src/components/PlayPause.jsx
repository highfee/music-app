import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

const PlayPause = ({ handlePlay, handlePause, song, activeSong, i }) => {
  const isPlaying = useSelector((state) => state.player.isPlaying);

  return (
    <div
      className={`absolute top-1/2 left-1/2  playPause ${
        activeSong?.title === song?.title && "show"
      } `}
    >
      {isPlaying && song?.title === activeSong?.title ? (
        <FaPauseCircle
          size={35}
          className="text-gray-300"
          onClick={() => handlePause(song, i)}
        />
      ) : (
        <FaPlayCircle
          size={35}
          className="text-gray-300"
          onClick={() => handlePlay(song, i)}
        />
      )}
    </div>
  );
};

export default PlayPause;
