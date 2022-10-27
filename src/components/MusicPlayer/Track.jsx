import { Link } from "react-router-dom";

const Track = ({ activeSong, isPlaying }) => {
  return (
    <Link to={`/song/${activeSong.key}`}>
      <div className="flex flex-grow-[1] items-center gap-5 max-w-[280px]">
        <div>
          <img
            src={activeSong?.images?.coverart}
            alt=""
            className={`w-[50px] rounded-full ${isPlaying && "animate-rotate"} 
          }`}
          />
        </div>
        <div>
          <p className="font-[700] text-[14px] text-white">
            {activeSong?.subtitle}
          </p>
          <p className="font-[700] text-[10px] text-[#ffffffa1] max-w-[150px] whitespace-nowra">
            {activeSong?.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Track;
