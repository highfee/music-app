import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";

const Card = ({ item, activeSong, handlePause, handlePlay, i }) => {
  return (
    <div>
      <div className="relative h-[153px]">
        <img
          src={item?.images?.coverart}
          alt=""
          className="mb-2 w-[153px] rounded-3xl"
        />
        <PlayPause
          handlePlay={handlePlay}
          handlePause={handlePause}
          song={item}
          activeSong={activeSong}
          i={i}
        />
      </div>
      <Link to={`/song/${item.key}`}>
        <p className="text-white text-[12px] font-[400] mb-1 max-w-[150px]">
          {item?.title}
        </p>
      </Link>
      <Link to={item?.artists && `/artist/${item?.artists[0]?.adamid}`}>
        <p className="text-gray-300 text-[10px] font-[400] ">
          {item?.subtitle}
        </p>
      </Link>
    </div>
  );
};

export default Card;
