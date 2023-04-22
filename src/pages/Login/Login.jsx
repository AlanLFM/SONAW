import "./login.css";
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import { IP } from "../../IP";


export default function Login() {
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);
  const [username,setUser]=useState("");
  const [password, setPassword]=useState("")

  const handleLogin=async ()=>{
    try {
      const response = await axios.post(`http://${IP}:9000/api/auth/login`, {
        username,
        password,
      });
      const token=response.data.token;
      const user=response.data.user;
      console.log(user);
      setUser(user);
      
      localStorage.setItem('token',JSON.stringify(token))
      if(token){
        try {
          
        } catch (error) {
          
        }
      }
      
    } catch (err) {
      console.log(err);
    }
  }

                //PWA
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }



  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <img src="./assets/bg.png" className="loginImg" />
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="loginBienvenida">Bienvenido a SONA</p>
            <p className="loginTexto">Nombre de Usuario</p>   
            <input placeholder="Usuario" className="loginInput"  />
            <p className="loginTexto">Contraseña</p>
            <input type="password" placeholder="Contraseña" className="loginInput" />
            <p className="loginForgot">Olvidaste tu contraseña?</p>
            <button className="loginButton">Iniciar sesión</button>
            <Link to="/register" className="loginRegister" style={{textDecoration:"none",color:"white"}}>
              Crea una cuenta  
            </Link>

            {isReadyForInstall && <button onClick={downloadApp} className="loginButton">Descarga nuestra app!</button>}
          </div>
        </div>
      </div>
    </div>
  );
}

