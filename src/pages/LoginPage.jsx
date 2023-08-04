import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
 
const api_url = "http://localhost:5005";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const { userAuthentication } = useContext(AuthContext)   // TODO: when token available
    
    const navigate = useNavigate();
   
    
    const handleLoginSubmit = async (event) => {
        event.preventDefault()


        try {
            const { data } = await axios.post("http://localhost:5005/auth/login", {email,password});

            localStorage.setItem("authToken", data.token); // TODO: check for keyname (backend)
        
            // await userAuthentication();
            navigate("/");           // TODO: add route 
                
        } catch (error) {
            setErrorMessage(error.response.data.errorMessage);
        }

    };


  return (
     <div>
      <h1>Login</h1>
 
      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}
        />
 
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => {setPassword(event.target.value)}}
        />
 
        <button type="submit">Login</button>
      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }
 
      <p>Not yet a member?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  )
}

export default LoginPage