import React, { useEffect, useState } from "react";
import { fetchLessonById } from "../../services/fetchLessonById";
import { useParams } from "react-router-dom";
const LessonDetail = () => {
  const { id } = useParams();
  const bookId = decodeURIComponent(id);
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    const fetchlessonData = async () => {
      try {
        const bookData = await fetchLessonById(encodeURIComponent(bookId));
        setLesson(bookData);
      } catch (error) {
        console.error("Error fetching lesson data:", error);
      }
    };
    fetchlessonData();
  }, []);

  if (!lesson) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {" "}
      <section className="w-[80%] h-auto mx-auto mt-8 grid grid-cols-1 lg:grid-cols-[69%_29%] gap-[2%] font-suwannaphum">
        <div className="w-full p-2 bg-[#F5F5F5]">
          <h3 className="text-[24px] font-semibold">{lesson.lesson_title}</h3>
          {/* <img
            src="https://www.teachhub.com/wp-content/uploads/2020/08/Aug-15-Planning-for-a-Great-Back-to-School-STEM-Lesson_web.jpg"
            alt=""
          /> */}
          <div className="mt-8 w-[100%] object-cover shadow-sm">
            {lesson.sections.flatMap((section) =>
              section.contents.map((content) => (
                <div key={content.id}>
                  {content.lesson_title}
                  {content.video_url && (
                    <video width="700" height="500" controls>
                      <source src={content.video_url} type="video/mp4" />
                    </video>
                  )}
                </div>
              ))
            )}
          </div>
          <h3 className="p-8 text-center">ត្រីកោណប៉ុនគ្នា</h3>
        </div>
        <div className="w-full bg-[#F5F5F5] p-5 md:p-8">
          {lesson.sections.map((sections) => (
            <ul key={sections.id} className="leading-5">
              {" "}
              <li className="text-[24px] font-medium">
                {sections.title || "No Title"}
              </li>
            </ul>
          ))}

          <ul className="leading-8 pt-5">
            <li>ចំនួនកុំផ្លិច</li>
            <li>ភាពជាប់នៃអនុគមន៍</li>
            <li>អនុវត្តន៍ដេរីវេ</li>
            <li>ព្រីមីទីវនិងអាំងតេក្រាលមិនកំណត់</li>
            <li>អាំងតេក្រាលកំណត់</li>
            <li>អនុគមន៍អុិចស្ប៉ូណង់ស្យែល</li>
            <li>អនុគមន៍លោការីត</li>
            <li>អាំងតេក្រាលមិនកំណត់</li>
            <li>សមីការឌីផេរ៉ង់ស្យែល</li>
          </ul>
        </div>
      </section>
      <section className="mt-8 w-[80%] mx-auto h-auto bg-[#F5F5F5] p-4 font-suwannaphum">
        <ul>
          <li>អំពីមេរៀន</li>
          <li className="p-5">
            គណិតវិទ្យាថ្នាក់ទី១២ បង្រៀនដោយលោកគ្រូ ថុល ចាន់ថន ។
            នៅក្នុងវីដេអូមានលក្ខណៈកែលំហាត់ ហ្វឹកហាត់ ។
            សិស្សអាចធ្វើការស្វ័យសិក្សាតាមរយៈវីដេអូ ។របៀបរៀនតាមវីដេអូ៖ មើលវីដេអូ
            ហ្វឹកហាត់លំហាត់តាមរយៈឧទាហរណ៍ដែលបានដោះស្រាយ ។
          </li>
        </ul>
      </section>
    </>

    // <div classNameName="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    //   <div classNameName="relative">
    //     <div classNameName="pt-8 pb-[101px] flex flex-col lg:flex-row gap-7">
    //       <div classNameName="flex-1 bg-white flex flex-col justify-start items-start gap-[30px]">
    //         <div classNameName="self-stretch text-black text-2xl font-bold font-suwannaphum">
    //           {lesson.lesson_title}
    //         </div>
    //         <div classNameName="relative">
    //           <div classNameName="absolute inset-0 pt-[650px] pb-[33.92px] bg-white shadow flex justify-center items-center">
    //             <div classNameName="text-black text-2xl font-normal font-suwannaphum">
    //               ត្រីកោណប៉ុនគ្នា
    //             </div>
    //           </div>
    // <div classNameName="relative">
    //   {lesson.sections.flatMap((section) =>
    //     section.contents.map((content) => (
    //       <div key={content.id}>
    //         {content.lesson_title}
    //         {content.video_url && (
    //           <video width="700" height="500" controls>
    //             <source src={content.video_url} type="video/mp4" />
    //           </video>
    //         )}
    //       </div>
    //     ))
    //   )}
    // </div>
    //           {/* <img
    //               classNameName="w-full h-auto object-cover"
    //               src={lesson.lesson_image}
    //               alt="Lesson Detail"
    //             /> */}
    //         </div>
    //       </div>
    //       <div classNameName="w-full sm:mt-[800px] md:mt-[260px] -mt-[100px] lg:w-[270px] h-auto lg:h-[485px] bg-white shadow flex flex-col justify-start items-start p-4 lg:p-0">
    //         {lesson.sections.map((section) => (
    //           <div
    //             key={section.id}
    //             classNameName="text-black text-2xl font-normal font-suwannaphum"
    //           >
    //             {section.title && "No Title"}
    //           </div>
    //         ))}

    //         <div classNameName="text-black text-base font-light font-suwannaphum">
    //           909 ទស្សនា - 13-Jun-2024
    //         </div>
    //         <div classNameName="text-black text-lg font-normal font-suwannaphum">
    //           ចំនួនកុំផ្លិច(5)
    //         </div>
    //         <div classNameName="text-black text-lg font-normal font-suwannaphum">
    //           ភាពជាប់នៃអនុគមន៍
    //         </div>
    //         <div classNameName="text-black text-lg font-normal font-suwannaphum">
    //           អនុវត្តន៍ដេរីវេ
    //         </div>
    //         <div classNameName="w-[216px] h-[34px] text-black text-lg font-normal font-suwannaphum">
    //           ព្រីមីទីវនិងអាំងតេក្រាល
    //           <br />
    //         </div>
    //         <div classNameName="text-black text-lg font-normal font-suwannaphum">
    //           អាំងតេក្រាលកំណត់
    //         </div>
    //         <div classNameName="text-black text-lg font-normal font-suwannaphum">
    //           អនុគមន៍អុិចស្ប៉ូណង់ស្យែល
    //         </div>
    //         <div classNameName="text-black text-lg font-normal font-suwannaphum">
    //           អនុគមន៍លោការីត
    //         </div>
    //         <div classNameName="text-black text-lg font-normal font-suwannaphum">
    //           អាំងតេក្រាលមិនកំណត់
    //         </div>
    //         <div classNameName="text-black text-lg font-normal font-suwannaphum">
    //           សមីការឌីផេរ៉ង់ស្យែល
    //         </div>
    //       </div>
    //     </div>
    //     <div classNameName="bg-white shadow flex flex-col justify-end items-start  gap-[9px] p-4 mt-8">
    //       <div classNameName="self-stretch h-[35px] px-5 py-[3px] bg-white rounded-[20px] flex justify-center items-center">
    //         <div classNameName="text-black  font-md text-[30px] font-suwannaphum ">
    //           អំពីមេរៀន
    //         </div>
    //       </div>
    //       <div classNameName="text-black  text-[20px] font-light font-suwannaphum">
    //         គណិតវិទ្យាថ្នាក់ទី១២ បង្រៀនដោយលោកគ្រូ ថុល ចាន់ថន ។
    //         នៅក្នុងវីដេអូមានលក្ខណៈកែលំហាត់ ហ្វឹកហាត់ ។
    //         សិស្សអាចធ្វើការស្វ័យសិក្សាតាមរយៈវីដេអូ ។ របៀបរៀនតាមវីដេអូ៖ មើលវីដេអូ
    //         ហ្វឹកហាត់លំហាត់តាមរយៈឧទាហរណ៍ដែលបានដោះស្រាយ ។
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LessonDetail;
