import './loginScreen.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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

    }

  return (
    <div className='loginScreen'>
        <h1><strong>Welcome.</strong> Please login.</h1>
        <form action="#" method="get">
            <fieldset>
                <p>
                    <input type="email" required id="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} value={email} tabIndex={1} />
                </p>
                <p>
                    <input type="password" required id="password" autoComplete="true" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password} tabIndex={2} />
                </p>
                <p>
                    <a href="#">Forgot Password?</a>
                </p>
                <p>
                    <input type="submit" value="Login"/>
                </p>
            </fieldset>
        </form>
        <p>
            <span class="btn-round">or</span>
        </p>
        <p>
            <a class="facebook-before">
                <span class="fontawesome-facebook"></span>
            </a>
            <button class="facebook">Login Using Facbook</button>
        </p>
        <p>
            <a class="twitter-before">
                <span class="fontawesome-twitter"></span>
            </a>
            <button class="twitter">Login Using Twitter</button>
        </p>
    </div>
  )
}

export default LoginScreen