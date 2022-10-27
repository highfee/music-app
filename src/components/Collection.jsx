import React from "react";

const Collection = () => {
  return (
    <div className="mt-3">
      <div className="flex gap-[20px]">
        <div className="rounded-[20px] py-[10px] px-[16px] bg-[#facd66] text-[14px] font-[400] text-[#1D2123]">
          My collection
        </div>
        <div className="rounded-[20px] py-[10px] px-[20px] text-[14px] font-[400] text-gray-400 border-solid border-[#3b3939] border-[.5px]">
          Likes
        </div>
      </div>

      <div>
        <div className="flex gap-5 mt-[20px] collection">
          <div className="w-[213px] h-[234px] rounded-[20px] relative overflow-hidden">
            <div className="overlay absolute inset-0 bg-black opacity-70"></div>
            <div>
              <div className="text-white absolute left-[15px] bottom-[-50px] collection-text">
                <h3 className="text-[24px] font-[400] text-[#EFEEE0]">
                  Limits
                </h3>
                <p className="mb-6 text-[16px] font-[400] text-[#EFEEE0]">
                  John Watts
                </p>
                <p className="mb-6 text-[14px] font-[400] text-[#EFEEE0]">
                  23m likes
                </p>
              </div>
              <div className="absolute bottom-[30px] right-[30px] text-white hidden play">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  fill="#fff"
                  width="20px"
                  height="20px"
                >
                  <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
