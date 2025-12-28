import { faCircleUser, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../users/components/Header";

const Auth = ({ register }) => {
  return (
   <>
      <Header/>
      <div id="authpage" className="flex justify-center items-center w-full">
        <div className="bg-green-950 rounded-xl text-white text-center gap-4 flex flex-col justify-center items-center w-xl p-10 ">
          <div className=" flex justify-center items-center text-center flex-col px-5">
            <FontAwesomeIcon className="text-9xl" icon={faCircleUser} />
            {register ? (
              <h2 className="text-2xl mt-4 font-bold">Register</h2>
            ) : (
              <h2 className="text-2xl mt-4 font-bold">Login</h2>
            )}{" "}
          </div>
          {register && (
            <div className="flex w-full bg-white rounded items-center py-2 px-4 ">
              <input
                type="text"
                placeholder="Username"
                className=" placeholder-gray-600 w-full text-black"
              />
            </div>
          )}
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
            <div className="mt-1 w-full mb-5 flex justify-between">
              <p className="text-base text-start">
                *Never share password with others.
              </p>
              {!register && (
                <p className="text-base underline">Forget password?</p>
              )}
            </div>
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
          {!register && (
            <p className="text-white">---------------or------------------</p>
          )}{" "}
          {!register && (
            <button className="bg-white text-black w-full p-3 rounded">
              Login with Google
            </button>
          )}
          <div>
            {register ? (
              <p className="text-base">
                Are you already a user?{" "}
                <Link className="text-red-500" to={"/login"}>
                  Login
                </Link>
              </p>
            ) : (
              <p className="text-base">
                Are you a new user?{" "}
                <Link className="text-red-500" to={"/register"}>
                  Register
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer/>
   </>
  );
};

export default Auth;
