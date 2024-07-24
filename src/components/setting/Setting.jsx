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
                  <div className="field-body">
                    <div className="field file">
                      <label className="upload control rounded-lg">
                        <button className="button upload-button mx-3">Upload</button>
                        <input  type="file" />
                      </label>
                    </div>
                  </div>
                </div>
                    <div className="text-[20px]">
                      <div className="mb-2 block font-suwannaphum ">
                        <Label className="text-[20px]" htmlFor="text" value="នាមត្រកូល" />
                      </div>
                      <TextInput className="font-suwannaphum" id="first name" type="text" placeholder="បញ្ចូលនាមត្រកូល" required />
                    </div>
                    <div className="text-[20px]">
                      <div className="mb-2 block font-suwannaphum ">
                        <Label className="text-[20px] mt-4" htmlFor="text" value="នាមខ្លួន" />
                      </div>
                      <TextInput className="font-suwannaphum" id="last name" type="text" placeholder="បញ្ចូលនាមខ្លួន" required />
                 
                    </div>
                <div className="text-[20px]">
                      <div className="mb-2 block font-suwannaphum ">
                        <Label className="text-[20px] mt-4" htmlFor="text" value="អាស័យដ្ធាន" />
                      </div>
                      <TextInput className="font-suwannaphum" id="address" type="text" placeholder="បញ្ចូលអាស័យដ្ធានរបស់អ្នក" required />
                      
                </div>
                <div className="text-[23px] ">
                      <div className="mb-2 block font-suwannaphum ">
                        <Label className="text-[20px] mt-4" htmlFor="text" value="ឈ្មោះ" />
                      </div>
                      <TextInput className="font-suwannaphum" id="User name" type="text" placeholder="បញ្ចូលឈ្មោះរបស់អ្នក" required />
                    </div>
                  <div className="text-[20px] font-suwannaphum">
                      <div className="mb-2 block font-suwannaphum ">
                        <Label className="text-[20px] mt-4" htmlFor="email" value="អុីមែល" />
                      </div>
                      <TextInput id="email" type="email" placeholder="បញ្ចូលអុីមែលរបស់អ្នក" required />
                    </div>
                    <div className="text-[20px] font-suwannaphum">
                      <div className="mb-2 block font-suwannaphum ">
                        <Label className="text-[20px] mt-4" htmlFor="text" value="ថ្ងៃខែឆ្នាំកំណើត" />
                      </div>
                      <TextInput id="dbo" type="text" placeholder="បញ្ចូលថ្ងៃខែឆ្នាំកំណើត" required />
                    </div>
                <div className="field font-suwannaphum" >
                  <div className="control">
                    <button type="submit" className="button submit-button font-suwannaphum">
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
            <div className="card-content">
              <div className="image-container">
                <img
                  src="../src/assets/profile_pisal.jpg"
                  alt="John Doe"
                  className="avatar"
                />
              </div>
            </div>
            <span className="font-suwannaphum text-center mx-auto text-2xl text-gray-900 font-medium items-center ml-52">ព័ឥមានរបស់អ្នកប្រើប្រាស់</span>
            <div className=" w-full p-4 ">
            <ul className="space-y-2 font-suwannaphum">
              <li className="flex justify-between">
                <span>នាមត្រកូល</span>  
                <span>ប៉ុន</span> 
              </li>
              <li className="flex justify-between">
                <span>នាមខ្លួន</span>
                <span>ច័ន្ទណារិទ្ធិ</span>
              </li>
              <li className="flex justify-between">
                <span>អាស័យដ្ធាន</span>
                <span>សង្កាត់ចោមចៅទី១</span>
              </li>
              <li className="flex justify-between">
                <span>ឈ្មោះ</span>
                <span>ប៉ុន ច័ន្ទណារិទ្ធិ</span>
              </li>
              <li className="flex justify-between">
                <span>អុីមែល</span>
                <span>Channarith123@gmail.com</span>
              </li>
              <li className="flex justify-between">
                <span>ថ្ងៃខែឆ្នាំកំណើត</span>
                <span>២១-០១-២០០៨</span>
              </li>
            </ul>
        </div>
      </div>


        </div>
          </section>


    </>
  )
}
export default Setting;