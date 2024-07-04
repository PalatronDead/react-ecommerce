import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <Layout>
        <div className="mb-4 flex w-80 items-center justify-center">
          <h1 className="text-xl font-medium">Sign In</h1>
        </div>
        <div className="w-80">
          <div className="flex gap-1">
            <p className="text-base font-light">Email:</p>
            <span>palatron33@outlook.com</span>
          </div>
          <div className="flex gap-1">
            <p className="text-base font-light">Password:</p>
            <span>1234123</span>
          </div>
          <button className="mt-4 w-full rounded-lg bg-black py-3 text-white shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
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
        </div>
      </Layout>
    </>
  );
}

export default SignIn;
