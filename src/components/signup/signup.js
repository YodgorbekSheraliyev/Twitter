import  { useState } from 'react'
import logo from '../../assets/svg/signup-logo.svg'
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import './signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
    const [visiblePassword, setVisiblePassword] = useState(false);
  return (
    <form className='signup__form' method='POST' action='/'>
        <img src={logo} alt="Twitter logo" />
        <h3 className=''>Create an account</h3>
        <input type="text" name='name' className='form__name' placeholder='Name'/>
        <input type='email' name='email' placeholder='Email' className='form__email'/>
        <label className='password__label' >
            <input type={visiblePassword? 'text':'password'} name="password" className='form__password' placeholder='Password'/>
                    {visiblePassword? <FaEyeSlash onClick={() => setVisiblePassword(!visiblePassword)}/>:<FaEye onClick={() => setVisiblePassword(!visiblePassword)}/>}
        </label>
        <div className="btn__wrapper">
        <span><Link to='/login'>Already have an account?</Link></span>
        <button type="submit" className='btn submit__btn'>Submit</button>
        </div>
    </form>
  )
}

export default Signup