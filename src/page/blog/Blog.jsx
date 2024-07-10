import React from "react";
import BlogAllCard from "../../components/blogAllCard/BlogAllCard";

const Blog = () => {
  return (
    <section
      id="Projects"
      className="max-w-screen-2xl w-full p-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-7 mt-10 mb-5"
    >
      {" "}
      <BlogAllCard />
      <BlogAllCard />
      <BlogAllCard />
      <BlogAllCard />
      <BlogAllCard />
    </section>
  );
};

export default Blog;
