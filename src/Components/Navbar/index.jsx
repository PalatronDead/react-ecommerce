import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const {
    count,
    setSearchByCategory,
    cartProducts,
    isSignOut,
    setIsSignOut,
    setUserData,
    userData,
  } = useContext(ShoppingCartContext);

  const closeSession = () => {
    setIsSignOut(true);
  };
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between px-8 py-5 text-sm font-light">
      <ul className="flex items-center gap-3">
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
      <ul className="flex items-center gap-3">
        <li className="text-black/60">palatron@33outlook.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
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
