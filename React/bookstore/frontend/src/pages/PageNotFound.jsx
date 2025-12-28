import React from "react";

const PagenotFound = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="md:grid grid-cols-3">
          <div></div>
          <div className="flex justify-center items-center flex-col p-5 md:p-0">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6006dd43893bc73c30c23d0d/1611062696335-6GPMFGGT0LNC898XH6OS/ezgif.com-crop.gif"
              alt="no image "
            />
            <p>Oh No!</p>
            <h2>Look like you're lost</h2>
            <h5>The page you are looking for is not available </h5>
            <button
              className="mt-4 px-4 py-3 bg-blue-800 text-white rounded hover:border
            hover:border;blue-800 hover:bg-white hover:text-blue-800"
            >
              Back Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagenotFound;
