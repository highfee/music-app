import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetArtistDetailsQuery } from "../redux/services/shazam";
import { setBackground } from "../redux/slices/backgroundSlice";
import ArtistSongCard from "./ArtistSongCard";
import Loading from "./Loading";

const ArtistDetails = () => {
  const dispatch = useDispatch();
  const { artistId } = useParams();
  const { data: artistData, isFetching } = useGetArtistDetailsQuery(artistId);

  useEffect(() => {
    dispatch(
      setBackground(
        artistData?.artists?.[artistId].attributes.artwork.url
          .replace("{w}", 1000)
          .replace("{h}", 1000)
      )
    );
  }, [artistId, artistData]);

  const artistImage = artistData?.artists?.[artistId].attributes.artwork.url
    .replace("{w}", 800)
    .replace("{h}", 800);
  const artistName = artistData?.artists?.[artistId].attributes.name;
  const artistGenreNames =
    artistData?.artists?.[artistId].attributes.genreNames;
  console.log(artistData?.songs);
  if (isFetching) return <Loading />;

  return (
    <div className="w-full min-h-[80vh] h-[80vh] z-50 overflow-hidden hover:overflow-auto hide-scroll">
      {isFetching && <Loading />}
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="w-[300px] md:w-[284px]">
          <img src={artistImage} alt="" className=" rounded-[35px] w-[300px]" />
        </div>
        <div className="text-center md:text-left">
          <p className="text-4xl text-white mb-2 md:mb-6">{artistName}</p>
          <p className="text-gray-200 font-[500]">{artistGenreNames}</p>
          <div className="flex gap-1 md:gap-3 items-center px-3 py-2 bg-gray-700 rounded-[32px] mt-9">
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
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start md:flex-row mt-10 justify-between md:w-full lg:w-[1280px] h-[100vh] gap-10 md:gap-10">
        <div className="md:w-2/3">
          <h1 className="text-white mx-6 text-2xl md:text-4xl font-[600] mb-8">
            Some other songs by {artistName}
          </h1>
          <ArtistSongCard song={Object.values(artistData?.songs)} />
        </div>
      </div>
    </div>
  );
};

export default ArtistDetails;
