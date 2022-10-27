import { Cover, NewReleases, Popular, TopChart } from "../components";

const Main = () => {
  return (
    <div className="h-[80vh] overflow-hidden hover:overflow-auto hide-scroll">
      <div className="flex flex-col lg:flex-row gap-8 justify-center w-ful">
        <Cover />
        <TopChart />
      </div>
      <div className="flex flex-col ">
        <NewReleases />
        <Popular />
      </div>
    </div>
  );
};

export default Main;
