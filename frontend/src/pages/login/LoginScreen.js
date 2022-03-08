import './loginScreen.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {

    // const nagative = useNavigate();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [error, setError] = useState("");

    // useEffect(() => {
    //     if (localStorage.getItem("authToken")) {
    //       nagative("/");
    //     }
    //   }, [nagative]);

    // const loginHandler = async(e) =>{

    // }

  return (
    <div className='loginScreen'>
        <h1><strong>Welcome.</strong> Please login.</h1>
        <form action="#" method="get">
            <fieldset>
                <p>
                    <input type="text" required value="Username" placeholder="Username"/>
                </p>
                <p>
                    <input type="password" required value="Password" placeholder="Password"/>
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