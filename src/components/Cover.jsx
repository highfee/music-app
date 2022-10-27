import cover from "../assets/images/cover.png";
import avatar from "../assets/images/avatar1.png";
import avatar2 from "../assets/images/avatar2.png";
import avatar3 from "../assets/images/avatar3.png";
import avatar4 from "../assets/images/avavtar4.png";
import avatar5 from "../assets/images/avatar5.png";
import { love } from "../assets/icons";

const Cover = () => {
  return (
    <div className="text-white text-3xl w-full md:w-[686px] h-[500px] md:h-[373px] bg-[#609EAF] rounded-[40px] bg-[url('../assets/icons/spiral.svg')] bg-cover relative animate-wave">
      <img src={cover} alt="" className="absolute right-0 hidden md:block" />
      <div className="h-full flex flex-col p-9 justify-between">
        <p className="text-[12px] font-[400]">Curated playlist</p>
        <div>
          <h1 className="text-[35px] font-[700] mb-3">R & B Hits</h1>
          <p
            className="text-[14px] font-[400] max-w-[275px]"
            style={{ lineHeight: "18px" }}
          >
            All mine, Lie again, Petty call me everyday, Out of time, No love,
            Bad habit, and so much more
          </p>
        </div>
        <div className="flex items-center pb-5">
          <div className="flex">
            <img src={avatar4} alt="" className="relative " />
            <img src={avatar5} alt="" className="relative left-[-10px] " />
            <img src={avatar3} alt="" className="relative left-[-20px]" />
            <img src={avatar4} alt="" className="relative left-[-30px] " />
            <img src={avatar5} alt="" className="relative left-[-40px] " />
          </div>
          <img src={love} alt="" className="relative left-[-30px]" />
          <p className="text-[14px] relative left-[-20px]">33k Likes</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
