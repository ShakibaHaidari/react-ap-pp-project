
import { useState } from "react";
import MyNavbar from "../../components/navbar/Navbar";
import './Login.css'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function Login() {

  const[username,setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  
  const submitBtn = () => {
    if (username === 'admin' && password === '12345') {
      navigate("/pannel")
      document.cookie ="username=admin; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
    } else {
      Swal.fire({
        icon: "error",
        title: "خطا!",
        text: "با موفقیت انجام نشد!",
      });
    }
  }
  return (
    <>
      <MyNavbar></MyNavbar>
       <div className="wrapper">
    <form className="form-signin">       
      <h2 className="form-signin-heading">برای گرفتن وقت وارد شوید</h2>
      <input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
      <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" name="password" placeholder="Password" required=""/>      
      
      <button type='button' onClick={submitBtn} className="btn btn-lg btn-primary btn-block" >ورود</button>   
    </form>
  </div>
     </>
   )
 
}
export default Login;
