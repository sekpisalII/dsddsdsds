import React from 'react';
import Dashboard from '../dashboard/Dashboard';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
const  Setting = () => {
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
          <form>
            <div className="field font-suwannaphum">
              <label htmlFor="avatar">Avatar</label>
              <div className="field-body">
                <div className="field file">
                  <label className="upload control rounded-lg">
                    <button className="button upload-button mx-3">Upload</button>
                    <input  type="file" />
                  </label>
                </div>
              </div>
            </div>
            <hr />
                <div className="text-[20px]">
                  <div className="mb-2 block font-suwannaphum ">
                    <Label className="text-[20px]" htmlFor="name" value="Name" />
                  </div>
                  <TextInput id="name" type="name" placeholder="Ex @ Pon Channarith" required />
                  <span class="help">Required. New username</span>
                </div>
             
                <div className="text-[20px]">
                  <div className="mb-2 block font-suwannaphum ">
                    <Label className="text-[20px] mt-4" htmlFor="email" value="Email" />
                  </div>
                  <TextInput id="email" type="email" placeholder="Channarith123@gmail.com" required />
                  <span class="help">Required. current password</span>
                </div>
            <hr />
            <div className="field font-suwannaphum" >
              <div className="control">
                <button type="submit" className="button submit-button">
                  Submit
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
        <div className="card-content">
          <div className="image-container">
            <img
              src="../src/assets/profile_pisal.jpg"
              alt="John Doe"
              className="avatar"
            />
          </div>
          <hr />
                <div className="text-[20px]">
                  <div className="mb-2 block font-suwannaphum ">
                    <Label className="text-[20px] mt-4" htmlFor="email" value="Email" />
                  </div>
                  <TextInput id="email" type="email" placeholder="Ex @ Channarith" required />
                  <span class="help">Required. New Username</span>
                </div>
          <hr />
          <div className="text-[20px]">
                  <div className="mb-2 block font-suwannaphum ">
                    <Label className="text-[20px] mt-4" htmlFor="email" value="Email" />
                  </div>
                  <TextInput id="email" type="email" placeholder="Channarith123@gmail.com" required />
                  <span class="help">Required. current password</span>
                </div>
        </div>
      </div>
    </div>
            <div className="card font-suwannaphum">
              <header className="card-header">
                <p className="card-header-title">
                  <span className="icon">
                    <i className="mdi mdi-lock" />
                  </span>
                  Change Password
                </p>
              </header>
              <div className="card-content">
                <form>
                <div className="text-[20px]">
                  <div className="mb-2 block font-suwannaphum ">
                    <Label className="text-[20px] mt-4" htmlFor="password" value="Current Password" />
                  </div>
                  <TextInput id="password" type="password" placeholder="Current password" required />
                  <span class="help">Required. Current password</span>
                </div>
                  <hr />
                  <div className="text-[20px]">
                  <div className="mb-2 block font-suwannaphum ">
                    <Label className="text-[20px] mt-4" htmlFor="password" value="New Password" />
                  </div>
                  <TextInput id="password" type="password" placeholder="New Password" required />
                  <span class="help">Required. New Password</span>
                </div>
                <div className="text-[20px]">
                  <div className="mb-2 block font-suwannaphum ">
                    <Label className="text-[20px] mt-4" htmlFor="password" value="Confirm Password" />
                  </div>
                  <TextInput id="password" type="password" placeholder="Confirm Password" required />
                  <span class="help">Required. Confirm Password</span>
                </div>
                  <hr />
                  <div className="field font-suwannaphum" >
                    <div className="control">
                      <button type="submit" className="button submit-button">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>


    </>
  )
}
export default Setting;