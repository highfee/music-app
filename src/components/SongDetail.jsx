import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazam";
import { setBackground } from "../redux/slices/backgroundSlice";
import { playPause, setActiveSong } from "../redux/slices/playerSlice";
import Loading from "./Loading";

const SongDetail = () => {
  const dispatch = useDispatch();
  const { songid, id: artistId } = useParams();
  const {
    data: songData,
    isFetching: isFetchingSongDetails,
    error,
  } = useGetSongDetailsQuery({ songid });
  const { data: related } = useGetSongRelatedQuery({ songid });
  // console.log(related);

  useEffect(() => {
    dispatch(setBackground(songData?.images.coverart));
  }, [songid, songData]);

  const playAll = () => {
    dispatch(setActiveSong({ song: songData, data: related, i: 0 }));
    dispatch(playPause(true));
  };
  return (
    <div className="w-full min-h-[80vh] h-[80vh] z-50 overflow-hidden hover:overflow-auto hide-scroll">
      {isFetchingSongDetails && <Loading />}
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="w-[357px] md:w-[284px]">
          <img
            src={songData?.images.coverart}
            alt=""
            className="w-full rounded-[35px]"
          />
        </div>
        <div>
          <p className="text-white text-3xl md:text-5xl font-[900] max-w-[320px]">
            {songData?.alias}
          </p>
          <p className="w-[350px] md:w-[400px] lg:w-[600px] text-white text-l mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            porro perferendis quasi, asperiores earum consequatur eveniet ab
            ratione commodi culpa!
          </p>
          <div className="flex items-center gap-2 md:gap-5 mt-3  relative md:top-12">
            <div
              className="flex gap-1 md:gap-3 items-center px-3 py-2 bg-gray-700 rounded-[32px] cursor-pointer hover:scale-95"
              onClick={playAll}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00001 0.333313C10.6744 0.333313 13.6667 3.32415 13.6667 7.00384C13.6667 10.6758 10.6744 13.6666 7.00001 13.6666C3.32562 13.6666 0.333344 10.6758 0.333344 7.00384C0.333344 3.32415 3.32562 0.333313 7.00001 0.333313ZM6.24068 4.35325C6.09911 4.35325 5.96397 4.38541 5.83527 4.44973C5.6744 4.53978 5.5457 4.68128 5.47491 4.84851C5.42987 4.96428 5.35908 5.3116 5.35908 5.31804C5.2883 5.69752 5.24969 6.31498 5.24969 6.99676C5.24969 7.64703 5.2883 8.23812 5.34621 8.62403C5.35265 8.63047 5.42343 9.0614 5.50065 9.20934C5.64222 9.47948 5.91893 9.64671 6.21494 9.64671H6.24068C6.43373 9.64028 6.83913 9.47305 6.83913 9.46661C7.52125 9.18361 8.86616 8.30244 9.4067 7.71714L9.44531 7.67854C9.5161 7.60779 9.60619 7.49845 9.62549 7.47272C9.72845 7.33765 9.77993 7.17042 9.77993 7.00384C9.77993 6.81667 9.72202 6.64301 9.61262 6.50151C9.58688 6.47578 9.49036 6.36644 9.40027 6.27639C8.8726 5.71038 7.4955 4.78419 6.77478 4.50119C6.66539 4.45681 6.38868 4.35968 6.24068 4.35325Z"
                  fill="#FACD66"
                />
              </svg>
              <p className="text-white text-sm md:text-base">Play all</p>
            </div>
            <div className="flex gap-1 md:gap-3 items-center py-2 px-3 bg-gray-700 rounded-[32px] cursor-pointer hover:scale-95">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8067 10.0067C12.08 9.96002 11.3333 10.2267 10.78 10.78C9.74 11.82 9.74 13.5067 10.78 14.5534C11.1333 14.9067 11.5667 15.14 12.0267 15.2534C12.28 15.32 12.5467 15.34 12.8133 15.3267C13.4467 15.3 14.0667 15.0467 14.5533 14.56C15.24 13.8734 15.4733 12.9067 15.2533 12.0334C15.1467 11.5734 14.9067 11.14 14.5533 10.7867C14.0733 10.3 13.4467 10.04 12.8067 10.0067ZM14.16 12.6534C14.16 12.7934 14.1067 12.9134 14.0133 13.0067C13.92 13.1 13.8 13.1534 13.66 13.1534H13.1667V13.6734C13.1667 13.8134 13.1133 13.9334 13.02 14.0267C12.9267 14.12 12.8067 14.1734 12.6667 14.1734C12.3933 14.1734 12.1667 13.9467 12.1667 13.6734V13.1534H11.6667C11.3933 13.1534 11.1667 12.9267 11.1667 12.6534C11.1667 12.38 11.3933 12.1534 11.6667 12.1534H12.1667V11.68C12.1667 11.4067 12.3933 11.18 12.6667 11.18C12.94 11.18 13.1667 11.4067 13.1667 11.68V12.1534H13.66C13.94 12.1534 14.16 12.38 14.16 12.6534Z"
                  fill="#FACD66"
                />
                <path
                  d="M8.15334 8.04669C7.88 8.04669 7.66 8.26669 7.66 8.54003C7.66 8.81336 7.88 9.03336 8.15334 9.03336C8.42667 9.03336 8.64667 8.81336 8.64667 8.54003C8.64667 8.26669 8.42667 8.04669 8.15334 8.04669Z"
                  fill="#FACD66"
                />
                <path
                  d="M4.50667 8.70673C4.23334 8.70673 4.01334 8.92673 4.01334 9.20006C4.01334 9.47339 4.23334 9.69339 4.50667 9.69339C4.78 9.69339 5 9.47339 5 9.20006C5 8.92673 4.78 8.70673 4.50667 8.70673Z"
                  fill="#FACD66"
                />
                <path
                  d="M10.7933 1.33331H5.20668C5.02001 1.33331 4.84001 1.33998 4.66668 1.36665C2.56668 1.55998 1.33334 2.96665 1.33334 5.20665V10.7933C1.33334 13.0333 2.56668 14.44 4.66668 14.6333C4.84001 14.66 5.02001 14.6666 5.20668 14.6666H9.00001C9.26001 14.6666 9.42668 14.3733 9.32668 14.1333C9.13334 13.6733 9.00001 13.14 9.00001 12.6666C9.00001 10.6466 10.6467 8.99998 12.6667 8.99998C13.1733 8.99998 13.6667 9.09998 14.12 9.29998C14.3667 9.40665 14.6667 9.23998 14.6667 8.97331V5.20665C14.6667 2.77998 13.22 1.33331 10.7933 1.33331ZM9.65334 5.36665V8.53998C9.65334 8.54665 9.64668 8.55331 9.64668 8.56665C9.63334 9.37998 8.97334 10.04 8.15334 10.04C7.32668 10.04 6.66001 9.36665 6.66001 8.54665C6.66001 7.71998 7.33334 7.05331 8.15334 7.05331C8.32668 7.05331 8.49334 7.08665 8.65334 7.14665V6.01998L6.00668 6.73998V9.20665C6.00668 9.21331 6.00001 9.21998 6.00001 9.22665C5.98668 10.04 5.32668 10.6933 4.50668 10.6933C3.68001 10.6933 3.01334 10.02 3.01334 9.19998C3.01334 8.37998 3.68668 7.70665 4.50668 7.70665C4.68001 7.70665 4.84668 7.73998 5.00001 7.79998V6.35998V5.19331C5.00001 4.57331 5.38668 4.07331 5.98001 3.91331L7.96668 3.36665C8.58668 3.19998 8.96668 3.36665 9.18001 3.52665C9.48668 3.75998 9.64001 4.13998 9.64001 4.64665V5.36665H9.65334Z"
                  fill="#FACD66"
                />
              </svg>
              <p className="text-white text-sm md:text-base">
                Add to collection
              </p>
            </div>
            <div className="flex gap-1 md:gap-3 items-center py-2 px-3 bg-gray-700 rounded-[32px] md:h-[36px] md:w-[36px] md:grid md:place-items-center md:p-0 cursor-pointer hover:scale-95">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.51987 0.666973C4.93987 0.679746 5.34654 0.75308 5.74054 0.88708H5.77987C5.80654 0.899746 5.82654 0.913746 5.83987 0.926413C5.9872 0.973746 6.12654 1.02708 6.25987 1.10041L6.5132 1.21375C6.6132 1.26708 6.7332 1.36641 6.79987 1.40708C6.86654 1.44641 6.93987 1.48708 6.99987 1.53308C7.74054 0.96708 8.63987 0.660413 9.56654 0.666973C9.9872 0.666973 10.4072 0.726413 10.8065 0.860413C13.2672 1.66041 14.1539 4.36041 13.4132 6.72041C12.9932 7.92641 12.3065 9.02708 11.4072 9.92641C10.1199 11.1731 8.7072 12.2797 7.18654 13.2331L7.01987 13.3337L6.84654 13.2264C5.32054 12.2797 3.89987 11.1731 2.60054 9.91975C1.7072 9.02041 1.01987 7.92641 0.593202 6.72041C-0.160131 4.36041 0.726535 1.66041 3.21387 0.846413C3.4072 0.779746 3.60654 0.73308 3.80654 0.70708H3.88654C4.07387 0.679746 4.25987 0.666973 4.44654 0.666973H4.51987ZM10.4599 2.77375C10.1865 2.67975 9.88654 2.82708 9.78654 3.10708C9.6932 3.38708 9.83987 3.69375 10.1199 3.79308C10.5472 3.95308 10.8332 4.37375 10.8332 4.83975V4.86041C10.8205 5.01308 10.8665 5.16041 10.9599 5.27375C11.0532 5.38708 11.1932 5.45308 11.3399 5.46708C11.6132 5.45975 11.8465 5.24041 11.8665 4.95975V4.88041C11.8865 3.94641 11.3205 3.10041 10.4599 2.77375Z"
                  fill="#E5524A"
                />
              </svg>
              <p className="text-white md:hidden text-sm md:text-base">Like</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start md:flex-row mt-10 justify-between md:w-full lg:w-[1280px] h-[100vh] gap-10 md:gap-10">
        <div className=" px-8 pb-40">
          <h1 className="text-white text-4xl font-[500] mb-4">Lyrics</h1>
          {songData?.sections[1]?.text?.map((line) => {
            return <p className="text-gray-300 text-lg leading-7">{line}</p>;
          })}
        </div>
        <div className="md:w-2/3 mb-20">
          <h1 className="text-white mx-6 text-3xl font-[600] my-8">
            Related Songs
          </h1>
          {related?.map((item) => {
            return (
              <div className="text-white w-full">
                <div className="bg-gray-700 mb-3 py-4 px-5 rounded-[32px] flex gap-5 justify-between items-center mx-6">
                  <div className="flex items-center gap-3 flex-1">
                    <img
                      src={item?.images?.coverart}
                      className="rounded-[12px] w-[40px]"
                    />
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.43496 8.37182C0.540791 5.58016 1.58662 2.10933 4.51746 1.16599C6.05912 0.668493 7.96162 1.08349 9.04246 2.57433C10.0616 1.02849 12.0191 0.671826 13.5591 1.16599C16.4891 2.10933 17.5408 5.58016 16.6475 8.37182C15.2558 12.7968 10.4 15.1018 9.04246 15.1018C7.68579 15.1018 2.87329 12.8485 1.43496 8.37182Z"
                        stroke="#EFEEE0"
                        stroke-width="0.625"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.1572 4.30322C13.163 4.40656 13.7922 5.20406 13.7547 6.32156"
                        stroke="#EFEEE0"
                        stroke-width="0.625"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="items-center gap-2 whitespace-nowrap text-ellipsis max-w-[200px] flex-1  overflow-hidden">
                    {item?.title}
                  </p>
                  <p className="items-center gap-2 flex-1 hidden md:block whitespace-nowrap  ">
                    {item?.subtitle}
                  </p>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25782 8.94601C8.63788 8.94601 8.94598 8.63791 8.94598 8.25785C8.94598 7.8778 8.63788 7.5697 8.25782 7.5697C7.87777 7.5697 7.56967 7.8778 7.56967 8.25785C7.56967 8.63791 7.87777 8.94601 8.25782 8.94601Z"
                      stroke="#FACD66"
                      stroke-width="1.3763"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.25782 4.12887C8.63788 4.12887 8.94598 3.82077 8.94598 3.44072C8.94598 3.06066 8.63788 2.75256 8.25782 2.75256C7.87777 2.75256 7.56967 3.06066 7.56967 3.44072C7.56967 3.82077 7.87777 4.12887 8.25782 4.12887Z"
                      stroke="#FACD66"
                      stroke-width="1.3763"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.25782 13.763C8.63788 13.763 8.94598 13.4549 8.94598 13.0749C8.94598 12.6948 8.63788 12.3867 8.25782 12.3867C7.87777 12.3867 7.56967 12.6948 7.56967 13.0749C7.56967 13.4549 7.87777 13.763 8.25782 13.763Z"
                      stroke="#FACD66"
                      stroke-width="1.3763"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SongDetail;
