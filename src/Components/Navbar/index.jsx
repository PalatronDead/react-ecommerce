import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const {
    setSearchByCategory,
    cartProducts,
    isSignOut,
    setIsSignOut,
    userData,
  } = useContext(ShoppingCartContext);

  const closeSession = () => {
    setIsSignOut(true);
  };
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="fixed top-0 z-10 flex w-full flex-wrap items-center justify-between px-5 py-5 text-sm font-light min-[470px]:flex-nowrap sm:px-8">
      <ul className="flex w-full items-center gap-3 sm:w-auto">
        <li className="text-lg font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory()}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/all"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory()}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory("electronics")}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelery"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory("jewelery")}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/men'sclothing"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory("men's clothing")}
          >
            Men's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women'sclothing"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory("women's clothing")}
          >
            Women's clothing
          </NavLink>
        </li>
      </ul>
      <ul className="flex w-full items-center gap-3 sm:w-auto">
        <li className="text-black/60">{isSignOut ? "" : userData.email}</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {isSignOut ? "" : "My Orders"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {isSignOut ? "" : "My Account"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => !isSignOut && closeSession()}
          >
            {isSignOut ? "Sign In" : "Sign Out"}
          </NavLink>
        </li>
        <li className="flex items-center">
          <ShoppingCartIcon className="h-6 w-6" />
          <div>{cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
