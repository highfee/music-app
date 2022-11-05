import Controls from "./Controls";
import Player from "./Player";
import Seekbar from "./Seekbar";
import Track from "./Track";
import Volume from "./Volume";
import {
  nextSong,
  playPause,
  prevSong,
} from ".././../redux/slices/playerSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Index = () => {
  const [volume, setVolume] = useState(0.5);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);

  const dispatch = useDispatch();
  const { activeSong, isPlaying, currentIndex, currentSongs, isActive } =
    useSelector((state) => state.player);
  const handlePlayPause = () => {
    if (!isActive) return;
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(false));
    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
    dispatch(playPause(true));
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };

  // if (!activeSong?.hub?.actions) {
  //   setTimeout(handleNextSong, 5000);
  // }

  return (
    <>
      {isActive && (
        <div className="h-[80px] md:h-[120px] px-5 md:px-0 w-full fixed z-50 bottom-0 player flex justify-center items-center ">
          <div className="max-w-[1130px] w-ful mx-auto flex items-center justify-evenly md:justify-between ">
            <Track activeSong={activeSong} isPlaying={isPlaying} />

            <Player
              activeSong={activeSong}
              isPlaying={isPlaying}
              volume={volume}
              seekTime={seekTime}
              onTimeUpdate={(e) => {
                setAppTime(e.target.currentTime);
              }}
              onLoadedData={(e) => setDuration(e.target.duration)}
              onEnded={handleNextSong}
              loop={repeat}
            />

            <div className="flex flex-col items-center gap-2 w-full ">
              <Controls
                isPlaying={isPlaying}
                handlePlayPause={handlePlayPause}
                handleNextSong={handleNextSong}
                handlePrevSong={handlePrevSong}
                setShuffle={setShuffle}
                shuffle={shuffle}
                setRepeat={setRepeat}
                repeat={repeat}
              />
              <Seekbar
                value={appTime}
                min="0"
                max={duration}
                onInput={(event) => setSeekTime(event.target.value)}
                setSeekTime={setSeekTime}
                appTime={appTime}
              />
            </div>
            <Volume
              value={volume}
              min="0"
              max="1"
              onChange={(e) => {
                setVolume(e.target.value);
              }}
              setVolume={setVolume}
              volume={volume}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
