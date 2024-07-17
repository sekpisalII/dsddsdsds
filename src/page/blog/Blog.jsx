import React, { useEffect, useState } from "react";
import BlogAllCard from "../../components/blogAllCard/BlogAllCard";
import { fetchBlog } from "../../services/fetchBlog";
import FooterCard from "../../components/footer/FooterCard";
import ButtonMenu from "../../components/button_Menu/ButtonMenu";
import Spinner from "../../components/appSpinner/Spinner";

export const Blog = () => {
  const [blog, setBlog] = useState([{}]);
  const [isloading, setIsloading] = useState(true);
  const onBlogFetch = (pageNum, pageSize) => {
    fetchBlog(pageNum, pageSize).then((json) => {
      //handle ui
      console.log(json);
      //upadte State
      setBlog(json.results);
      setIsloading(false);
    });
  };
  useEffect(() => {
    onBlogFetch(1, 10);
  }, []);
  return (
    <>
      <ButtonMenu />
      {isloading ? (
        <Spinner />
      ) : (
        <section
          id="Projects"
          className=" p-10  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5"
        >
          {" "}
          {blog &&
            blog.map((blog, index) => (
              <section key={index}>
                <BlogAllCard blog={blog} />
              </section>
            ))}
        </section>
      )}

      <FooterCard />
    </>
  );
};

export default Blog;
