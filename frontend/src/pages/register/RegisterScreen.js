import "./registerScreen.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const RegisterScreen = ({ history }) => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const registerHandler = async (e) => {
        e.preventDefault();
        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };
        if (password !== confirmpassword) {
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setError("");
        }, 5000);
            return setError("Mật khẩu không khớp");
        }

        try {
            const { data } = await axios.post("/api/auth/register", {
            username,
            email,
            password,
            },
            config
        );
        localStorage.setItem("authToken", JSON.stringify(data));
        navigate("/");
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

  return (
    <div className="register-screen">
      <h1 className="register-screen__title">Đăng ký</h1>
      <form onSubmit={registerHandler} className="register-screen__form">
        {error && <span className="error-message">{error}</span>}
        <fieldset>
          <p>
            <input type="text" required id="name" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </p>
          <p>
            <input type="email" required id="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          </p>
          <p>
            <input type="password" required id="password" autoComplete="true" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </p>
          <p>
            <input type="password" required id="confirmpassword" autoComplete="true" placeholder="Confirm password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </p>
          <p>
            <input type="submit" value='Đăng ký' />
          </p>
          <p>
          <span className="register-screen__subtext">
            Bạn đã có tài khoản rồi? <Link to="/login">Đăng nhập ngay</Link>
          </span>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterScreen;