import React from "react";
import Background from "../../components/background/Background";
import BookCard from "../../components/bookCard/BookCard";
import FooterCard from "../../components/footer/FooterCard";
import LessonCard from "../../components/lessonCard/LessonCard";
import BlogCard from "../../components/blogCard/BlogCard";
import BookDetail from "../../components/bookDetail/BookDetail";
const Home = () => {
  return (
    <div>
      <Background />
      <section className="mt-[100px] m-3">
        <BookCard />
      </section>
      <section className="mt-[100px]">
        {" "}
        <LessonCard />
      </section>

      <section className="mt-[100px] ">
        <BlogCard />
      </section>
      <FooterCard />
    </div>
  );
};

export default Home;
