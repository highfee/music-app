import { useState } from "react";
import { HiMenuAlt4, HiOutlineSearch } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../assets/icons";
import { mobileView } from "../redux/slices/backgroundSlice";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };
  return (
    <div className="sticky top-0 md:mi-w-[1138px] z-50 head flex w-full  items-center h-[50px]">
      <form className="b-[#1D2123]" onSubmit={handleSearch}>
        <div className="relative gap-4 md:gap-6 flex items-center w-[100vw] md:w-full px-3">
          <HiMenuAlt4
            size={30}
            fill="#fff"
            className="block md:hidden cursor-pointer"
            onClick={() => {
              dispatch(mobileView(true));
            }}
          />
          <Link to="/" className="block md:hidden">
            <img src={logo} alt="" />
          </Link>
          <HiOutlineSearch className="text-3xl md:text-2xl text-gray-400 absolute right-3 md:static" />
          <input
            type="text"
            className="w-[300px] md:w-[400px] bg-transparent outline-none text-gray-200 text-base py-1 px-1 focus:border-[#9b8181]"
            placeholder="Search artists"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
