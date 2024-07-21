import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [formData, setFormData] = useState({
    email: "",
    otp_code: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://136.228.158.126:50001/api/verify-otp/",
        formData
      );
      if (response.status === 200) {
        setSuccess(true);
        // Handle successful OTP verification, e.g., redirect to another page
        navigate("/login");
      } else {
        setError(response.data.message || "OTP verification failed.");
      }
    } catch (error) {
      console.error(error);
      setError(error.message || "An error occurred while verifying the OTP.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="font-suwannaphum">
      <div className="max-w-md mx-auto border mt-20">
        <h2 className="text-center font-bold text-[35px] text-blue-600 mt">
          Verify OTP
        </h2>
        {error && (
          <div className="error text-md text-red-600 text-center">{error}</div>
        )}
        {success ? (
          <div>OTP verified successfully!</div>
        ) : (
          <form
            className="bg-white shadow-md rounded px-8 py-6"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="otp_code"
              >
                OTP Code:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="otp_code"
                name="otp_code"
                value={formData.otp_code}
                onChange={(e) =>
                  setFormData({ ...formData, otp_code: e.target.value })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify OTP"}
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800"
                href="#"
              >
                Resend OTP
              </a>
            </div>
          </form>
        )}
      </div>
    </div>

    //
    // <div>
    //   <div className="max-w-md mx-auto border mt-20">
    //     <form className="bg-white shadow-md rounded px-8 py-6">
    //       <div className="mb-4">
    //         <label
    //           className="block text-gray-700 text-sm font-bold mb-2"
    //           for="otp"
    //         >
    //           OTP:
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           id="otp"
    //           type="text"
    //           placeholder="Enter OTP"
    //         />
    //       </div>
    //       <div className="flex items-center justify-between">
    //         <button
    //           className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //           type="button"
    //         >
    //           Verify
    //         </button>
    //         <a
    //           className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800"
    //           href="#"
    //         >
    //           Resend OTP
    //         </a>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};
export default Otp;
