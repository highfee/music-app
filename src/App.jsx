import "../style.scss";
import { Sidebar, Search, PlayerIndex, SongDetails } from "./components";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Main from "./pages/Main";
import Collection from "./components/Collection";
import { useSelector } from "react-redux";
import ArtistDetails from "./components/ArtistDetails";
import MobileSideBar from "./components/MobileSideBar";

function App() {
  const { active, uri } = useSelector((state) => state.background);
  const { activeSong } = useSelector((state) => state.player);
  const { pathname } = useLocation();
  const checkSongPath = pathname.split("/").includes("song");
  const checkArtistPath = pathname.split("/").includes("artist");

  const styles = {
    background: {
      backgroundImage: checkSongPath || checkArtistPath ? `url(${uri})` : "",
    },
  };

  return (
    <>
      <MobileSideBar />
      <div
        className="flex p-10 justify-center gap-8 body  w-full"
        style={styles.background}
      >
        {(checkSongPath || checkArtistPath) && <div className="overlay"></div>}
        <Sidebar />
        <div className="flex flex-col gap-10 w-min ">
          <Search />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/song/:songid" element={<SongDetails />} />
            <Route path="/artist/:artistId" element={<ArtistDetails />} />
            <Route path="/collection" element={<Collection />} />
          </Routes>
        </div>
      </div>
      <PlayerIndex />
    </>
  );
}

export default App;
