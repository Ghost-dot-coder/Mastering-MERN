import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [status, setStatus] = useState(false);
  return (
    <>
      <div className="md:grid grid-cols-3 p-3">
        <div className="flex items-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/052/948/338/non_2x/a-modern-books-icon-showcasing-straightforward-design-with-a-clean-and-simple-concept-vector.jpg"
            alt="BookStore"
            style={{ width: "50px", height: "50px" }}
          />
          <h1 className="text-3xl md:hidden ms-2">BookStore</h1>
        </div>
        <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl">BOOK STORE</h1>
        </div>
        <div className="md:flex justify-end items-center hidden">
          <FontAwesomeIcon icon={faInstagram} className="me-3" />
          <FontAwesomeIcon icon={faXTwitter} className="me-3" />
          <FontAwesomeIcon icon={faFacebook} className="me-3" />
          <Link to={"/login"}>
            <button className="border border-black rounded px-3 py-2 ms-3">
              <FontAwesomeIcon icon={faUser} className="me-2" />
              Login
            </button>
          </Link>
          {/* <img
            src="https://static.vecteezy.com/system/resources/previews/009/267/048/non_2x/user-icon-design-free-png.png"
            alt=""
            className="mx-2"
            style={{ width: "40px", height: "40px" }}
          /> */}
        </div>
      </div>

      <nav className="p-3 w-full bg-gray-900 text-white md:flex justify-center">
        <div className="flex justify-between px-3 md:hidden">
          <span onClick={() => setStatus(!status)} className="text-2xl">
            <FontAwesomeIcon icon={faBars} />
          </span>
          <Link to={'/login'}>
            <button className="border border-black rounded px-3 py-2 ms-3">
              <FontAwesomeIcon icon={faUser} className="me-2" />
              Login
            </button>
          </Link>
          {/* <img
            src="https://static.vecteezy.com/system/resources/previews/009/267/048/non_2x/user-icon-design-free-png.png"
            alt=""
            className="mx-2"
            style={{ width: "40px", height: "40px" }}
          /> */}
        </div>
        <ul className={status ? "md:flex" : "md:flex justify-center hidden "}>
          <li className="mx-4 mt-3 md:mt-0">Home</li>
          <li className="mx-4 mt-3 md:mt-0">Books</li>
          <li className="mx-4 mt-3 md:mt-0">Careers</li>
          <li className="mx-4 mt-3 md:mt-0">Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
