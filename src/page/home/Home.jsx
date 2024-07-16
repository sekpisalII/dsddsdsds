import Background from "../../components/background/Background";
import BookCard from "../../components/bookCard/BookCard";
import FooterCard from "../../components/footer/FooterCard";
import LessonCard from "../../components/lessonCard/LessonCard";
import BlogCard from "../../components/blogCard/BlogCard";
import ForumCard from "../../components/forumCard/ForumCard";
const Home = () => {
  return (
    <div>
      <Background />
      <section className="mt-[10px] m-3">
        <BookCard />
      </section>
      <section className="mt-[10px]">
        {" "}
        <LessonCard />
      </section>
      <section className="mt-[10px]">
        <ForumCard />
      </section>
      <section className="mt-[10px] ">
        <BlogCard />
      </section>

      <FooterCard />
    </div>
  );
};

export default Home;
