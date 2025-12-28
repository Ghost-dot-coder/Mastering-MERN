import React from "react";

const Preloader = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="md:grid grid-cols-3">
          <div></div>
          <div className="flex justify-center items-center flex-col p-5 md:p-0">
            <img
              src="https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-3.gif"
              alt="no image "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
