import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth';
import "./Login.css"



export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();
    const navigate = useNavigate();
    
    const isIncompleteData = !email || !password; 

    const onSubmit = async (event) => {
        event.preventDefault();
        if (isIncompleteData) {
          alert("Acceso inválido, todos los campos son obligatorios");
          return;
        }
    
        try {
          await auth.login(email, password);
          navigate('dashboard', { replace: true })
    
        } catch (err) {
          alert("Acceso inválido, correo electrónico y/o contraseña incorrecta");
          return;
        }
      };
    
  return (
  <div className='logincard-container'>
  <div className='logincard'>
      <h4 className='login-title'>Login</h4>
      <form onSubmit={onSubmit}>
          <div className='input-container'>
          <label>Email</label>
          <input type="email" name="email" onChange={e => setEmail({ email: e.target.value })}/>
          </div>
          <div className='input-container'>
          <label>Contraseña</label>
          <input type="password" name="password" onChange={e => setPassword({ password: e.target.value })}/>
          </div>
          <div className='button-container'>
              <button>Login</button>
          </div>
      </form>
  </div>
</div>        
  )
}
