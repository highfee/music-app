const ArtistSongCard = ({ song }) => {
  return (
    <div className="mb-20">
      {song.map((item) => {
        return (
          <div className="text-white w-full">
            <div className="bg-gray-700 mb-3 py-4 px-5 rounded-[32px] flex gap-5 justify-between items-center mx-6">
              <div className="flex items-center gap-3 flex-1">
                <img
                  src={item?.attributes?.artwork?.url
                    .replace("{w}", "125")
                    .replace("{h}", "125")}
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
                {item?.attributes?.name}
              </p>
              <p className="items-center gap-2 flex-1 hidden md:block whitespace-nowrap text-ellipsis max-w-[200px] overflow-hidden">
                {item?.attributes?.albumName}
              </p>
              <div className="flex-1 text-right relative h-full">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 right-0 translate-y-[-50%]"
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
          </div>
        );
      })}
    </div>
  );
};

export default ArtistSongCard;
