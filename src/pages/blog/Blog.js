import { Link, Outlet} from "react-router-dom";
import MyNavbar from "../../components/navbar/Navbar";
import './Blog.css'

function Blog() {
  return (
    <div className="articleWrapper">
      <MyNavbar></MyNavbar>
      <h1>بخش مقالات</h1>
      <hr />
      <div className="BtnContainer">
        <Link to='ارتودنسی' className="linkBtn">ارتودنسی</Link>
        <Link to='پروتیز' className="linkBtn">پروتیز</Link>
        <Link to='زیبایی' className="linkBtn">زیبایی</Link>
        <hr />
      </div>
       <Outlet></Outlet>
    </div>
  );
}
export default Blog;
