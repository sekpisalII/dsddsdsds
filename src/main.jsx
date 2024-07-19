import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom'; // Corrected import for ReactDOM
import './index.css';
import Layout from './components/layout/Layout';
import App from './App';
import Blog from './page/blog/Blog';
import Book from './page/book/Book';
import Lesson from './page/lesson/Lesson';
import Notification from './page/notification/Notification';
import Error from './page/error-page/Error';
import Forum from './page/forum/Forum';
import AboutUs from './page/about-us/AboutUs';
import Register from './page/auth/Register';
import Login from './page/auth/Login';
import Home from './page/home/Home';
import LessonDetailPage from './page/lessonDetailPage/LessonDetailPage';
import BookDetailPage from './page/bookDetailPage/BookDetailPage';
import Create_forum_detail from './page/create_forum_detail/Create_forum_detail';
import BlogDetailPage from './page/blogDetailPage/BlogDetailPage';
import CreateCommentPage from './page/createCommentPage/CreateCommentPage';
import Create from './page/create/Create';
import DashboardPage from './page/dashBoardPage/DashboardPage';
import ArticlePage from './page/articlePage/ArticlePage';
import SettingPage from './page/settingPage/SettingPage';
import LogoutPage from './page/logoutPage/LogoutPage';
import DashboardPageDetail from './page/dashboardPageDetail/DashboardPageDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/book',
        element: <Book />
      },
      {
        path: '/lesson',
        element: <Lesson />
      },
      {
        path: '/forum',
        element: <Forum />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: '/create',
        element: <Create />
      },
      {
        path: '/notification',
        element: <Notification />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/lessonDetail',
    element: <LessonDetailPage />
  },
  {
    path: '/bookDetail',
    element: <BookDetailPage />
  },
  {
    path: '/create_forum',
    element: <Create_forum_detail />
  },
  {
    path: '/blogDetail',
    element: <BlogDetailPage />
  },
  {
    path: '/createComment',
    element: <CreateCommentPage />
  },
  {
    path: '/bookDetail/:id',
    element: <BookDetailPage />
  },
  {
    path: '/lessonDetail/:id',
    element: <LessonDetailPage />
  },
  {
    path: '/blogDetail/:id',
    element: <BlogDetailPage />
  },
  {
    path: '/bookAllCard',
    element: <Book />
  },
  {
    path: '/lessonAllCard',
    element: <Lesson />
  },
  {
    path: '/forumContent',
    element: <Forum />
  },
  {
    path: '/blogAllCard',
    element: <Blog />
  },
  {
    path: '/dashboard',
    element: <DashboardPage />
  },
  {
    path: '/dashboardDetail',
    element: <DashboardPageDetail />
  },
  {
    path: '/article',
    element: <ArticlePage />
  },
  {
    path: '/setting',
    element: <SettingPage />
  },
  {
    path: '/logout',
    element: <LogoutPage />
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
