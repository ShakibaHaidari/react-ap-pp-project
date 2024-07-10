
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import { useState } from "react";
import { isLogin } from "../../utils";
function MyNavbar() {

  const [loginStatus , setLoginStatus] = useState(isLogin() ? "خروج":"ورود")
  const expand = 'md';
  const logoutHand = () => {
     document.cookie =
      "username=admin; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/";
    setLoginStatus('ورود')
  }
  return (
    <Navbar
      style={{ backgroundColor: "rgba(102, 203, 255, 0.34)" }}
      expand={expand}
      className=" mb-3"
    >
      <Container>
        <Navbar.Brand
          style={{ fontFamily: "Lalezar", fontSize: "25px" }}
          href="#"
        >
          دندان پزشکی دنیال
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              نمایه ها
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink to="/" className="nav-link">
                صفحه اصلی
              </NavLink>
              <NavLink to="/about" className="nav-link">
                درباره ما
              </NavLink>
              <NavLink to="/blog" className="nav-link">
                مقالات
              </NavLink>
              <NavLink to="/pannel" className="nav-link">
                پنل
              </NavLink>
              {isLogin ? (
                <NavLink to="/login" onClick={logoutHand} className="nav-link">
                  {loginStatus}
                </NavLink>
              ) : (
                <NavLink to="/login" className="nav-link">
                  {loginStatus}
                </NavLink>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
