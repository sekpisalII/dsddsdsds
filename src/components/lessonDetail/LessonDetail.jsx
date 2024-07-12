import React from 'react';

export default  () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <div className="pt-8 pb-[101px] flex flex-col lg:flex-row gap-7">
          <div className="flex-1 bg-white flex flex-col justify-start items-start gap-[30px]">
            <div className="self-stretch text-black text-2xl font-bold font-suwannaphum">
              សេចក្តីផ្តើមនៃសមីការឌីផេរ៉ង់ស្យែល
            </div>
            <div className="relative">
              <div className="absolute inset-0 pt-[650px] pb-[33.92px] bg-white shadow flex justify-center items-center">
                <div className="text-black text-2xl font-normal font-suwannaphum">ត្រីកោណប៉ុនគ្នា</div>
              </div>
              <div className="relative">
                <img
                  className="w-full h-auto object-cover"
                  src="../src/assets/LessonDetail.jpg"
                  alt="Lesson Detail"
                />
              </div>
            </div>
          </div>
          <div className="w-full sm:mt-[800px] md:mt-[260px] -mt-[100px] lg:w-[270px] h-auto lg:h-[485px] bg-white shadow flex flex-col justify-start items-start p-4 lg:p-0">
            <div className="text-black text-2xl font-normal font-suwannaphum">គណិតវិទ្យាថ្នាក់ទី១២</div>
            <div className="text-black text-base font-light font-suwannaphum">909 ទស្សនា - 13-Jun-2024</div>
            <div className="text-black text-lg font-normal font-suwannaphum">ចំនួនកុំផ្លិច(5)</div>
            <div className="text-black text-lg font-normal font-suwannaphum">ភាពជាប់នៃអនុគមន៍</div>
            <div className="text-black text-lg font-normal font-suwannaphum">អនុវត្តន៍ដេរីវេ</div>
            <div className="w-[216px] h-[34px] text-black text-lg font-normal font-suwannaphum">ព្រីមីទីវនិងអាំងតេក្រាល<br /></div>
            <div className="text-black text-lg font-normal font-suwannaphum">អាំងតេក្រាលកំណត់</div>
            <div className="text-black text-lg font-normal font-suwannaphum">អនុគមន៍អុិចស្ប៉ូណង់ស្យែល</div>
            <div className="text-black text-lg font-normal font-suwannaphum">អនុគមន៍លោការីត</div>
            <div className="text-black text-lg font-normal font-suwannaphum">អាំងតេក្រាលមិនកំណត់</div>
            <div className="text-black text-lg font-normal font-suwannaphum">សមីការឌីផេរ៉ង់ស្យែល</div>
          </div>
        </div>
        <div className="bg-white shadow flex flex-col justify-end items-start  gap-[9px] p-4 mt-8">
          <div className="self-stretch h-[35px] px-5 py-[3px] bg-white rounded-[20px] flex justify-center items-center">
            <div className="text-black  font-md text-[30px] font-suwannaphum ">អំពីមេរៀន</div>
          </div>
          <div className="text-black  text-[20px] font-light font-suwannaphum">
            គណិតវិទ្យាថ្នាក់ទី១២ បង្រៀនដោយលោកគ្រូ ថុល ចាន់ថន ។ នៅក្នុងវីដេអូមានលក្ខណៈកែលំហាត់ ហ្វឹកហាត់ ។ សិស្សអាចធ្វើការស្វ័យសិក្សាតាមរយៈវីដេអូ ។     របៀបរៀនតាមវីដេអូ៖ មើលវីដេអូ ហ្វឹកហាត់លំហាត់តាមរយៈឧទាហរណ៍ដែលបានដោះស្រាយ ។
          </div>
        </div>
      </div>
    </div>
  );
};

