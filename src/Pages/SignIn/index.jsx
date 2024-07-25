import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../Context/useLocalStorage";
import Layout from "../../Components/Layout";

function SignIn() {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const { userData, setUserData, setIsSignOut } =
    useContext(ShoppingCartContext);

  const { item: dataUser } = useLocalStorage("User", {});

  const navigate = useNavigate();

  const initiateSession = (e) => {
    e.preventDefault();
    if (
      userData.email === dataUser.email &&
      userData.password === dataUser.password
    ) {
      setIsSignOut(false);
      navigate("/");
    } else {
      setUserData({
        name: "",
        email: "",
        password: "",
      });
      alert("No existe esa cuenta, intente otro correo y contrasena");
    }
  };

  return (
    <>
      <Layout>
        <div className="mb-4 flex w-80 items-center justify-center">
          <h1 className="text-xl font-medium">Sign In</h1>
        </div>
        <div className="w-80">
          <form onSubmit={initiateSession}>
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
            <div className="mb-4">
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
              className={`${"bg-black text-white shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"} mt-4 w-full rounded-lg py-3 text-white`}
              type="submit"
            >
              Log in
            </button>
            <div className="mt-4 flex items-center justify-center">
              <a
                className="text-sm font-light underline underline-offset-4"
                href="#"
              >
                Forgot my password
              </a>
            </div>
            <Link to={"/sign-up"}>
              <button className="mt-6 w-full rounded-lg border border-black bg-white py-3 text-black shadow-md hover:shadow-lg">
                Sign up
              </button>
            </Link>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default SignIn;
