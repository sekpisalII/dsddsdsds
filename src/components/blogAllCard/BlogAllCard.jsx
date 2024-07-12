import React from "react";
import "./blogStyle.css";
const BlogAllCard = ({ blog }) => {
  return (
    <>
      <div className=" bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        {/* <div className="grid grid-cols-4 gap-7 rounded-t-lg"> */}
        <div className="radies shadow-xl bg-white lg:rounded-b-none lg:rounded-r flex flex-col  justify-between leading-normal rounded-lg">
          <img
            src={
              blog.image ||
              "https://cdna.artstation.com/p/assets/images/images/034/807/864/large/gil-lagziel-oggy-artstation1.jpg?1613299994"
            }
            className="w-full h-[200px] object-cover "
            alt="Blog"
          />
          <div className="p-2 pt-2">
            <div className="mb-0">
              <p className="text-gray-700 text-[20px] blog-card-title line-clamp-1 -mt-1 pt-3 font-suwannaphum ">
                {blog.title}
              </p>
            </div>
            <div className="flex items-center">
              <a href="#">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={
                    blog?.image
                      ? blog?.image
                      : "https://cdna.artstation.com/p/assets/images/images/034/807/864/large/gil-lagziel-oggy-artstation1.jpg?1613299994"
                  }
                  alt="Avatar of Jonathan Reinink"
                />
              </a>
              <a
                href="#"
                className="text-gray-600 font-s emibold leading-none hover:text-indigo-600 font-suwannaphum text-[18px] -mt-4"
              >
                សាលាឌីជីថលCSTAD
              </a>
              <p className="text-gray-600 font-suwannaphum mb-4 text-[15px] pt-7 -ml-[150px]">
                អ្នកតាមដាន:0នាក់
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
