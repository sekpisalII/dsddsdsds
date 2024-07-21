import React from "react";
import { FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";
import { Avatar } from "flowbite-react";

const AllAboutUs = () => {
  return (
    <>
    {/* Hero */}
      <section className="relative">
      <div className="absolute inset-0 backdrop-blur-sm"></div>
        <img
          className="w-full h-[80vh] object-cover"
          src="../src/assets/AboutUs_content.jpg"
          alt="About STEM"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <div className="w-max">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-2xl p-3 text-white font-bold sm:text-3xl">
              អំពីយើង
            </h1>
          </div>
          <p className="text-center text-base px-4 sm:text-lg">
            STEM ដែលមាន​ទម្រង់ពេញ​ (Science, technology, engineering, and
            mathematics) <br className="mt-2" />
            ជាការធ្វើការដែលពាក់ព័ន្ធនឹង ផ្នែកវិទ្យាសាស្រ្ត, បច្ចេកវិទ្យា,
            វិស្វកម្ម និងគណិតវិទ្យា។
          </p>
        </div>
      </section>
      
      {/* section 1 */}
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="img-box">
              <img
                src="../src/assets/Online-learning.gif"
                alt="Online Learning"
                className="w-auto h-[300px] sm:h-[520px]"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-suwannaphum uppercase font-bold text-2xl text-[#0056B1] mb-9 text-center sm:text-3xl">
                  អំពី STEM
                </h2>
                <p className="max-w-2xl mx-auto font-normal text-base leading-8 text-gray-500 text-center sm:text-left sm:text-lg">
                  ជាមួយ STEM
                  អ្នកប្រើប្រាស់អាចរៀនតាមប្រព័ន្ធអ៊ីនធឺណិតទៅលើមុខជំនាញជាច្រើនដែលកំពុងពេញនិយម
                  ពិសេសយើងផ្តោតសំខាន់ទៅលើជំនាញ STEM
                  ដើម្បីអោយអ្នកសិក្សាបានយល់ដឹងអំពីសារ:សំខាន់នៃ STEM
                  និងចូលរួមចំណែកក្នុងការអភិវឌ្ឍន៍ប្រទេសរបស់យើងផងដែរ។
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="lg:pr-[100px] flex items-center">
              <div className="data w-full">
                <h1 className="font-suwannaphum uppercase font-bold text-2xl text-[#0056B1] text-center sm:text-3xl">
                  គោលបំណងរបស់ពួកយើង
                </h1>
                <p className="max-w-2xl mx-auto-normal text-base leading-8 text-gray-500 text-center sm:text-left sm:text-lg">
                  ប្រមូលផ្តុំឯកសារ និងវីឌីអូដែលជាភាសាខ្មែរដែលទាក់ទង STEM
                  ដើម្បីជាជំនួយដល់ការលើកកម្ពស់ការបណ្តះបណ្តាលដល់ការសិក្សារទៅលើ
                  STEM។
                </p>
              </div>
            </div>
            <div className="img-box ml-14">
              <img
                src="../src/assets/Course app.gif"
                alt="Purpose of STEM"
                className="w-auto h-[300px] sm:h-[520px]"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mentor */}
      <div className="mt-10 flex flex-col justify-center w-max mx-auto">
        <h1 className="text-center text-3xl p-3 text-[#0056B1] font-bold sm:text-4xl">
          លោកគ្រូអ្នកគ្រូរបស់យើង
        </h1>


        <div className="mt-10 grid justify-center gap-28 sm:grid-cols-2">
          {/* Mentor 1 */}
          <div className="w-[320px] text-center py-2 px-2 bg-gray-100 hover:bg-green-200 shadow-sm rounded-lg hover:shadow-md">
          <img
            src="../src/assets/Mentor_MuyleangDevOps.jpg"
            alt="Mentor" height={220} 
            className="mx-auto mb-4 rounded-full  w-24 h-24  md:w-28 md:h-28 lg:w-36 lg:h-36"/>
          
          <h3 className="text-black text-md tracking-tight md:text-lg lg:text-2xl font-suwannaphum">Ing Muyleang</h3>
          <h4 className="text-blue-600 text-[20px] font-medium font-suwannaphum">Mentor</h4>

          {/* Link */}
          <ul className="mt-4 pb-2 flex justify-center space-x-4">
            <li>
              <a href="https://www.facebook.com/" target="_blank" className="text-xl text-blue-600 hover:text-black"><FaFacebook /></a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank"  className="text-xl text-gray-800 hover:text-black"><FaGithub /></a>
            </li>
            <li>
              <a href="https://t.me/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaTelegram /></a>
            </li>
          </ul>
          </div>
              
          {/* Mentor 2 */}
          <div className="w-[320px] text-center py-2 bg-gray-100 hover:bg-green-200 shadow-sm rounded-lg hover:shadow-lg">
          <img
            src="../src/assets/Mentor_Jessica1.jpg"
            alt="Mentor" height={220} 
            className="mx-auto mb-4 rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36"/>
          
          <h3 className="text-black text-md tracking-tight md:text-lg lg:text-2xl font-suwannaphum">Sun Jessica</h3>
          <h4 className="text-blue-600 text-[20px] font-suwannaphum font-medium">Mentor</h4>

          {/* Link */}
          <ul className="mt-4 pb-2 flex justify-center space-x-4">
            <li>
              <a href="https://www.facebook.com/" target="_blank" className="text-xl text-blue-600 hover:text-black"><FaFacebook /></a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank"  className="text-xl text-gray-800 hover:text-black"><FaGithub /></a>
            </li>
            <li>
              <a href="https://t.me/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaTelegram /></a>
            </li>
          </ul>
          </div>
        </div>
      </div>

      {/* Our member*/}
      <div className="flex flex-col justify-center mt-14 w-max mx-auto">
        <h1 className="text-center text-3xl p-3 text-[#0056B1] font-bold sm:text-4xl">
          សមាជិកក្រុមរបស់យើង
        </h1>
        
        {/* Member */}
        <div className="mt-10 grid justify-center items-center gap-16 sm:grid-cols-2 lg:grid-cols-3">
        <div className="w-[300px] text-center py-2 bg-gray-100 hover:bg-green-200 shadow-sm rounded-lg hover:shadow-md">
          <img
             src="../src/assets/profile AbountUs.jpg"
            alt="Mentor" height={200} 
            className="mx-auto mb-4 rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36"/>
          
          <h3 className="text-black text-md font-semibold tracking-tight md:text-lg lg:text-2xl font-suwannaphum">Sek Pisal</h3>
          <h4 className="text-blue-700 text-[20px] font-medium font-suwannaphum">Leader</h4>
          {/* Link */}
          <ul className="mt-4 pb-2 flex justify-center space-x-4">
            <li>
              <a href="https://www.facebook.com/" target="_blank" className="text-xl text-blue-600 hover:text-black"><FaFacebook /></a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaGithub /></a>
            </li>
            <li>
              <a href="https://t.me/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaTelegram /></a>
            </li>
          </ul>
          </div>


          <div className="w-[300px] text-center py-2 bg-gray-100 hover:bg-green-200 shadow-sm rounded-lg hover:shadow-md">
          <img
            src="../src/assets/profile AbountUs.jpg"
            alt="Mentor" height={200} 
            className="mx-auto mb-4 rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36"/>
          
          <h3 className="text-black text-md tracking-tight font-semibold md:text-lg lg:text-2xl font-suwannaphum">Hong Sreyneang</h3>
          <h4 className="text-blue-700 text-[20px] font-medium  font-suwannaphum">Frontend</h4>

          {/* Link */}
          <ul className="mt-4 pb-2 flex justify-center space-x-4">
            <li>
              <a href="https://www.facebook.com/" target="_blank" className="text-xl text-blue-600 hover:text-black"><FaFacebook /></a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaGithub /></a>
            </li>
            <li>
              <a href="https://t.me/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaTelegram /></a>
            </li>
          </ul>
        </div>

        <div className="w-[300px] text-center py-2 bg-gray-100 hover:bg-green-200 shadow-sm rounded-lg hover:shadow-md">
          <img
            src="../src/assets/profile AbountUs.jpg"
            alt="Mentor" height={200} 
            className="mx-auto mb-4 rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36"/>
          
          <h3 className="text-black text-md font-semibold font-suwannaphum tracking-tight md:text-lg lg:text-2xl">Pon Channarith</h3>
          <h4 className="text-blue-700 text-[20px] font-medium font-suwannaphum">Frontend</h4>

          {/* Link */}
          <ul className="mt-4 pb-2 flex justify-center space-x-4">
            <li>
              <a href="https://www.facebook.com/" target="_blank" className="text-xl text-blue-600 hover:text-black"><FaFacebook /></a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaGithub /></a>
            </li>
            <li>
              <a href="https://t.me/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaTelegram /></a>
            </li>
          </ul>
        </div>

        <div className="w-[300px] text-center py-2 bg-gray-100 hover:bg-green-200 shadow-sm rounded-dm hover:shadow-md">
          <img
            src="../src/assets/profile AbountUs.jpg"
            alt="Mentor" height={200} 
            className="mx-auto mb-4 rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36"/>
          
          <h3 className="text-black text-md font-semibold font-suwannaphum tracking-tight md:text-lg lg:text-2xl">Sok Van</h3>
          <h4 className="text-blue-700 text-[20px] font-suwannaphum font-medium">Frontend</h4>

          {/* Link */}
          <ul className="mt-4 pb-2 flex justify-center space-x-4">
            <li>
              <a href="https://www.facebook.com/" target="_blank" className="text-xl text-blue-600 hover:text-black"><FaFacebook /></a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaGithub /></a>
            </li>
            <li>
              <a href="https://t.me/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaTelegram /></a>
            </li>
          </ul>
        </div>

        <div className="w-[300px] text-center py-2 bg-gray-100 hover:bg-green-200 shadow-sm rounded-lg hover:shadow-md">
          <img
            src="../src/assets/profile AbountUs.jpg"
            alt="Mentor" height={200} 
            className="mx-auto mb-4 rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36"/>
          
          <h3 className="text-black text-md font-semibold font-suwannaphum tracking-tight md:text-lg lg:text-2xl">Luy Kanika</h3>
          <h4 className="text-blue-700 text-[20px] font-suwannaphum font-medium">UX/UI</h4>


          {/* Link */}
          <ul className="mt-4 pb-2 flex justify-center space-x-4">
            <li>
              <a href="https://www.facebook.com/" target="_blank" className="text-xl text-blue-600 hover:text-black"><FaFacebook /></a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaGithub /></a>
            </li>
            <li>
              <a href="https://t.me/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaTelegram /></a>
            </li>
          </ul>
        </div>

        <div className="w-[300px] text-center py-2 bg-gray-100 hover:bg-green-200 shadow-sm rounded-lg hover:shadow-md">
          <img
            src="../src/assets/profile AbountUs.jpg"
            alt="Mentor" height={200} 
            className="mx-auto mb-4 rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36"/>
          
          <h3 className="text-black text-md font-semibold font-suwannaphum tracking-tight md:text-lg lg:text-2xl">Nam Ponleu</h3>
          <h4 className="text-blue-700 text-[20px] font-suwannaphum font-medium">Frontend</h4>

          {/* Link */}
          <ul className="mt-4 pb-2 flex justify-center space-x-4">
            <li>
              <a href="https://www.facebook.com/" target="_blank" className="text-xl text-blue-600 hover:text-black"><FaFacebook /></a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaGithub /></a>
            </li>
            <li>
              <a href="https://t.me/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaTelegram /></a>
            </li>
          </ul>
        </div>

        <div className="w-[300px] text-center py-2 bg-gray-100 hover:bg-green-200 shadow-sm rounded-lg hover:shadow-md">
          <img
             src="../src/assets/profile AbountUs.jpg"
            alt="Mentor" height={200} 
            className="mx-auto mb-4 rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36"/>
          
          <h3 className="text-black text-md font-suwannaphum font-semibold tracking-tight md:text-lg lg:text-2xl">Seng Meng Eam</h3>
          <h4 className="text-blue-700 text-[20px] font-suwannaphum font-medium">UX/UI</h4>

          {/* Link */}
          <ul className="mt-4 pb-2 flex justify-center space-x-4">
            <li>
              <a href="https://www.facebook.com/" target="_blank" className="text-xl text-blue-600 hover:text-black"><FaFacebook /></a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaGithub /></a>
            </li>
            <li>
              <a href="https://t.me/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaTelegram /></a>
            </li>
          </ul>
        </div>

        <div className="w-[300px] text-center py-2 bg-gray-100 hover:bg-green-200 shadow-sm rounded-lg hover:shadow-md">
          <img
             src="../src/assets/profile AbountUs.jpg"
            alt="Mentor" height={200} 
            className="mx-auto mb-4 rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36"/>
          
          <h3 className="text-black text-md font-semibold font-suwannaphum tracking-tight md:text-lg lg:text-2xl">Boen Thi</h3>
          <h4 className="text-blue-700 text-[20px] font-suwannaphum font-medium">UX/UI</h4>

          {/* Link */}
          <ul className="mt-4 pb-2 flex justify-center space-x-4">
            <li>
              <a href="https://www.facebook.com/" target="_blank" className="text-xl text-blue-600 hover:text-black"><FaFacebook /></a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaGithub /></a>
            </li>
            <li>
              <a href="https://t.me/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaTelegram /></a>
            </li>
          </ul>
        </div>


        <div className="w-[300px] text-center py-2 bg-gray-100 hover:bg-green-200 shadow-sm rounded-lg hover:shadow-md">
          <img
             src="../src/assets/profile AbountUs.jpg"
            alt="Mentor" height={200} 
            className="mx-auto mb-4 rounded-full w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36"/>
          
          <h3 className="text-black text-md font-suwannaphum font-semibold tracking-tight md:text-lg lg:text-2xl">Poch Piseth</h3>
          <h4 className="text-blue-700 text-[20px] font-suwannaphum font-medium">UX/UI</h4>

          {/* Link */}
          <ul className="mt-4 pb-2 flex justify-center space-x-4">
            <li>
              <a href="https://www.facebook.com/" target="_blank" className="text-xl text-blue-600 hover:text-black"><FaFacebook /></a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaGithub /></a>
            </li>
            <li>
              <a href="https://t.me/" target="_blank"  className="text-xl text-blue-600 hover:text-black"><FaTelegram /></a>
            </li>
          </ul>
        </div>
        </div>
      </div>
        </>
  );
};
export default AllAboutUs;
