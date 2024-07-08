import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Carousel } from "flowbite-react";
const AllAboutUs = () => {
  return (
    <>
      <section className="relative">
      <img className="w-full h-[600px] object-cover" src="../src/assets/AboutUs_content.jpg" alt="About STEM" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 ">
     
        <div className="w-max">
    <h1
      className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl p-3 text-white font-bold">
      អំពីយើង
    </h1>
  </div>
        <p className="text-center text-2xl px-4">STEM ដែលមាន​ទម្រង់ពេញ​ Science, technology, engineering, and mathematics) <br className="mt-2"/>
         ជាការធ្វើការដែលពាក់ព័ន្ធនឹង ផ្នែកវិទ្យាសាស្រ្ត, បច្ចេកវិទ្យា, វិស្វកម្ម និងគណិតវិទ្យា។</p>
      </div>
    </section>
     {/* <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="../src/assets/login.jpg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
      <Carousel >
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div> */}

    <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                <div className="img-box  mt-8">
                  <img src="../src/assets/Online-learning.gif" alt=""classNameName="max-lg:mx-auto"/>
                </div>
                <div className="lg:pl-[100px] flex items-center">
                    <div className="data w-full">
                        <h2
                            className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                           អំពី STEM </h2>
                        <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                        ជាមួយSTEMអ្នកប្រើប្រាស់អាចរៀនតាមប្រព័ន្ធអ៊ីនធឺណិតទៅលើមុខជំនាញជាច្រើនដែលកំពុងពេញនិយមពិសេសយើងផ្តោតសំខាន់ទៅលើជំនាញSTEMដើម្បីអោយអ្នកសិក្សាបានយល់ដឹងអំពីសារ:សំខាន់នៃSTEMនិងចូលរួមចំណែកក្នុងការអភិវឌ្ឍន៍ប្រទេសរបស់យើងផងដែរលើសពីនេះយើងក៏មាននូវវេទិកាសាធារណៈដលដើរតួនាទីជាអ្នកsupportមួយយ៉ាងសំខាន់ក្នុងការជួយសម្រួលដល់ការសិក្សារបស់សិស្សតាមរយៈការអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ទាំងអស់អាចសួរនិងឆ្លើយសំណួរដោយសេរីនៅលើគេហទំព័ររបស់យើង។
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">

                <div className="lg:pr-24 flex items-center">
                    <div className="data w-full">
                        <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">គោលបំណងរបស់ពួកយើង</h2>
                        <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                        ប្រមូលផ្តុំឯកសារ និងវីឌីអូដែលជាភាសាខ្មែរដែលទាក់ទងSTEM (Science,  Technology,  Engineering,  and Mathematics) ឬ វិទ្យាសាស្រ្ត បច្ចេកវិទ្យា វិស្វករ និង គណិតវិទ្យា ដើម្បីជាជំនួយដល់ការលើកកម្ពស់ការ
                        បណ្តះបណ្តាលដល់ការសិក្សារទៅលើ STEM (Science,  Technology,  Engineering,  and Mathematics)។
                        </p>
                    </div>
                </div>
                <div className="img-box ">
                      <img src="../src/assets/purpose_STEM.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
    <div className="w-max mx-auto text-blue-600">
      <h1
      className="animate-typing  overflow-hidden whitespace-nowrap border-r-4  text-center border-r-white  text-3xl p-3 text-black font-bold">
      លោកគ្រូនិងអ្នកគ្រូរបស់យើង
    </h1>
    </div>
    {/* Our Mentor */}
    <section className="container mx-auto flex flex-wrap justify-center gap-28">

            <div className="w-full sm:w-[318.97px] flex-col justify-start items-center inline-flex mb-6 w-">
                <img src="../src/assets/Mentor Muyleang.jpg" alt="" />
            <div className="h-[82px] flex-col justify-start items-start flex">
                <div className="self-stretch text-center text-black text-2xl font-bold font-['Suwannaphum']">Luy Kanika</div>
                <div className="self-stretch h-[39px] flex-col justify-start items-center flex">
                <div className="self-stretch text-center text-black text-sm font-light font-['Suwannaphum']">Mentor</div>
                <div className="justify-center items-center gap-[5px] inline-flex"><FaFacebook /><FaGithub /></div>
                <div className="w-[37px] justify-center items-center gap-[5px] inline-flex" />
                </div>
            </div>
            </div>

            <div className="w-full sm:w-[318.97px] flex-col justify-start items-center inline-flex mb-6">
            <img src="../src/assets/Mentor Muyleang.jpg" alt="" />
            <div className="h-[82px] flex-col justify-start items-start flex">
                <div className="self-stretch text-center text-black text-2xl font-bold font-['Suwannaphum']">Sun Jessica</div>
                <div className="self-stretch h-[39px] flex-col justify-start items-center flex">
                <div className="self-stretch text-center text-black text-sm font-light font-['Suwannaphum']">Mentor</div>
                <div className="justify-center items-center gap-[5px] inline-flex"><FaFacebook /><FaGithub /></div>
                <div className="w-[37px] justify-center items-center gap-[5px] inline-flex" />
                </div>
            </div>
            </div>
        </section>

   {/* About Us */}
   <div className="w-max mx-auto text-blue-600">
      <h1
      className="animate-typing  overflow-hidden whitespace-nowrap border-r-4  text-center border-r-white  text-3xl p-3 text-black font-bold">
      សមាជិកក្រុមរបស់យើង
    </h1>
    </div>
        <div className="w-full h-auto flex flex-col justify-start items-center gap-10 ">
            
        <div className="self-stretch h-[930.73px] flex-col justify-start items-center gap-2.5 flex">
            <div className="w-[1204.91px] justify-start items-center gap-[120px] inline-flex">
            <div className="w-[318.97px] flex-col justify-start items-center inline-flex">
                <img src="../src/assets/Member.jpg" alt="" />
                <div className="h-[82px] flex-col justify-start items-start flex">
                <div className="self-stretch text-center text-black text-2xl font-bold font-['Suwannaphum']">Sok Van</div>
                <div className="self-stretch h-[39px] flex-col justify-start items-center flex">
                    <div className="self-stretch text-center text-black text-sm font-light font-['Suwannaphum']">Frontend</div>
                    <div className="justify-center items-center gap-[5px] inline-flex"><FaFacebook /><FaGithub /></div>
                    <div className="w-[37px] justify-center items-center gap-[5px] inline-flex" />
                </div>
                </div>
            </div>
            
            <div className="w-[318.97px] flex-col justify-start items-center inline-flex">
            <img src="../src/assets/Member.jpg" alt="" />
                <div className="h-[82px] flex-col justify-start items-start flex">
                <div className="self-stretch text-center text-black text-2xl font-bold font-['Suwannaphum']">Nam Ponleu</div>
                <div className="self-stretch h-[39px] flex-col justify-start items-center flex">
                    <div className="self-stretch text-center text-black text-sm font-light font-['Suwannaphum']">Frontend</div>
                    <div className="justify-center items-center gap-[5px] inline-flex"><FaFacebook /><FaGithub /></div>
                    <div className="w-[37px] justify-center items-center gap-[5px] inline-flex" />
                </div>
                </div>
            </div>
            <div className="w-[318.97px] flex-col justify-start items-center inline-flex">
            <img src="../src/assets/Member.jpg" alt="" />
                <div className="h-[82px] flex-col justify-start items-start flex">
                <div className="self-stretch text-center text-black text-2xl font-bold font-['Suwannaphum']">Luy Kanika</div>
                <div className="self-stretch h-[39px] flex-col justify-start items-center flex">
                    <div className="self-stretch text-center text-black text-sm font-light font-['Suwannaphum']">Frontend</div>
                    <div className="justify-center items-center gap-[5px] inline-flex"><FaFacebook /><FaGithub /></div>
                    <div className="w-[37px] justify-center items-center gap-[5px] inline-flex" />
                </div>
                </div>
            </div>
            </div>
            <div className="justify-center items-center gap-[120px] inline-flex">
            <div className="w-[318.97px] flex-col justify-start items-center inline-flex">
            <img src="../src/assets/Member.jpg" alt="" />
                <div className="h-[82px] flex-col justify-start items-start flex">
                <div className="self-stretch text-center text-black text-2xl font-bold font-['Suwannaphum']">Sek Pisal</div>
                <div className="self-stretch h-[39px] flex-col justify-start items-center flex">
                    <div className="self-stretch text-center text-black text-sm font-light font-['Suwannaphum']">Frontend</div>
                    <div className="justify-center items-center gap-[5px] inline-flex"><FaFacebook /><FaGithub /></div>
                    <div className="w-[37px] justify-center items-center gap-[5px] inline-flex" />
                </div>
                </div>
            </div>
            <div className="w-[318.97px] flex-col justify-start items-center inline-flex">
            <img src="../src/assets/Member.jpg" alt="" />
                <div className="h-[82px] flex-col justify-start items-start flex">
                <div className="self-stretch text-center text-black text-2xl font-bold font-['Suwannaphum']">Hong Sreyneang</div>
                <div className="self-stretch h-[39px] flex-col justify-start items-center flex">
                    <div className="self-stretch text-center text-black text-sm font-light font-['Suwannaphum']">Frontend</div>
                    <div className="justify-center items-center gap-[5px] inline-flex"><FaFacebook /><FaGithub /></div>
                    <div className="w-[37px] justify-center items-center gap-[5px] inline-flex" />
                </div>
                </div>
            </div>
            <div className="w-[318.97px] flex-col justify-start items-center inline-flex">
            <img src="../src/assets/Member.jpg" alt="" />
                <div className="h-[82px] flex-col justify-start items-start flex">
                <div className="self-stretch text-center text-black text-2xl font-bold font-['Suwannaphum']">Pon Chanarith</div>
                <div className="self-stretch h-[39px] flex-col justify-start items-center flex">
                    <div className="self-stretch text-center text-black text-sm font-light font-['Suwannaphum']">Frontend</div>
                    <div className="justify-center items-center gap-[5px] inline-flex"><FaFacebook /><FaGithub /></div>
                    <div className="w-[37px] justify-center items-center gap-[5px] inline-flex" />
                </div>
                </div>
            </div>
            </div>
            <div className="w-[1160.91px] justify-start items-center gap-[120px] inline-flex">
            <div className="w-[318.97px] flex-col justify-start items-center inline-flex">
            <img src="../src/assets/Member.jpg" alt="" />
                <div className="h-[82px] flex-col justify-start items-start flex">
                <div className="self-stretch text-center text-black text-2xl font-bold font-['Suwannaphum']">Seng Meng Eam</div>
                <div className="self-stretch h-[39px] flex-col justify-start items-center flex">
                    <div className="self-stretch text-center text-black text-sm font-light font-['Suwannaphum']">Frontend</div>
                    <div className="justify-center items-center gap-[5px] inline-flex"><FaFacebook /><FaGithub /></div>
                    <div className="w-[37px] justify-center items-center gap-[5px] inline-flex" />
                </div>
                </div>
            </div>
            <div className="w-[318.97px] flex-col justify-start items-center inline-flex">
            <img src="../src/assets/Member.jpg" alt="" />
                <div className="h-[82px] flex-col justify-start items-start flex">
                <div className="self-stretch text-center text-black text-2xl font-bold font-['Suwannaphum']">Boen Thi</div>
                <div className="self-stretch h-[39px] flex-col justify-start items-center flex">
                    <div className="self-stretch text-center text-black text-sm font-light font-['Suwannaphum']">Frontend</div>
                    <div className="justify-center items-center gap-[5px] inline-flex"><FaFacebook /><FaGithub /></div>
                    <div className="w-[37px] justify-center items-center gap-[5px] inline-flex" />
                </div>
                </div>
            </div>
            <div className="w-[318.97px] flex-col justify-start items-center inline-flex">
            <img src="../src/assets/Member.jpg" alt="" />
                <div className="h-[82px] flex-col justify-start items-start flex">
                <div className="self-stretch text-center text-black text-2xl font-bold font-['Suwannaphum']">Poch Piseth</div>
                <div className="self-stretch h-[39px] flex-col justify-start items-center flex">
                    <div className="self-stretch text-center text-black text-sm font-light font-['Suwannaphum']">Frontend</div>
                    <div className="justify-center items-center gap-[5px] inline-flex"><FaFacebook /><FaGithub /></div>
                    <div className="w-[37px] justify-center items-center gap-[5px] inline-flex" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
 </>
  );
};

export default AllAboutUs;
