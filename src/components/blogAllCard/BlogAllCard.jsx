import React from "react";
const BlogAllCard = () => {
  return (
    <>
      <div className=" bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        {/* <div className="grid grid-cols-4 gap-7 rounded-t-lg"> */}
        <div className="radies shadow-xl bg-white lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal rounded-lg">
          <img
            src="src/assets/blog-card.webp"
            className="w-full rounded-t-lg"
            alt="Blog"
          />
          <div className="p-2 pt-2">
            <div className="mb-0">
              <p className="text-gray-700 text-[15px] -mt-1 pt-3 font-suwannaphum">
                របៀបបង្កើតថ្នាក់នៅក្នុងសាលា-(studio.stem)របៀបបង្កើតថ្នាក់នៅក្នុងសាលា
              </p>
            </div>
            <div className="flex items-center">
              <a href="#">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src="https://weteka.org/_next/image?url=https%3A%2F%2Fapi.weteka.org%2Fpublic%2Forgs%2F63fc7c5751508ff62e6ce857%2Fimages%2F287ea2c8-265d-4c3f-926b-8bb1c53701bd.png&w=64&q=75"
                  alt="Avatar of Jonathan Reinink"
                />
              </a>
              <a
                href="#"
                className="text-gray-600 font-semibold leading-none hover:text-indigo-600 font-suwannaphum text-[18px] -mt-4"
              >
                សាលាឌីជីថល
              </a>
              <p className="text-gray-600 font-suwannaphum mb-4 text-[15px] pt-7 -ml-[100px]">
                អ្នកតាមដាន: 664 នាក់
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default BlogAllCard;
