import "./forgotPassword.css";
import {Link} from "react-router-dom"


export default function Login() {

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <img src="./assets/bg.png" className="loginImg" alt=''/>
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
            <Link to="/" className="loginRegister" style={{textDecoration:"none",color:"white"}}>
              Inicia sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

