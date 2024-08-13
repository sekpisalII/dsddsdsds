import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft,FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const ForumCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Number of items to show per slide

  const forums = [
    {
      imgSrc: "../src/assets/stem_book.jpg",
      title: "ការសិក្សាផ្សេងៗដែលទាក់ទងទៅនិង STEM",
      description: "ស្វែងរកសៀវភៅផ្សេងៗដែលទាក់ទងទៅនឹង Technology ជាពិសេសមានសៀវភៅជាច្រើនទាក់ទងគ្រប់កម្រិត​ មានច្រើនសម្រាប់ស្រាវជ្រាវ",
      views: 44,
    },
    {
      imgSrc: "../src/assets/stem_book_technology.webp",
      title: "STEM sister Cambodia",
      description:
        "បទសម្ភាសន៍អ្នកនាង អេង ឡេងស៊ា អំពីចំណាប់អារម្មណ៍ និងបទពិសោធន៍ ជ្រើសរើសបំពេញការងារក្នុងវិស័យស្ទែម (STEM) ?",
      views: 10,
    },
    {
      imgSrc: "../src/assets/Stem_book_technology1.webp",
      title: "ការអនុវត្តកម្មវិធីអប់រំបង្កើតហ្គេម",
      description: "ការអនុវត្តកម្មវិធីអប់រំបង្កើតហ្គេម នៅអនុវិទ្យាល៍័យកែវពណ៌ ខេត្តសៀមរាប Game Changers Coalition ក្រោមប្រធានបទ Technology",
      views: 24,
    },
    {
      imgSrc: "../src/assets/book_stem3.jpg",
      title: "Exploring STEM Innovations",
      description:
        "This book is designed to facilitate the study of STEM concepts, providing insights and knowledge",
      views: 63,
    },
    {
      imgSrc: "../src/assets/stem_book_technology2.webp",
      title: "GIMP Master Class",
      description:
        "GIMP ជាកម្មវិធីកុំព្យូទ័រ ប្រភេទ Open Source (ឥតគិតថ្លៃក្នុងការទាញយក តំឡើង ប្រើប្រាស់ និងចែករំលែកបន្ត) សម្រាប់ការកាត់ត កែសម្រួលកែល្អរូបកាព...",
      views: 67,
    },
    {
      imgSrc: "../src/assets/stem_forum_technoligy3.webp",
      title: "OBS Studio",
      description:
        "OBS Studio គឺជាកម្មវិធីសម្រាប់ថត និងផ្សាយផ្ទាល់។ វាអាចប្រើបានទាំង Windows, macOS, Linux distributions និង BSD ។",
      views: 100,
    },
    {
      imgSrc: "../src/assets/stem_book_technology5.webp",
      title: "Virtual Private Network (VPN)",
      description:
        "បណ្តាញឯកជននិម្មិត ឬ VPN គឺជាការតភ្ជាប់ដែលបានអ៊ិនគ្រីបតាមអ៊ីនធឺណិតពីឧបករណ៍មួយទៅបណ្តាញមួយ។ នេះធ្វើឱ្យវាហាក់ដូចជាអ្នកកំពុងភ្ជាប់អ៊ីនធឺណិត...",
      views: 94,
    },
    {
      imgSrc: "../src/assets/stem_book_technology6.webp",
      title: "រៀនរចនារូបភាពនៅលើកម្មវិធី Canva",
      description:
        "Canva គឺជាវេទិការចនាក្រាហ្វិចពហុជាតិជាសកលរបស់អូស្ត្រាលី ដែលត្រូវបានប្រើដើម្បីបង្កើតក្រាហ្វិក និងការបង្ហាញប្រព័ន្ធផ្សព្វផ្សាយសង្គម។",
      views: 9,
    },
    // Add more books as needed
  ];

  const totalSlides = Math.ceil(forums.length / itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(autoSlide);
  }, []);
  return (
    <>
      <section className="flex justify-between mt-5 w-[96%] mx-auto font-suwannaphum mb-5">
        <h3 className="font-bold text-[#16A1DF] text-3xl ">វេទិកា</h3>
        <Link to="/forum">
          <span className="flex items-center text-black text-[20px]">
            បង្ហាញទាំងអស់
            <FaArrowRightLong />
          </span>
        </Link>
      </section>
      <Link to="/forum">
        <section className="grid grid-cols-1 h-auto sm:grid-cols-2 lg:grid-cols-4 gap-4 w-[95%] mx-auto mb-4">
              <div className="relative border rounded-lg bg-white text-gray-700 shadow-md overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover opacity-100 transition duration-300 ease-in-out transform scale-100"
                src="../src/assets/stem_forum-technology.webp"
                alt="STEM Book"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-transparent hover:bg-slate-300 opacity-0 hover:opacity-60 transition-opacity duration-300 ease-in-out">
                <h2 className="text-black text-[25px] font-suwannaphum text-center font-bold">
                  ការសិក្សាផ្សេងៗដែលទាក់ទងទៅនិង STEM
                  <br />
                  <span className="text-[18px]">
                    ស្វែងរកសៀវភៅផ្សេងៗដែលទាក់ទងទៅនឹង Technology
                  </span>
                </h2>
              </div>
            </div>


          {/* Card1 */}
          <div className="border rounded-lg bg-white text-gray-700 shadow-md">
            <div className="bg-transparent">
              <img
                className="h-[250px] w-full object-cover rounded-t-lg"
                src="../src/assets/stem_forum_technology.jpg"
                alt=""
              />
            </div>
            <div className="p-3">
              <h4 className="block font-suwannaphum text-2xl font-medium leading-snug tracking-normal text-blue-gray-900">
                ពាក្យគន្លឹះបច្ចេកវិទ្យា “Machine Learning
              </h4>
              <span className="block font-suwannaphum mt-2 text-[18px] antialiased font-normal leading-relaxed text-gray-700">
                ពាក្យគន្លឹះបច្ចេកវិទ្យា “Machine Learning (ម៉ាស៊ីនស្វ័យសិក្សា)” ក្របខណ្ឌសមត្ថភាពអក្ខរកម្មឌីជីថល ប្រព័ន្ធផ្សព្វផ្សាយ និងព័ត៌មាន
              </span>
            </div>
            <div className="flex items-center justify-between p-4 -mt-5">
              <p className="font-suwannaphum text-[17px] text-black">
                ចំនួនអ្នកមេីល: 14​ នាក់
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
                src="../src/assets/stem_forum_technology1.webp"
                alt=""
              />
            </div>
            <div className="p-3">
              <h4 className="block font-suwannaphum text-2xl font-medium leading-snug tracking-normal text-blue-gray-900">
                ក្បួនដោះស្រាយបញ្ហា Algorithm
              </h4>
              <span className="block font-suwannaphum mt-2 text-[18px] antialiased font-normal leading-relaxed text-gray-700">
                ដំណោះស្រាយបច្ចេកវិទ្យាឌីជីថល​ ​សម្រាប់លើកកម្ពស់ការអប់រំ បំណិនជីវិតតាមមូលដ្ធាន និងដោះស្រាយបញ្ហាដែលទាក់ទងនិងបច្ចេកវិទ្យា
              </span>
            </div>
            <div className="flex items-center justify-between p-3 -mt-3">
              <p className="font-suwannaphum text-[17px] text-black ">
                ចំនួនអ្នកមេីល: 44​ នាក់
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
          <div className="border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-transparent rounded-none">
              <img
                className="h-[250px] w-full object-cover rounded-t-lg"
                src="../src/assets/stem_forum_technoligy3.webp"
                alt=""
              />
            </div>
            <div className="p-3">
              <h4 className="block font-suwannaphum text-2xl font-medium leading-snug tracking-normal text-blue-gray-900">
                សិក្សាមូលដ្ធានគ្រឹះនៃការរចនាក្រាហ្វិច
              </h4>
              <span className="block font-suwannaphum mt-2 text-[18px] antialiased font-normal leading-relaxed text-gray-700">
              Inkscape ជាកម្មវិធីកុំព្យូទ័រប្រភេទ Open Source សម្រាប់ការរចនាក្រាហ្វិកបែប Vector ក្រាហ្វិក ដែលអនុញ្ញាតអោយយើងគូរគំនូរតាមការស្រមើរស្រម៉ៃ...
           
              </span>
            </div>
            <div className="flex items-center justify-between p-3 -mt-3">
              <p className="font-suwannaphum text-[17px] text-black ">
                ចំនួនអ្នកមេីល: 65 នាក់
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
        </section>
       
      </Link>
      <section className="relative w-[96%] mx-auto overflow-hidden rounded-lg mb-5 gap-5">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {forums.map((book, index) => (
            <Link
              to="/bookAllCard"
              key={index}
              className="flex-shrink-0 w-[96%] sm:w-1/2 lg:w-1/4 px-2"
            >
              <div className="border bg-white text-gray-700 shadow-md rounded-lg">
                <div className="relative h-[250px] overflow-hidden">
                  <img
                    className="h-full w-full object-cover rounded-t-md"
                    src={book.imgSrc}
                    alt={book.title}
                  />
                  <div className="absolute inset-0 bg-transparent hover:bg-slate-300 opacity-0 hover:opacity-60 transition-opacity duration-300 ease-in-out flex items-center justify-center">
                    <h2 className="text-black text-[25px] font-suwannaphum text-center font-bold">
                      {book.title}
                      <br />
                      <span className="text-[18px]">{book.description}</span>
                    </h2>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="block font-suwannaphum text-2xl font-medium leading-snug tracking-normal text-blue-gray-900">
                    {book.title}
                  </h4>
                  <span className="block -mb-5 font-suwannaphum text-[18px] antialiased font-normal leading-relaxed text-gray-700">
                    {book.description}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3">
                  <p className="font-suwannaphum text-[17px] text-black">
                    ចំនួនអ្នកមេីល: {book.views} នាក់
                  </p>
                  <div className="flex items-center text-[15px]">
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
            </Link>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black p-3 rounded-full hover:bg-gray-700 transition-colors"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black p-3 rounded-full hover:bg-gray-700 transition-colors"
        >
          <FaChevronRight />
        </button>
      </section>
    </>
  );
};
export default ForumCard;
