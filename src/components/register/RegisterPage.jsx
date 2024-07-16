import React, { useState } from "react";
import axios from "axios"; // Assuming you're using Axios for HTTP requests
import { Navigate, useNavigation } from "react-router-dom";
// import { unstable_HistoryRouter } from "react-router-dom";

const RegisterPage = () => {
  let navigate = useNavigation();
  // const history = unstable_HistoryRouter();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Store any errors during submission

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous errors

    try {
      const response = await axios.post(
        "http://136.228.158.126:50001/api/register/",
        formData
      ); // Replace with your actual API endpoint
      console.log(response.data);
      // history.push("/");
      // Handle successful response (e.g., redirect, display success message)
      if (response.data.success) {
        // Redirect to success page or dashboard using useNavigate
        navigate("/book"); // Replace with your desired success route
      } else {
        // Handle potential API-specific error messages:
        setError(response.data.message || "Registration failed.");
      }
    } catch (error) {
      console.error(error); // Log the error for debugging
      setError(error.message || "An error occurred while submitting the form."); // Set a user-friendly error message
    } finally {
      setIsLoading(false); // Set loading state back to false
    }
  };

  return (
    <div className=" font-suwannaphum">
      <div className=" min-h-[150vh] flex fle-col items-center justify-center p-6">
        <div className="grid lg:grid-cols-2 items-center gap-6 max-w-7xl max-lg:max-w-xl w-full">
          <form onSubmit={handleSubmit} className="lg:max-w-md w-full">
            <h3 className="text-blue-600 text-3xl font-extrabold mb-12 text-center">
              បង្កើតគណនី
            </h3>
            <div className="space-y-6">
              <div>
                <label className="text-[20px]" htmlFor="text">
                  First Name:
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="bg-gray-100 w-full border-[#9F9F9F] rounded-[15px] text-gray-800 text-sm px-4 py-4 mt-3 focus:bg-transparent outline-blue-500 transition-all"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-[20px]" htmlFor="last_name">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="bg-gray-100 w-full border-[#9F9F9F] rounded-[15px] text-gray-800 text-sm px-4 py-4 mt-3 focus:bg-transparent outline-blue-500 transition-all"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-[20px]" htmlFor="username">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="bg-gray-100 w-full border-[#9F9F9F] rounded-[15px] text-gray-800 text-sm px-4 py-4 mt-3 focus:bg-transparent outline-blue-500 transition-all"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-[20px]" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-100 w-full border-[#9F9F9F] rounded-[15px] text-gray-800 text-sm px-4 py-4 mt-3 focus:bg-transparent outline-blue-500 transition-all"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-[20px]" htmlFor="password">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-gray-100 w-full border-[#9F9F9F] rounded-[15px] text-gray-800 text-sm px-4 py-4 mt-3 focus:bg-transparent outline-blue-500 transition-all"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-[20px]" htmlFor="confirm_password">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  className="bg-gray-100 w-full border-[#9F9F9F] rounded-[15px] text-gray-800 text-sm px-4 py-4 mt-3 focus:bg-transparent outline-blue-500 transition-all"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 border-gray-300 rounded"
                />
                <label
                  for="remember-me"
                  className="ml-3 block text-sm text-gray-800"
                >
                  ខ្ញុំទទួលយក{" "}
                  <a
                    href="javascript:void(0);"
                    className="text-blue-600 font-semibold hover:underline ml-1"
                  >
                    ខ្ញុំទទួលយកលក្ខខណ្ឌ
                  </a>
                </label>
              </div>
            </div>

            <div className="mt-12">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                {isLoading ? "Submitting..." : "បង្កើតគណនី"}
              </button>
              {error && <p className="error-message">{error}</p>}
            </div>

            <p className="text-sm text-gray-800 mt-6">
              មានគណនីហើយមែនទេ?{" "}
              <a
                href="/login"
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                ចូលគណនី
              </a>
            </p>
          </form>
          <img
            src="../src/assets/Sign up (3).gif"
            className="h-full max-lg:mt-12"
            autoPlay
            loop
            muted
          ></img>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
