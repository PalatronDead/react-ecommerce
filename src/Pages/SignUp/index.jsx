import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <Layout>
        <div className="mb-4 flex w-80 items-center justify-center">
          <h1 className="text-xl font-medium">Sign Up</h1>
        </div>
        <div className="w-80">
          <form action="">
            <div className="mb-4">
              <label htmlFor="">Your name</label>
              <input
                className="w-80 rounded-lg border border-black p-2 focus:outline-none"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="">Your email</label>
              <input
                className="w-80 rounded-lg border border-black p-2 focus:outline-none"
                type="text"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="">Your password</label>
              <input
                className="w-80 rounded-lg border border-black p-2 focus:outline-none"
                type="text"
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
