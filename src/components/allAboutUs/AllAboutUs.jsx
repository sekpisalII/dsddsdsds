import React from 'react';
import { FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";

const AllAboutUs = () => {
  return (
    <>
      <section className="relative">
        <img className="w-full h-[600px] object-cover" src="../src/assets/AboutUs_content.jpg" alt="About STEM" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <div className="w-max">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl p-3 text-white font-bold">
              អំពីយើង
            </h1>
          </div>
          <p className="text-center text-2xl px-4">
            STEM ដែលមាន​ទម្រង់ពេញ​ Science, technology, engineering, and mathematics) <br className="mt-2"/>
            ជាការធ្វើការដែលពាក់ព័ន្ធនឹង ផ្នែកវិទ្យាសាស្រ្ត, បច្ចេកវិទ្យា, វិស្វកម្ម និងគណិតវិទ្យា។
          </p>
        </div>
      </section>
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box ">
              <img src="../src/assets/Online learning (1).gif" alt="Online Learning" className="w-full"/>
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 text-center lg:text-left">
                  អំពី STEM
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 text-center lg:text-left max-w-2xl mx-auto">
                  ជាមួយ STEM អ្នកប្រើប្រាស់អាចរៀនតាមប្រព័ន្ធអ៊ីនធឺណិតទៅលើមុខជំនាញជាច្រើនដែលកំពុងពេញនិយម ពិសេសយើងផ្តោតសំខាន់ទៅលើជំនាញ STEM ដើម្បីអោយអ្នកសិក្សាបានយល់ដឹងអំពីសារ:សំខាន់នៃ STEM និងចូលរួមចំណែកក្នុងការអភិវឌ្ឍន៍ប្រទេសរបស់យើងផងដែរ។
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 text-center lg:text-left">
                  គោលបំណងរបស់ពួកយើង
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 text-center lg:text-left max-w-2xl mx-auto">
                  ប្រមូលផ្តុំឯកសារ និងវីឌីអូដែលជាភាសាខ្មែរដែលទាក់ទង STEM ដើម្បីជាជំនួយដល់ការលើកកម្ពស់ការបណ្តះបណ្តាលដល់ការសិក្សារទៅលើ STEM។
                </p>
              </div>
            </div>
            <div className="img-box">
              <img src="../src/assets/Course app.gif" alt="Purpose of STEM" className="w-full"/>
            </div>
          </div>
        </div>
      </section>

      <div className="w-max mx-auto text-blue-600">
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 text-center border-r-white text-3xl p-3 text-black font-bold">
          លោកគ្រូនិងអ្នកគ្រូរបស់យើង
        </h1>
      </div>

      {/* Our Mentor */}
      <section className="container mx-auto flex flex-wrap justify-center gap-28">
  <div className="w-full sm:w-[318.97px] flex-col justify-start items-center inline-flex mb-6 mentor-card">
    <img src="../src/assets/Mentor Muyleang.jpg" alt="Mentor" className="w-full h-auto"/>
    <div className="h-[82px] flex-col justify-start items-start flex">
      <div className="self-stretch text-center text-2xl font-bold font-suwannaphum text-blue-500">Ing Muyleang</div>
      <div className="self-stretch h-[39px] flex-col justify-start items-center flex">
        <div className="self-stretch text-center text-black text-[22px] font-medium font-suwannaphum">Mentor</div>
        <div className="justify-center items-center gap-[7px] inline-flex text-blue-500">
          <a href="https://www.facebook.com/"><FaFacebook /></a>
          <a href="https://github.com/"><FaGithub /></a>
          <a href="https://t.me/"><FaTelegram /></a>
        </div>
      </div>
    </div>
  </div>

  <div className="w-full sm:w-[318.97px] flex-col justify-start items-center inline-flex mb-6 mentor-card">
    <img src="../src/assets/Mentor Muyleang.jpg" alt="Mentor" className="w-full h-auto"/>
    <div className="h-[82px] flex-col justify-start items-start flex">
      <div className="self-stretch text-center text-2xl font-bold font-suwannaphum text-blue-500">Ing Muyleang</div>
      <div className="self-stretch h-[39px] flex-col justify-start items-center flex">
        <div className="self-stretch text-center text-black text-[22px] font-medium font-suwannaphum">Mentor</div>
        <div className="justify-center items-center gap-[7px] inline-flex text-blue-500">
          <a href="https://www.facebook.com/"><FaFacebook /></a>
          <a href="https://github.com/"><FaGithub /></a>
          <a href="https://t.me/"><FaTelegram /></a>
        </div>
      </div>
    </div>
  </div>
      </section>
      


      {/* About Us */}
      <div className="w-max mx-auto text-blue-600">
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 text-center border-r-white text-3xl p-3 text-black font-bold">
          សមាជិកក្រុមរបស់យើង
        </h1>
      </div>

      <div className="w-full h-auto flex flex-col justify-start items-center gap-10">
        <div className="self-stretch flex flex-wrap justify-center gap-10 text-blue-500">
          {[
            { name: 'Sek Pisal', role: 'Frontend', facebook: 'https://www.facebook.com/mengeam.seng?mibextid=ZbWKwL', github: 'https://github.com/MengEam08', telegram: 't.me/MengEam_Seng' },
            { name: 'Luy Kanika', role: 'Frontend', facebook: 'https://www.facebook.com/ka.nika.7737769?mibextid=ZbWKwL', github: 'https://github.com/Ni-kaaa', telegram: 't.me/nikaaaa03' },
            { name: 'Nam Ponleu', role: 'Frontend', facebook: 'https://www.facebook.com/nam.ponleu?mibextid=LQQJ4d', github: 'https://github.com/namponleu', telegram: 'https://t.me/ponleu07' },
            { name: 'Hong Sreyneang', role: 'Frontend', facebook: '', github: 'https://github.com/SREYNEANG-HONG', telegram: 'https://t.me/SREYNEANG_HONG' },
            { name: 'Boen Thi', role: 'Frontend', facebook: 'https://www.facebook.com/Boen.thi.monster?mibextid=ZbWKw', github: 'https://github.com/boenthi', telegram: 'http://t.me/BoenThi' },
            { name: 'Seng Meng Eam', role: 'Frontend', facebook: 'https://www.facebook.com/mengeam.seng?mibextid=ZbWKwL', github: 'https://github.com/MengEam08', telegram: 't.me/MengEam_Seng' },
            { name: 'Pon Channarith', role: 'Frontend', facebook: 'https://www.facebook.com/profile.php?id=100053897863470&mibextid=ZbWKwL', github: 'https://github.com/PonChannarith', telegram: 't.me/Channarith11' },
            { name: 'Sok Van', role: 'Frontend', facebook: 'https://www.facebook.com/van.sok.980?mibextid=ZbWKwL', github: 'https://github.com/VanSok55', telegram: 't.me/VanSok_z' },
            { name: 'Poch Piseth', role: 'Frontend', facebook: 'https://web.facebook.com/?_rdc=1&_rdr', github: 'https://github.com/PochPisethh', telegram: 'http://t.me/Zwcodecambodia168' }
          ].map((member, index) => (
            <div key={index} className="w-[318.97px] flex-col justify-start items-center inline-flex mb-6">
              <img src="../src/assets/Member.jpg" alt={member.name} className="w-full"/>
              <div className="h-[82px] flex-col justify-start items-start flex">
                <div className="self-stretch text-center font-suwannaphum text-2xl font-bold text-blue-500">{member.name}</div>
                <div className="self-stretch h-[39px] flex-col justify-start items-center flex">
                  <div className="self-stretch text-center text-black text-[22px] font-medium">{member.role}</div>
                  <div className="justify-center items-center gap-[5px] inline-flex mt-2">
                    {member.facebook && <a href={member.facebook}><FaFacebook /></a>}
                    {member.github && <a href={member.github}><FaGithub /></a>}
                    {member.telegram && <a href={member.telegram}><FaTelegram /></a>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllAboutUs;
