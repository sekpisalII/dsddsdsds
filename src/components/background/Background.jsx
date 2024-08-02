import React from "react";
import "./Background.css";
import "animate.css";

const Background = () => {
  return ( 

    <section className="relative h-[80vh] md:h-[60vh] lg:h-[90vh]">
      <img src="src/assets/STEM_CONTENT.jpg" alt="image background Hero" sizes="100vh" className="absolute w-full md:h-[60vh] lg:h-[90vh] bg-center bg-cover bg-no-repeat bg-transparent object-cover"/>
      <div className="relative w-full h-[80vh] md:h-[60vh] lg:h-[90vh] mx-auto inset-0 bg-[#16A1DF]/70 backdrop-blur-lg flex flex-col justify-center items-center">
        <div className="container text-center p-4">
          <h2 className="text-white font-suwannaphum uppercase font-bold text-3xl sm:text-6xl lg:text-8xl">
            សាលារៀនបែបឌីជីថល
          </h2>
          <h3 className="text-white uppercase font-suwannaphum font-bold text-xl overflow-hidden animate-pulse mx-auto py-2 sm:text-3xl sm:mt-2 lg:text-5xl lg:mt-4 lg:py-4">
            សម្រាប់​អ្នកបង្រៀន និងអ្នករៀនជំនាន់ថ្មី
          </h3>
          <p className="text-white font-suwannaphum text-base font-normal mt-4 my-0 sm:text-xl sm:text-wrap sm:px-2 lg:px-16 lg:mt-5 xl:mx-40 xl:px-40">
          សាលារៀននិម្មិតសម្រាប់គ្រូបង្រៀន និងអ្នកជំនាញធ្វើការចែករំលែកចំណេះដឹង ហើយសិស្សអាចស្វ័យសិក្សាបានដោយខ្លួនឯងនៅលើសាលាឌីជីថល។ អ្នកអាចអានសៀវភៅ​ និងទស្សនាមេរៀនជាវីដេអូ​ ព្រមទាំងអាច​បង្កើតសាលារៀន និងបញ្ចូលមេរៀនបានដោយឥតគិតថ្លៃផងដែរ។
          </p>
        </div>
      </div>
    </section>
  );
};
export default Background;
