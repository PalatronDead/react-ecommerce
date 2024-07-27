import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../Context/useLocalStorage";
import Layout from "../../Components/Layout";

function MyAccount() {
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  const { userData, setUserData, setIsSignOut } =
    useContext(ShoppingCartContext);
  return (
    <>
      <Layout>
        <div className="mb-4 flex w-80 items-center justify-center">
          <h1 className="text-xl font-medium">My Account</h1>
        </div>
        <div className="">
          <div className="mb-4 flex justify-center gap-1">
            <p className="font-light">My Name:</p>
            <span className="font-medium">{userData.name}</span>
          </div>
          <div className="mb-4 flex justify-center gap-1">
            <p className="font-light">My Email:</p>
            <span className="font-medium">{userData.email}</span>
          </div>
          <Link to={"/sign-up/edit"}>
            <button
              className={
                "mt-4 w-full rounded-lg bg-black py-3 text-white shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              }
              type="submit"
            >
              Edit
            </button>
          </Link>
        </div>
      </Layout>
    </>
  );
}

export default MyAccount;
