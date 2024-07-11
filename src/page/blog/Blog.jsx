import React, { useEffect, useState } from "react";
import BlogAllCard from "../../components/blogAllCard/BlogAllCard";
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
    <div>
      
      <BlogAllCard />
      <FooterCard />
    </div>
  );
};

export default Blog;
