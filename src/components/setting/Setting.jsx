import { useEffect, useState } from "react";
import Dashboard from "../dashboard/Dashboard";
// import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import axios from "axios";
import { AUTH_HEADER } from "../../services/constants";
import { Label, TextInput } from "flowbite-react";
const Setting = () => {
  const [profileData, setProfileData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    dob: "",
    last_name: "",
    username: "",
    email: "",
    address: "",
    image: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSubmit = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSubmit.append(key, formData[key]);
      });

      const response = await axios.put(
        "http://136.228.158.126:50001/api/profile/",
        formDataToSubmit,
        {
          headers: {
            ...AUTH_HEADER,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFormData(response.data);
      // Update the local state with the new data
      setSuccessMessage("Profile updated successfully!");
      setErrorMessage(""); // Update the local state with the new data
    } catch (error) {
      console.error(error.response.data); // Inspect the server's response data
      if (
        error.response &&
        error.response.data &&
        error.response.data.error === "Username already exists"
      ) {
        setErrorMessage(
          "Username already exists. Please choose a different username."
        );
        setSuccessMessage("");
      } else {
        console.error(error.response.data); // Inspect the server's response data
        setErrorMessage("An error occurred while updating your profile.");
        setSuccessMessage("");
      }
    }
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          "http://136.228.158.126:50001/api/profile/",
          {
            headers: {
              ...AUTH_HEADER,
              "Content-Type": "application/json",
            },
          }
        );
        setProfileData(response.data);
      } catch (error) {
        console.error(error);
        setErrorMessage("An error occurred while fetching your profile data.");
        setSuccessMessage("");
      }
    };

    fetchProfileData();
  }, []);
  return (
    <>
      <Dashboard />
      <section className="section main-section max-w-screen-xl mx-auto mt-7">
        <div className="profile-container">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title font-suwannaphum">
                <span className="icon">👤</span>
                Edit Profile
              </p>
            </header>
            <div className="card-content">
              <form onSubmit={handleSubmit}>
                <div className="field font-suwannaphum">
                  <div className="field-body">
                    <div className="field file">
                      <label className="upload control rounded-lg">
                        <button className="button upload-button mx-3">
                          Upload
                        </button>
                        <input
                          type="file"
                          id="image"
                          name="image"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="text-[20px]">
                  <div className="mb-2 block font-suwannaphum ">
                    <Label
                      className="text-[20px]"
                      htmlFor="text"
                      value="នាមត្រកូល"
                    />
                  </div>
                  <TextInput
                    className="font-suwannaphum"
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    placeholder="បញ្ចូលនាមត្រកូល"
                  />
                </div>
                <div className="text-[20px]">
                  <div className="mb-2 block font-suwannaphum ">
                    <Label
                      className="text-[20px]"
                      htmlFor="text"
                      value="បញ្ចូលនាមខ្លួន"
                    />
                  </div>
                  <TextInput
                    className="font-suwannaphum"
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    placeholder="បញ្ចូលនាមខ្លួន"
                  />
                </div>
                <div className="text-[23px] ">
                  <div className="mb-2 block font-suwannaphum ">
                    <Label
                      className="text-[20px] mt-4"
                      htmlFor="text"
                      value="ឈ្មោះ"
                    />
                  </div>
                  <TextInput
                    className="font-suwannaphum"
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="បញ្ចូលឈ្មោះ"
                  />
                </div>
                <div className="text-[20px] font-suwannaphum">
                  <div className="mb-2 block font-suwannaphum ">
                    <Label
                      className="text-[20px] mt-4"
                      htmlFor="email"
                      value="អុីមែល"
                    />
                  </div>
                  <TextInput
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="បញ្ចូលអុីមឺល"
                  />
                </div>
                <div className="text-[20px] font-suwannaphum">
                  <div className="mb-2 block font-suwannaphum ">
                    <Label
                      className="text-[20px] mt-4"
                      htmlFor="text"
                      value="ថ្ងៃខែឆ្នាំកំណើត"
                    />
                  </div>
                  <TextInput
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    placeholder="បញ្ចូលថ្ងៃខែឆ្នាំកំណើត"
                  />
                </div>
                <div className="text-[20px]">
                  <div className="mb-2 block font-suwannaphum ">
                    <Label
                      className="text-[20px] mt-4"
                      htmlFor="text"
                      value="អាស័យដ្ធាន"
                    />
                  </div>
                  <TextInput
                    className="font-suwannaphum"
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="បញ្ចូលអាស័យដ្ធាន"
                  />
                </div>

                <div className="field font-suwannaphum">
                  <div className="control">
                    <button
                      type="submit"
                      className="button submit-button font-suwannaphum"
                    >
                      បញ្ចូន
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                <span className="icon">👥</span>
                Profile
              </p>
            </header>
            {profileData ? (
              <div>
                <div className="card-content">
                  <div className="image-container">
                    {profileData.image ? (
                      <img
                        src={profileData.image}
                        alt="Profile"
                        className="avatar"
                      />
                    ) : (
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_JlCFnIGX5omgjEjgV9F3sBRq14eTERK9w&s"
                        alt="Placeholder"
                        className="avatar"
                      />
                    )}
                  </div>
                </div>

                <span className="font-suwannaphum text-center mx-auto text-2xl text-gray-900 font-medium items-center ml-52">
                  ពណ៏មានរបស់អ្នកប្រើប្រាស់
                </span>
                <div className=" w-full p-4 ">
                  <ul className="space-y-2 font-suwannaphum">
                    <li className="flex justify-between">
                      <span>នាមត្រកូល</span>
                      <span>{profileData.first_name}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>នាមខ្លួន</span>
                      <span>{profileData.last_name}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>អាស័យដ្ធាន</span>
                      <span> {profileData.address}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>ឈ្មោះ</span>
                      <span>{profileData.username}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>អុីមែល</span>
                      <span>{profileData.email}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>ថ្ងៃខែឆ្នាំកំណើត</span>
                      <span> {profileData.dob}</span>
                    </li>
                    {successMessage && (
                      <div className="success-message text-blue-600">
                        {successMessage}
                      </div>
                    )}
                    {errorMessage && (
                      <div className="error-message text-red-600">
                        {errorMessage}
                      </div>
                    )}
                  </ul>
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Setting;
