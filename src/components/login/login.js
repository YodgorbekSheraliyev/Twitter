import {useState} from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from '../../assets/svg/signup-logo.svg'

const Login = () => {
    const [visiblePassword, setVisiblePassword] = useState(false);
  return (
    <form method="POST" action="/" className="signup__form">
        <img src={logo} alt="Twitter logo" />
      <h3 className="login__title">Sign in</h3>
      <input type='email' name='email' placeholder='Email' className='form__email'/>
        <label className='password__label' >
            <input type={visiblePassword? 'text':'password'} name="password" className='form__password' placeholder='Password'/>
                    {visiblePassword? <FaEyeSlash onClick={() => setVisiblePassword(!visiblePassword)}/>:<FaEye onClick={() => setVisiblePassword(!visiblePassword)}/>}
        </label>
        <div className="btn__wrapper">
        <span><NavLink to='/signup'>Click here to register</NavLink></span>
        <button type="submit" className='btn submit__btn'>Submit</button>
        </div>
    </form>
  );
};

export default Login;
