import React from 'react';
import './Background.css';
import 'animate.css';

const Background = () => {
  return (
    <div className="background">
      <div className="content -mt-20 text-black">
        <h1 className="text-white animate__animated animate__bounce">
          សាលារៀនបែបឌីជីថល
        </h1>
        <br />
        <div className="w-max mx-auto">
          <h1 className="overflow-hidden animate-typing mr-6 whitespace-nowrap border-r-4 border-r-white p-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">
            សម្រាប់ អ្នកបង្រៀន និងអ្នករៀនជំនាន់ថ្មី
          </h1>
        </div>
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          សាលារៀននិម្មិតសម្រាប់គ្រូបង្រៀននិងអ្នកជំនាញធ្វើការចែករំលែកចំណេះដឹងហើយសិស្សអាចស្វ័យសិក្សា
          <br />
          បានដោយខ្លួនឯងនៅ លើសាលាឌីជីថល។ អ្នកអាចអានសៀវភៅ​ និងទស្សនាមេរៀនជាវីដេអូ​
          ព្រមទាំងអាច <br />
          ​បង្កើតសាលារៀន និងបញ្ចូលមេរៀនបានដោយឥតគិតថ្លៃផងដែរ។
        </p>
      </div>
    </div>
  );
};

export default Background;
