import './loginScreen.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {

    const nagative = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
          nagative("/");
        }
      }, [nagative]);

    const loginHandler = async(e) =>{
        e.preventDefault();

        const config = {
        header: {
            "Content-Type": "application/json",
        },};

        try {
            const { data } = await axios.post("/api/auth/login", { email, password }, config);
            
            localStorage.setItem("authToken", JSON.stringify(data));
            nagative("/");
        } catch (error) {
            alert('Mật khẩu không đúng')
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }

  return (
    <div className='loginScreen'>
        <h1><strong>Chào mừng! </strong>Vui lòng đăng nhập</h1>
        <form onSubmit={loginHandler}>
            {error && <span className="error-message">{error}</span>}
            <fieldset>
                <p>
                    <input type="email" required id="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} value={email} tabIndex={1} />
                </p>
                <p>
                    <input type="password" required id="password" autoComplete="true" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password} tabIndex={2} />
                </p>
                <p>
                    <a href="/">Quên mật khẩu?</a>
                    <a href="/register">Bạn chưa có tài khoản? Đăng ký ngay</a>
                </p>
                <p>
                    <input type="submit" value="Đăng nhập"/>
                </p>
            </fieldset>
        </form>
        <p>
            <span className="btn-round">Hoặc</span>
        </p>
        <p>
            <a href='#!' className="facebook-before">
                <span className="fontawesome-facebook"></span>
            </a>
            <button className="facebook">Đăng nhập bằng Facebook</button>
        </p>
    </div>
  )
}

export default LoginScreen