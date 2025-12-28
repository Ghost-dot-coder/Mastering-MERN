import { faCircleUser, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Auth = ({ register }) => {
  return (
    <div id="authpage" className="flex justify-center items-center w-full">
      <div className="bg-green-950 rounded-xl text-white text-center gap-4 flex flex-col justify-center items-center w-xl p-10 ">
        <div className=" flex justify-center items-center text-center flex-col px-5">
          <FontAwesomeIcon className="text-9xl" icon={faCircleUser} />
          <h2 className="text-2xl mt-4 font-bold">Register</h2>
        </div>

        <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
          <input
            type="text"
            placeholder="Username"
            className=" placeholder-gray-600 w-full text-black"
          />
        </div>

        <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
          <input
            type="text"
            placeholder="Email"
            className=" placeholder-gray-600 w-full text-black"
          />
        </div>

        <div className="w-full">
          <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
            <input
              type="password"
              placeholder="Password"
              className=" placeholder-gray-600 w-full text-black"
            />
            <FontAwesomeIcon className="text-green-950" icon={faEyeSlash} />
          </div>
          <p className="text-base text-start">
            *Never share password with others.
          </p>
        </div>

        {register ? (
          <button className="bg-white border border-white hover:bg-green-950 rounded hover:text-white text-green-950 px-4 py-2">
            Register
          </button>
        ) : (
          <button className="bg-white border border-white hover:bg-green-950 rounded hover:text-white text-green-950 px-4 py-2">
            Login
          </button>
        )}
        <div>
          {register ? (
            <p className="text-base">
              Are you already a user? <Link to={'/login'}>Login</Link>
            </p>
          ) : (
            <p className="text-base">
              Register <Link to={'/register'}>Login</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
