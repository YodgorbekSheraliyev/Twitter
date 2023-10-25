import React, { useState } from 'react'
import logo from '../../assets/svg/signup-logo.svg'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import './signup.css'

const Signup = () => {
    const [inputTypeEmail, setInputTypeEmail] = useState(false);
    const [visiblePassword, setVisiblePassword] = useState(false);
  return (
    <form className='signup__form'>
        <img src={logo} alt="Twitter logo" />
        <h3 className=''>Create an account</h3>
        <input type="text" name='name' className='form__name' placeholder='Name'/>
        <input type={inputTypeEmail ? 'email': 'tel'} name={inputTypeEmail ? 'email': 'tel'} placeholder={inputTypeEmail ? 'Email': 'Phone number'} className='form__email'/>
        <label className='password__label' >
            <input type={visiblePassword? 'text':'password'} name="password" className='form__password' placeholder='Password'/>
                    {visiblePassword? <FaEyeSlash onClick={() => setVisiblePassword(!visiblePassword)}/>:<FaEye onClick={() => setVisiblePassword(!visiblePassword)}/>}
        </label>
        <div className="btn__wrapper">
        <span onClick={() => setInputTypeEmail(!inputTypeEmail)}>{inputTypeEmail ? 'Use phone number': 'Use email'}</span>
        <button type="submit" className='btn submit__btn'>Submit</button>
        </div>
    </form>
  )
}

export default Signup