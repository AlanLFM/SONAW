import "./register.css";
import {Link} from "react-router-dom"

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
            <img src="./assets/bg.png" className="registerImg" alt='' />
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <p className="registerBienvenida">Crear una cuenta</p>
            <p className="registerTexto">Nombre de Usuario</p>   
            <input placeholder="Usuario" className="loginInput" />
            <p className="registerTexto">Email</p>  
            <input placeholder="Email" type="email" className="loginInput" />
            <p className="registerTexto">Contraseña</p>
            <input  placeholder="Contraseña" type="password" className="loginInput" />
            <p className="registerTexto">Confirmar Contraseña</p>  
            <input placeholder="Confirmar Contraseña" type="password" className="loginInput" />
            <p className="registerLogin"> </p>
            <button className="registerButton">Registrarse</button>
            <Link to="/" className="loginRegister" style={{textDecoration:"none",color:"white"}}>
              Inicia sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

