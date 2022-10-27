import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { setActiveSong, playPause } from "../redux/slices/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazam";
import PlayPause from "./PlayPause";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Card from "./Card";

const NewReleases = () => {
  const { data, isFetching } = useGetTopChartsQuery();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const handlePlay = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  const handlePause = (song) => {
    dispatch(playPause(false));
  };

  const popular = data?.slice(0, 11);
  return (
    <div className="mt-4 max-w-[350px] md:max-w-full">
      <div className="my-4">
        <h2 className="text-[24px] text-white font-[700]">New releases</h2>
      </div>
      {isFetching && <Loading />}

      {/* <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        className="w-[full]"
      >
        {popular?.map((item, i) => {
          return (
            <div>
              <SwiperSlide className="w-fit hover-playPause" key={i}>
                <div className="relative">
                  <img
                    src={item?.images.coverart}
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
                <p className="text-white text-[12px] font-[400] mb-1 max-w-[150px]">
                  {item?.title}
                </p>
                <p className="text-gray-300 text-[10px] font-[400]">
                  {item?.subtitle}
                </p>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper> */}
      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        className="w-[full]"
      >
        {popular?.map((item, i) => {
          return (
            <SwiperSlide className="w-fit hover-playPause" key={i}>
              <Card
                item={item}
                activeSong={activeSong}
                handlePause={handlePause}
                handlePlay={handlePlay}
                i={i}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default NewReleases;
