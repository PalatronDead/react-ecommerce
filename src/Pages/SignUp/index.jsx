import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../Context/useLocalStorage";

function SignUp() {
  const { userData, setUserData, setIsSignOut } =
    useContext(ShoppingCartContext);
  const { item: dataUser, saveItem: saveDataUser } = useLocalStorage(
    "User",
    {},
  );
  const { item: signOutData, saveItem: saveSignOutData } = useLocalStorage(
    "Sign-out",
    true,
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.email === dataUser.email) {
      console.log("Uppps, yikes, si tienes cuenta registrada");
    } else {
      setIsSignOut(false);
      saveSignOutData(false);
      saveDataUser(userData);
      console.log("State user Data: ", userData);
      console.log("LocalStorage User Data: ", dataUser);
    }
  };

  const renderView = () => {
    if (isSignUp) {
      return (
        <>
          <div className="mb-4 flex w-80 items-center justify-center">
            <h1 className="text-xl font-medium">Sign Up</h1>
          </div>
          <div className="w-80">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name">Your name</label>
                <input
                  className="w-80 rounded-lg border border-black p-2 focus:outline-none"
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email">Your email</label>
                <input
                  className="w-80 rounded-lg border border-black p-2 focus:outline-none"
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password">Your password</label>
                <input
                  className="w-80 rounded-lg border border-black p-2 focus:outline-none"
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg border border-black bg-black py-2 text-white shadow-md hover:shadow-lg"
              >
                Create
              </button>
            </form>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="mb-4 flex w-80 items-center justify-center">
            <h1 className="text-xl font-medium">Sign Up</h1>
          </div>
          <div className="w-80">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name">Your name</label>
                <input
                  className="w-80 rounded-lg border border-black p-2 focus:outline-none"
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email">Your email</label>
                <input
                  className="w-80 rounded-lg border border-black p-2 focus:outline-none"
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password">Your password</label>
                <input
                  className="w-80 rounded-lg border border-black p-2 focus:outline-none"
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg border border-black bg-black py-2 text-white shadow-md hover:shadow-lg"
              >
                Edit
              </button>
            </form>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <Layout>
        <div className="mb-4 flex w-80 items-center justify-center">
          <h1 className="text-xl font-medium">Sign Up</h1>
        </div>
        <div className="w-80">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name">Your name</label>
              <input
                className="w-80 rounded-lg border border-black p-2 focus:outline-none"
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email">Your email</label>
              <input
                className="w-80 rounded-lg border border-black p-2 focus:outline-none"
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password">Your password</label>
              <input
                className="w-80 rounded-lg border border-black p-2 focus:outline-none"
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg border border-black bg-black py-2 text-white shadow-md hover:shadow-lg"
            >
              Create
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default SignUp;
