import React, { useEffect, useState } from "react";
import { fetchBlogById } from "../../services/fetchBlogById";
import { useParams } from "react-router-dom";
const BlogDetail = () => {
  const { id } = useParams();
  const bookId = decodeURIComponent(id);
  const [blog, setblog] = useState(null);

  useEffect(() => {
    const fetchlessonData = async () => {
      try {
        const bookData = await fetchBlogById(encodeURIComponent(bookId));
        setblog(bookData);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchlessonData();
  }, []);
  if (!blog) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <section className="mt-8  mx-auto flex flex-col md:flex-row  font-suwannaphum">
      <div className="w-full mx-auto md:w-[60%]  grid grid-rows-[auto]">
        <div className="w-full pl-16 h-auto bg-[#F5F5F5] p-8 flex">
          <img
            className=" rounded-full w-[60px]  md:w-[90px] h-[60px] md:h-[90px]"
            src={
              blog.profileUser ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNK2libct1ti7CliA65qLEOpjZutZy6penfA&s"
            }
            alt=""
          />
         <span className="ml-5 md:ml-16  font-md font-suwannaphum mt-4">
          {blog.author}
          <div className="bg-[#16A1DF] text-white rounded-md text-center font-normal font-suwannaphum mt-2">
            <button className="text-[16px] p-2 flex justify-center items-center w-full h-full">តាមដាន</button>
          </div>
        </span>

        </div>
        <div className="mt-8 p-4  h-auto bg-[#F5F5F5]">
          <h3>{blog.title}</h3>
          <img className="mt-4 mb-4" src={blog.image} />
          <span className="text-black text-base font-light font-suwannaphum">
            {blog.content}
          </span>
        </div>
      </div>

    </section>
    </>
  );
};
export default BlogDetail;
