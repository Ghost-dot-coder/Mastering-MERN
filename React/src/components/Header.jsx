import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ insideHome }) => {
  const userWishlist = useSelector((state) => state.wishlistReducer);
  const userCart = useSelector((state) => state.createReducer);

  return (
    <>
      <nav className=" flex bg-violet-600 fixed w-full p-3 text-white ">
        <Link className="text-2xl font-bold" to={"/"}>
          <i class="fa-solid fa-truck-fast me-1"></i> Daily Cart
        </Link>
        <ul className="flex-1 text-right">
          {insideHome && (
            <li className="list-none inline-block px-5">
              <input
                type="text"
                className="rounded p-2 border "
                placeholder="Search Products here!"
              />
            </li>
          )}

          <Link to={"/wishlist"}>
            <li className="list-none inline-block px-5">
              <i className="fa-solid fa-heart text-red-600"></i> Wishlist{" "}
              <span className="bg-black text-white rounded p-1">
                {userWishlist?.length}
              </span>
            </li>
          </Link>

          <Link to={"/cart"}>
            <li className="list-none inline-block px-5">
              <i className="fa-solid fa-cart-plus text-green-600"></i>Cart{" "}
              <span className="bg-black text-white rounded p-1">
                {userCart?.length}
              </span>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Header;