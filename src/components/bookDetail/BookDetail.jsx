import { Link, useParams } from "react-router-dom";
import Book from "../../page/book/Book";

const BookDetail = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="w-full md:w-[1230px] h-auto md:h-[1243px] relative bg-neutral-100">
        <div className="w-full md:w-[750px] h-auto md:h-[1243px] left-0 top-0 absolute">
          <div className="p-4 md:pl-[23px] md:pr-[130px] md:pb-[13px] left-0 md:left-[141px] top-0 absolute bg-white rounded-[20px] justify-start items-center inline-flex">
            <div className="self-stretch justify-start items-center gap-4 md:gap-[47px] inline-flex">
              <div className="w-full md:w-[200px] flex-col justify-start items-center gap-1 inline-flex">
                <div className="flex-col justify-start items-center flex">
                  <div className="w-full md:w-[140px] flex-col-2 justify-between items-center flex">
                    <img
                      className="h-[40px] w-[40px] -ml-12 mt-10"
                      src="../src/assets/Lolo_edu.jpg"
                      alt=""
                    />
                    <span className=" text-black text-lg  md:text-[28px] font-medium font-suwannaphum ml-3">
                      សាលាឌីជីថល
                    </span>
                    <div className="w-full md:w-[170px] h-5 text-neutral-400 text-sm md:text-base font-normal font-suwannaphum mt-16 -ml-36 mb-3">
                      @saladigital
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-10 px-2.5 pt-[15px] pb-2.5 bg-blue-600 rounded-[20px] shadow justify-between items-center inline-flex">
                  <button className="text-white text-base font-normal font-suwannaphum ml-10 items-center">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-full md:w-[750px] mt-5 h-auto md:h-[1085px] left-0 top-[158px] absolute rounded-[10px]"
            src="../src/assets/BooDetail.jpg"
          />
        </div>
        <div className="h-auto md:h-[509.45px] left-0 md:left-[793px] top-[298px] absolute bg-white rounded-[5px] flex-col justify-center items-center inline-flex">
          <div className="self-stretch h-auto md:h-[509.45px] px-2.5 pb-[58px] bg-white rounded-xl flex-col justify-start items-start gap-[30px] flex">
            <p className="w-full md:w-[423px] h-9 text-black text-xl font-normal font-suwannaphum">
              អត្ថបទដែលពាក់ព័ន្ធ
            </p>
            <div className="w-full md:w-[425px] h-20 relative">
              <img
                className="w-[50.64px] h-[72.45px] left-0 top-[7.55px] absolute rounded-md border border-gray-300 object-cover"
                src="../src/assets/AboutUs_STEM.jpeg"
              />
              <div className="w-[149px] h-[38px] left-[71px] top-[42px] absolute justify-start items-center gap-0.5 inline-flex">
                <div className="w-[45px] h-[38px] opacity-50 text-black text-sm font-light font-suwannaphum">
                  ថ្ងៃបង្ហោះ​
                </div>
                <date className="w-[102px] h-[38px] opacity-50 text-black text-sm font-light font-suwannaphum">
                  : 15 April 2024
                </date>
              </div>
              <div className="w-full md:w-[353.56px] h-[54.34px] left-[71.44px] top-0 absolute text-black text-lg font-normal font-suwannaphum">
                ការអប់រំវិទ្យាសាស្រ្ត បច្ចេកវិទ្យា វិស្វកម្ម និងគណិតវិទ្យា
              </div>
            </div>
            <div className="w-full md:w-[425px] h-20 relative">
              <img
                className="w-[50.64px] h-[72.45px] left-0 top-[7.55px] absolute rounded-md border border-gray-300 object-cover"
                src="../src/assets/AboutUs_STEM.jpeg"
              />
              <div className="w-[141px] h-[38px] left-[71px] top-[42px] absolute justify-start items-center gap-0.5 inline-flex">
                <div className="w-[45px] h-[38px] opacity-50 text-black text-sm font-light font-suwannaphum">
                  ថ្ងៃបង្ហោះ​
                </div>
                <date className="w-[94px] h-[38px] opacity-50 text-black text-sm font-light font-suwannaphum">
                  : 15 April 2024
                </date>
              </div>
              <div className="w-full md:w-[353.56px] h-[54.34px] left-[71.44px] top-0 absolute text-black text-lg font-normal font-suwannaphum">
                ការអប់រំវិទ្យាសាស្រ្ត បច្ចេកវិទ្យា វិស្វកម្ម និងគណិតវិទ្យា
              </div>
            </div>
            <div className="w-full md:w-[425px] h-[72.45px] relative">
              <img
                className="w-[50.64px] h-[72.45px] left-0 top-0 absolute rounded-md border border-gray-300 object-cover"
                src="../src/assets/AboutUs_STEM.jpeg"
              />
              <div className="w-[53px] h-[37px] left-[71px] top-[35px] absolute opacity-50 text-black text-sm font-light font-suwannaphum">
                ថ្ងៃបង្ហោះ​
              </div>
              <div className="w-[109px] h-[38px] left-[118px] top-[34.45px] absolute opacity-50 text-black text-sm font-light font-suwannaphum">
                : 15 April 2024
              </div>
              <div className="w-full md:w-[353.56px] left-[71.44px] top-[3.45px] absolute text-black text-lg font-normal font-suwannaphum">
                ការអប់រំវិទ្យាសាស្រ្ត បច្ចេកវិទ្យា វិស្វកម្ម និងគណិតវិទ្យា
              </div>
            </div>
            <div className="w-full md:w-[425px] h-[63px] relative">
              <img
                className="w-[50.64px] h-[57.06px] left-0 top-[5.94px] absolute rounded-md border border-gray-300 object-cover"
                src="../src/assets/AboutUs_STEM.jpeg"
              />
              <div className="w-[146px] h-[29px] left-[71px] top-[33.55px] absolute justify-start items-center gap-0.5 inline-flex">
                <div className="w-[47px] h-[29px] opacity-50 text-black text-sm font-light font-suwannaphum">
                  ថ្ងៃបង្ហោះ​
                </div>
                <date className="w-[97px] h-[29px] opacity-50 text-black text-sm font-light font-suwannaphum">
                  : 15 April 2024
                </date>
              </div>
              <div className="w-full md:w-[353.56px] h-[42.79px] left-[71.44px] top-0 absolute text-black text-lg font-normal font-suwannaphum">
                ការអប់រំវិទ្យាសាស្រ្ត បច្ចេកវិទ្យា វិស្វកម្ម និងគណិតវិទ្យា
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[433px] mt-5 h-auto md:h-[126px] px-[15px] py-2.5 left-0 md:left-[793px] top-[158px] absolute bg-white rounded-[5px] justify-start items-center gap-5 inline-flex">
          <div className="flex-col justify-start items-start gap-[5px] inline-flex">
            <span className="text-neutral-400 text-lg font-medium font-suwannaphum">
              ភាសា
            </span>
            <span className="text-neutral-400 text-lg font-medium font-suwannaphum">
              អ្នកនិពន្ធ{" "}
            </span>
            <span className="text-neutral-400 text-lg font-medium font-suwannaphum">
              បោះពម្ភផ្សាយ
            </span>
            <span className="text-neutral-400 text-lg font-medium font-suwannaphum">
              ឆ្នាំបោះពម្ភ
            </span>
          </div>
          <div className="flex-col justify-start items-start gap-[5px] inline-flex">
            <span className="text-black text-lg font-medium font-suwannaphum">
              ភាសាខ្មែរ
            </span>
            <span className="text-black text-lg font-medium font-suwannaphum">
              ក្រសួងអប់រំ​ យុវជន​ និងកីឡា
            </span>
            <span className="text-black text-lg font-medium font-suwannaphum">
              ក្រសួងអប់រំ​ យុវជន​ និងកីឡា
            </span>
            <span className="text-black text-lg font-medium font-suwannaphum">
              ២០២៤
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetail;
