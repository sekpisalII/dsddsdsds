import React, { useState } from "react";
import axios from "axios"; // Assuming you're using Axios for HTTP requests
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
// import { unstable_HistoryRouter } from "react-router-dom";
const RegisterPage = () => {
  const Navigate = useNavigate();

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
    event.preventDefault();
    setIsLoading(true); // Set loading state to true

    try {
      const response = await axios.post(
        "http://136.228.158.126:50001/api/register/",
        formData
      );

      if (response.status === 201) {
        alert("Account has been created successfully.", "success");
        Navigate("/otp"); // Use the `Navigate` function to redirect to the OTP page
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
      <div className=" flex fle-col items-center justify-center p-6">
        <div className="grid lg:grid-cols-2 items-center gap-6 max-w-7xl max-lg:max-w-xl w-full">
          <form onSubmit={handleSubmit} className="lg:max-w-md w-full">
            <h3 className="text-blue-600 text-3xl font-extrabold mb-12 text-center">
              បង្កើតគណនី
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-[20px] font-suwannaphum" htmlFor="text">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="font-suwannaphum bg-gray-100 w-full border-[#9F9F9F] rounded-[10px] text-gray-800 text-sm px-4 py-3 mt-3 focus:bg-transparent outline-blue-500 transition-all"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <label className="text-[20px] font-suwannaphum" htmlFor="last_name">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="bg-gray-100 w-full border-[#9F9F9F] rounded-[10px] text-gray-800 text-sm px-4 py-3 mt-3 focus:bg-transparent outline-blue-500 transition-all"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required
                />
              </div>
              <div>
                <label className="text-[20px] font-suwannaphum" htmlFor="username">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="bg-gray-100 w-full border-[#9F9F9F] rounded-[10px] text-gray-800 text-sm px-4 py-3 mt-3 focus:bg-transparent outline-blue-500 transition-all"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div>
                <label className="text-[20px] font-suwannaphum" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-100 w-full border-[#9F9F9F] rounded-[10px] text-gray-800 text-sm px-4 py-3 mt-3 focus:bg-transparent outline-blue-500 transition-all"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="text-[20px] font-suwannaphum" htmlFor="password">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-gray-100 w-full border-[#9F9F9F] rounded-[10px] text-gray-800 text-sm px-4 py-3 mt-3 focus:bg-transparent outline-blue-500 transition-all"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div>
                <label className="text-[20px] font-suwannaphum" htmlFor="confirm_password">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  className="bg-gray-100 w-full border-[#9F9F9F] rounded-[10px] text-gray-800 text-sm px-4 py-3 mt-3 focus:bg-transparent outline-blue-500 transition-all"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  placeholder="Enter your confirm password"
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

            <p className="text-sm text-gray-800 mt-6 font-suwannaphum">
              មានគណនីហើយមែនទេ?{" "}
              <a
                href="/login"
                className="text-blue-600 font-semibold hover:underline ml-1 font-suwannaphum"
              >
                ចូលគណនី
              </a>
            </p>
          </form>
          <img
            src="../src/assets/Sign up (3).gif "
            className="h-full w-full max-lg:mt-12 object-cover"
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
