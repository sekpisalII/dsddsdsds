import React, { useEffect, useState } from "react";
import BlogAllCard from "../../components/blogAllCard/BlogAllCard";
import { fetchBlog } from "../../services/fetchBlog";
import FooterCard from "../../components/footer/FooterCard";
export const Blog = () => {
  const [blog, setBlog] = useState([{}]);
  const onBlogFetch = (pageNum, pageSize) => {
    fetchBlog(pageNum, pageSize).then((json) => {
      //handle ui
      console.log(json);
      //upadte State
      setBlog(json.results);
    });
  };
  useEffect(() => {
    onBlogFetch(1, 10);
  }, []);
  return (
    <>
    <div className="font-suwannaphum text-black text-3xl mt-5 w-full mx-auto ">
      <h3 className="ml-[40px]">ប្លុកទាំងអស់</h3>
      </div>
    <section
      id="Projects"
      className=" p-10  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-3"
    >
      {" "}
      {blog &&
        blog.map((blog, index) => (
          <section key={index}>
            <BlogAllCard blog={blog} />
          </section>
        ))}
    </section>
    <FooterCard />
   
    </>
  );
};

export default Blog;
