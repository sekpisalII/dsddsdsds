import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/layout/Layout";
// import Blog from "./page/blog/Blog";
// import Book from "./page/book/Book";
// import Lesson from "./page/lesson/Lesson";
import Error from "./page/error-page/Error";
import Create from "./page/create/Create";
// import Forum from "./page/forum/Forum";
// import AboutUs from "./page/about-us/AboutUs";
import Register from "./page/auth/Register";
import Login from "./page/auth/Login";
import Home from "./page/home/Home";
import LessonDetailPage from "./page/lessonDetailPage/LessonDetailPage";
import BookDetailPage from "./page/bookDetailPage/BookDetailPage";
import Create_forum_detail from "./page/create_forum_detail/Create_forum_detail";
import BlogDetailPage from "./page/blogDetailPage/BlogDetailPage";
import CreateCommentPage from "./page/createCommentPage/CreateCommentPage";
import Lesson from "./page/lesson/Lesson";
import Book from "./page/book/Book";
import Forum from "./page/forum/Forum";
import Blog from "./page/blog/Blog";
import AboutUs from "./page/about-us/AboutUs";
import PageVerify from "./page/optpage/PageVerify";
import DashboardPage from "./page/dashBoardPage/DashboardPage";
import ArticlePage from "./page/articlePage/ArticlePage";
import SettingPage from "./page/settingPage/SettingPage";
import LogoutPage from "./page/logoutPage/LogoutPage";
import DashboardPageDetail from "./page/dashboardPageDetail/DashboardPageDetail";

import ForumContent from "./components/forumContent/ForumContent";
import PostArticlePage from "./page/postArticlePage/PostArticlePage";
import GetForumPage from "./page/getForumPage/GetForumPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book",
        element: <Book />,
      },
      {
        path: "/lesson",
        element: <Lesson />,
      },
      {
        path: "/forum",
        element: <Forum />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/createComment/:id",
        element: <CreateCommentPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/lessonDetail",
    element: <LessonDetailPage />,
  },
  {
    path: "/bookDetail",
    element: <BookDetailPage />,
  },
  {
    path: "/create_forum",
    element: <Create_forum_detail />,
  },
  {
    path: "/blogAllCard",
    element: <Blog />,
  },
  {
    path: "/bookAllCard",
    element: <Book />,
  },
  {
    path: "/lessonAllCard",
    element: <Lesson />,
  },
  {
    path: "/forumContent",
    element: <ForumContent />,
  },
  {
    path: "/blogDetail",
    element: <BlogDetailPage />,
  },
  {
    path: "/bookDetail/:id",
    element: <BookDetailPage />,
  },
  {
    path: "/lessonDetail/:id",
    element: <LessonDetailPage />,
  },
  {
    path: "/blogDetail/:id",
    element: <BlogDetailPage />,
  },
  // {
  //   path: "/reply/:id",
  //   element: <ReplyCard />,
  // },
  {
    path: "/otp",
    element: <PageVerify />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/dashboardDetail",
    element: <DashboardPageDetail />,
  },
  {
    path: "/article",
    element: <ArticlePage />,
  },
  {
    path: "/getForum",
    element: <GetForumPage />
  },
  {
    path: "/setting",
    element: <SettingPage />,
  },
  {
    path: "/logout",
    element: <LogoutPage />,
  },
  {
    path: "/postArticle",
    element: <PostArticlePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
