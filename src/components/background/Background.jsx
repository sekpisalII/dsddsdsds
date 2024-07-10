import React from "react";
import "./Background.css";
import "animate.css";

const Background = () => {
  return (
    // <div className="background">
    //   <div className="content -mt-20 text-black">
    //     <h1 className="text-white animate__animated animate__bounce">
    //       សាលារៀនបែបឌីជីថល
    //     </h1>
    //     <br />
    //     <div className="w-max mx-auto">
    //       <h1 className="overflow-hidden animate-typing mr-6 whitespace-nowrap border-r-4 border-r-white p-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">
    //         សម្រាប់ អ្នកបង្រៀន និងអ្នករៀនជំនាន់ថ្មី
    //       </h1>
    //     </div>
    //     <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
    //       សាលារៀននិម្មិតសម្រាប់គ្រូបង្រៀននិងអ្នកជំនាញធ្វើការចែករំលែកចំណេះដឹងហើយសិស្សអាចស្វ័យសិក្សា
    //       <br />
    //       បានដោយខ្លួនឯងនៅ លើសាលាឌីជីថល។ អ្នកអាចអានសៀវភៅ​ និងទស្សនាមេរៀនជាវីដេអូ​
    //       ព្រមទាំងអាច <br />
    //       ​បង្កើតសាលារៀន និងបញ្ចូលមេរៀនបានដោយឥតគិតថ្លៃផងដែរ។
    //     </p>
    //   </div>
    // </div>
    // <section className="bg-[url(/src/assets/STEM_CONTENT.jpg)] blur-[5px]  bg-cover bg-center bg-no-repeat text-white ">
    //   <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    //     <div className="mx-auto max-w-3xl text-center">
    //       <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl font-suwannaphum ">
    //         សាលារៀនបែបឌីជីថល
    //       </h1>
    //       <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
    //         សាលារៀននិម្មិតសម្រាប់គ្រូបង្រៀននិងអ្នកជំនាញធ្វើការចែករំលែកចំណេះដឹងហើយសិស្សអាចស្វ័យសិក្សា
    //         <br /> បានដោយខ្លួនឯងនៅ លើសាលាឌីជីថល។ អ្នកអាចអានសៀវភៅ​
    //         និងទស្សនាមេរៀនជាវីដេអូ​ ព្រមទាំងអាច ​បង្កើតសាលារៀន
    //         និងបញ្ចូលមេរៀនបានដោយឥតគិតថ្លៃផងដែរ។
    //       </p>
    //     </div>
    //   </div>
    // </section>
    <section className="relative bg-[url(/src/assets/STEM_CONTENT.jpg)] bg-cover bg-center bg-no-repeat h-[80vh]">
      <div className="absolute inset-0 bg-[#16A1DF]/75 blur-sm  "></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[80vh] lg:items-center lg:px-8 text-white font-suwannaphum">
        <div className=" mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className=" bg-clip-text text-[50px] font-extrabold sm:text-5xl    ">
              សាលារៀនបែបឌីជីថល
            </h1>
            <h1 className="overflow-hidden animate-typing mr-6 whitespace-nowrap border-r-4 border-r-white p-3 text-2xl font-bold">
              សម្រាប់ អ្នកបង្រៀន និងអ្នករៀនជំនាន់ថ្មី
            </h1>
            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed animate__animated animate__bounce ">
              សាលារៀននិម្មិតសម្រាប់គ្រូបង្រៀននិងអ្នកជំនាញធ្វើការចែករំលែកចំណេះដឹងហើយសិស្សអាចស្វ័យសិក្សា
              <br /> បានដោយខ្លួនឯងនៅ លើសាលាឌីជីថល។ អ្នកអាចអានសៀវភៅ​
              និងទស្សនាមេរៀនជាវីដេអូ​ ព្រមទាំងអាច ​បង្កើតសាលារៀន
              និងបញ្ចូលមេរៀនបានដោយឥតគិតថ្លៃផងដែរ។
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Background;
