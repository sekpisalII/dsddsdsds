import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const LessonCard = () => {
  return (
    <>
      <section className="flex justify-between mt-5 w-[96%] mx-auto font-suwannaphum mb-4">
        <h3 className="font-bold text-[#16A1DF] text-3xl">មេរៀន</h3>
        <Link to="/lesson">
          <span className="flex items-center text-black text-[20px]">
            បង្ហាញទាំងអស់
            <FaArrowRightLong />
          </span>
        </Link>
      </section>
      <Link to="/lesson">
        <section className="grid grid-cols-1 h-auto sm:grid-cols-2 lg:grid-cols-4 gap-5 w-[96%] mx-auto">
          <div className="border rounded-lg bg-white text-gray-700 shadow-md">
            <div className="bg-transparent">
              <img
                className="h-[250px] w-full object-cover rounded-t-lg"
                src="../src/assets/stem_lesson_technology1.webp"
                alt=""
              />
            </div>
            <div className="p-3 line-clamp-3">
              <h4 className="block font-suwannaphum  text-2xl font-medium leading-snug tracking-normal text-blue-gray-900">
                ការសិក្សា និង​ការប្រើប្រាស់ប្រព័ន្ធគណនេយ្យ​
              </h4>
              <span className="block font-suwannaphum line-clamp-3 mt-2 text-[18px] antialiased font-normal leading-relaxed text-gray-700">
                ការសិក្សា និង​ការប្រើប្រាស់ប្រព័ន្ធគណនេយ្យ​ គឺ​ជាជំហ៊ានដ៏តឹងតែងមួយរបស់​សិស្សនិស្សិតគណនេយ្យ ព្រោះថាពួកគេ​មិនសូវទម្លាប់នឹង​ការប្រើប្រាស់​កុំព្យូទ័រ​​​ ។
              </span>
            </div>
            <div className="flex items-center justify-between p-4 -mt-5">
              <p className="font-suwannaphum text-[17px] text-black">
                ចំនួនអ្នកមេីល: 32 នាក់
              </p>
              <div className="flex items-center text-[15px] ">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Card1 */}
          <div className="border rounded-lg bg-white text-gray-700 shadow-md">
            <div className="bg-transparent">
              <img
                className="h-[250px] w-full object-cover rounded-t-lg"
                src="../src/assets/stem_lesson_technology2.webp"
                alt=""
              />
            </div>
            <div className="p-3">
              <h4 className="block font-suwannaphum text-2xl font-medium leading-snug tracking-normal text-blue-gray-900">
                ប្រព័ន្ធដំណើរការនៃកុំព្យូទ័រ​​
              </h4>
              <span className="block font-suwannaphum mt-2 text-[18px] antialiased font-normal leading-relaxed text-gray-700">
                  តើអ្នកដឹងទេថាកុំព្យូទ័រមានការប្រស្រ័យទាក់ទងគ្នា? 
                  វានិយាយគ្នាទៅតាមភាសាមួយគឺ ១ (មួយ )​ និង០ (សូន្យ) ហើយមនុស្សយើងមិនអាចនិយាយតាមភាសា១និងសូន្យបានទេ។
              </span>
            </div>
            <div className="flex items-center justify-between p-4 -mt-5">
              <p className="font-suwannaphum text-[17px] text-black">
                ចំនួនអ្នកមេីល: 37​ នាក់
              </p>
              <div className="flex items-center text-[15px] ">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ))}
              </div>
            </div>
          </div>
          {/* Card2 */}
          <div className="border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-transparent ">
              <img
                className="h-[250px]  rounded-t-lg w-full object-cover"
                src="../src/assets/stem_lesson_technology3.webp"
                alt=""
              />
            </div>
            <div className="p-3">
              <h4 className="block font-suwannaphum text-2xl font-medium leading-snug tracking-normal text-blue-gray-900">
                Learn Internet
              </h4>
              <span className="block font-suwannaphum mt-2 text-[18px] antialiased font-normal leading-relaxed text-gray-700">
                អ៊ីនធឺណែតគឺជាប្រព័ន្ធសកលលោកនៃបណ្តាញកុំព្យូទ័រដែលមានទំនាក់ទំនងគ្នាទៅវិញទៅមក។ ទោះយ៉ាងណាក៏ដោយ វាអាចត្រូវបានកំណត់...
              </span>
            </div>
            <div className="flex items-center justify-between p-3 -mt-3">
              <p className="font-suwannaphum text-[17px] text-black ">
                ចំនួនអ្នកមេីល: 29​​ នាក់
              </p>
              <div className="flex items-center text-[15px] ">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ))}
              </div>
            </div>
          </div>
          {/* Card3 */}
          <div className="border rounded-lg bg-white text-gray-700 shadow-md">
            <div className="relative h-full w-full overflow-hidden">
              <img
                className="h-full w-full object-cover rounded-md opacity-100 transition duration-300 ease-in-out transform scale-100"
                src="../src/assets/stem_lesson_technology.webp"
                alt="Stem Book"
              />
              <div className="absolute inset-0 font-suwannaphum bg-transparent hover:bg-slate-300 opacity-0 hover:opacity-60 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                <h2 className="text-black text-[25px] font-suwannaphum text-center font-bold">
                  ការសិក្សាអំពីមេរៀនផ្សេងៗជាច្រើន
                  <br />
                  <span className="text-[18px]">
                    ស្វែងរកមេរៀនជាច្រើនដែលមានជាខ្លីបវីដេអូថែមទៀតផង
                    ស្វែងរកមេរៀនជាច្រើនដែលមានជាខ្លីបវីដេអូថែមទៀតផង
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </section>
      </Link>
    </>
  );
};

export default LessonCard;
