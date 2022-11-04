import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import love from "../assets/icons/love.svg";
import { useGetTopChartsQuery } from "../redux/services/shazam";
import Loading from "./Loading";

const TopChart = () => {
  const { data, isFetching } = useGetTopChartsQuery();

  const topThree = data?.slice(0, 3);

  return (
    <div className="mx-auto w-[350px] md:w-[420px] text-ellipsis whitespace-nowrap">
      <h2 className="text-white text-[24px] font-[700]">Top charts</h2>
      {isFetching && <Loading />}
      <div className="w-full flex flex-col gap-4 mt-4">
        {topThree?.map((song, i) => {
          return (
            <div className="flex sm:gap-[50%] items-start justify-between md:items-center bg-[#1A1E1F] p-4 rounded-[20px]">
              <div className="flex flex-col md:flex-row gap-4">
                <img
                  src={song?.images?.coverart}
                  alt=""
                  className="w-[63px] h-[63px] rounded-3xl"
                />
                <div className="text-white">
                  <Link to={`/song/${song.key}`}>
                    <p className="text-[17px] max-w-[140px] font-thin overflow-hidden text-ellipsis whitespace-nowrap">
                      {song?.title}
                    </p>
                  </Link>
                  <Link to={`artist/${song.artists[0]?.adamid}`}>
                    <p className="text-[12px] font-thin text-gray-400">
                      {song.subtitle}
                    </p>
                  </Link>
                  <p className="text-[12px] font-thin">{}</p>
                </div>
              </div>
              <div className="grid place-items-center h-[32px] w-[32px] border-solid border-[1px] border-[#ffffff33] rounded-full">
                <img src={love} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
//     border: 1px solid #ffffff33;
export default TopChart;
