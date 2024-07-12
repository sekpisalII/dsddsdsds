import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './components/layout/Layout';
import App from './App';
import Blog from './page/blog/Blog';
import Book from './page/book/Book';
import Lesson from './page/lesson/Lesson';
import Notification from './page/notification/Notification';
import Error from './page/error-page/Error';
import Create from './page/create/Create';
import Forum from './page/forum/Forum';
import AboutUs from './page/about-us/AboutUs';
import Register from './page/auth/Register';
import Login from './page/auth/Login';
import Home from './page/home/Home';
import LessonDetailPage from './page/lessonDetailPage/LessonDetailPage';
import BookDetailPage from './page/bookDetailPage/BookDetailPage';
import Create_forum_detail from './page/create_forum_detail/Create_forum_detail';
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
      }
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
    path:'/lessonDetail',
    element: <LessonDetailPage />
  },
  {
    path:'/bookDetail',
    element: <BookDetailPage />
  },
  {
    path:'/create_forum',
    element: <Create_forum_detail />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
