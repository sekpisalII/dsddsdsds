import React from 'react'
import Background from '../../components/background/Background';
import BookCard from '../../components/bookCard/BookCard';
import FooterCard from '../../components/footer/FooterCard';
import LessonCard from '../../components/lessonCard/LessonCard';
import BlogCard from '../../components/blogCard/BlogCard';
const Home = () => {
  return (
    <div>
        <Background />
        <BookCard />
        <LessonCard />
        <BlogCard />
        <FooterCard />
      
    </div>
  )
}

export default Home;
