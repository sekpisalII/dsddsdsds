import React from "react";
import { Link } from "react-router-dom";
const BlogAllCard = ({ blog }) => {
  return (
    <Link to={`/blogDetail/${blog.id}`} className="block mb-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg">
        <div className="radies shadow-xl bg-white lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal rounded-lg w-full">
          <img
            src={
              blog.image ||
              "https://cdna.artstation.com/p/assets/images/images/034/807/864/large/gil-lagziel-oggy-artstation1.jpg?1613299994"
            }
            className="w-full h-[250px] object-cover rounded-lg"
            alt="Blog"
          />
          <div className="p-2 pt-2">
            <div className="mb-0">
              <p className="text-gray-700 text-[20px] blog-card-title line-clamp-1 -mt-1 pt-3 font-suwannaphum">
                {blog.title}
              </p>
            </div>
            <div className="flex items-center">
              <a href="#">
                <img
                  className="w-10 h-10 rounded-full mr-4 object-cover"
                  src={
                    blog?.image ||
                    "https://cdna.artstation.com/p/assets/images/images/034/807/864/large/gil-lagziel-oggy-artstation1.jpg?1613299994"
                  }
                  alt="Avatar of Jonathan Reinink"
                />
              </a>
              <a
                href="#"
                className="text-gray-600 font-semibold leading-none hover:text-indigo-600 font-suwannaphum text-[16px] -mt-4"
              >
                សាលាឌីជីថលCSTAD
              </a>
              <p className="text-gray-600 font-suwannaphum mb-4 text-[12px] pt-7 -ml-[138px]">
                អ្នកតាមដាន: 0 នាក់
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogAllCard;
