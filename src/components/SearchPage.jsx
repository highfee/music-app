import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetSongsBySearchQuery } from "../redux/services/shazam";
import { playPause, setActiveSong } from "../redux/slices/playerSlice";
import Card from "./Card";
import Loading from "./Loading";

const SearchPage = () => {
  let search = useParams("searchQuery");
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching } = useGetSongsBySearchQuery(search.searchQuery);

  const songs = data?.tracks?.hits.map((song) => song.track);

  const handlePlay = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  const handlePause = (song) => {
    dispatch(playPause(false));
  };
  return (
    <div className="flex justify-center w-[350px] md:min-w-[900px]  mx-auto maxh-[80vh] h-[80vh] z-50 overflow-hidden hover:overflow-auto hide-scroll hover:h-[120vh">
      {isFetching ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap gap-5 justify-center items-start">
          {songs?.map((song, i) => {
            return (
              <div className="hover-playPause">
                <Card
                  item={song}
                  activeSong={activeSong}
                  handlePause={handlePause}
                  handlePlay={handlePlay}
                  i={i}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
