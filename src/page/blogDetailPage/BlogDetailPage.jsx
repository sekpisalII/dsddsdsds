import React from 'react'
import BlogDetail from '../../components/blogDetail/BlogDetail';
import FooterCard from '../../components/footer/FooterCard';
import ButtonMenuBlog from '../../components/buttonMenuBlog/ButtonMenuBlog';
const BlogDetailPage = () => {
  return (
    <div>
      <ButtonMenuBlog />
        <BlogDetail />
        <FooterCard />
    </div>
  )
}
export default BlogDetailPage;