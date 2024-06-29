import PrivateRoute from "./PrivateRoute";
import Sitting from "./Sitting";
import CourseItem from "./pages/Courseitem";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Pannel from "./pages/pannel/Pannel";

const routes = [
  { path: "/", element: <Home></Home> },
  { path: "/about", element: <About></About> },
  {
    path: "/blog",
    element: <Blog></Blog>,
    children: [
      { path: "ارتودنسی", element: <h2>رتودنسی</h2> },
      { path: "پروتیز ", element: <h2>پروتیز</h2> },
      { path: "زیبایی", element: <h2>زیبایی</h2> },
    ],
  },
  {
    path: "pannel",
    element: (
      <PrivateRoute>
        <Pannel />
      </PrivateRoute>
    ),
  },
  { path: "login", element: <Login></Login> },
  { path: "courseitem/:courseId", element: <CourseItem></CourseItem> },
  {
    path: "sitting",
    element: (
      <PrivateRoute>
        <Sitting />
      </PrivateRoute>
    ),
  },
];
export default routes;