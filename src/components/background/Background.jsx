import React from "react";
import "./Background.css";
import "animate.css";

const Background = () => {
  return ( 

    <section className="relative h-[80vh] md:h-[60vh] lg:h-[90vh]">
      <img src="src/assets/STEM_CONTENT.jpg" alt="image background Hero" sizes="100vh" className="absolute w-full md:h-[60vh] lg:h-[90vh] bg-center bg-cover bg-no-repeat bg-transparent object-cover"/>
      <div className="relative w-full h-[80vh] md:h-[60vh] lg:h-[90vh] mx-auto inset-0 bg-[#16A1DF]/40 backdrop-blur-lg flex flex-col justify-center items-center">
        <div className="container text-center p-4">
          <h2 className="text-white font-suwannaphum uppercase font-bold text-3xl sm:text-6xl lg:text-8xl">
            សាលារៀនបែបឌីជីថល
          </h2>
          <h3 class="text-white uppercase font-suwannaphum font-bold text-xl overflow-hidden mx-auto py-2 sm:text-3xl sm:mt-2 lg:text-5xl lg:mt-4 lg:py-4 animate__animated animate__fadeInUp typing">
             សម្រាប់ <span class="animate__animated animate__fadeInUp">អ្នកបង្រៀន</span> និង <span class="animate__animated animate__fadeInUp">អ្នករៀនជំនាន់ថ្មី</span>
            </h3>
          <p className="text-white font-suwannaphum text-base font-normal mt-4 my-0 sm:text-xl sm:text-wrap sm:px-2 lg:px-16 lg:mt-5 xl:mx-40 xl:px-40">
          បង្កើនចំណេះដឹងថ្មីៗជាមួយនឹង STEM Tuto 
          ឆ្ពោះទៅកាន់អនាគតភ្លឺស្វាងជាមួយនឹងការបណ្តុះបណ្តាលតាមបែបទំនេីប STEM ។ នៅ STEM Tuto យើងមានគោលបំណងក្នុងការផ្តល់នូវការយល់ដឹងយ៉ាងជ្រាលជ្រៅ និង ស្រឡាញ់ពេញចិត្តទៅលេីមុខវិជ្ជា វិទ្យាសាស្ត្រ បច្ចេកវិទ្យា វិស្វកម្ម និង គណិតវិទ្យា ដល់សិស្សានុសិស្សគ្រប់វ័យ និងគ្រប់ជំនាន់។ បេសកកម្មរបស់យើងគឺជំរុញ និងអភិវឌ្ឍជំនាន់ក្រោយនៃអ្នកច្នៃប្រឌិត អោយកាន់តែរីកចម្រើនទៅមុខបន្ថែមទៀតក្នុងការ ដោះស្រាយបញ្ហា និងការអភិវឌ្ឍន៍បច្ចេកវិទ្យាថ្មីៗ
          អោយកាន់តែប្រសេីរឡើង។
          </p>
        </div>
      </div>
    </section>
  );
};
export default Background;
