import React from 'react'

const LoginSignup = () => {
  return (
    <div className='loginsignup w-full min-h-screen bg-pink-200 pt-10'>
    <div className='loginsignup-container w-96 h-96 bg-white mx-auto my-auto py-12 px-16'>
      <h1 className='mx-0 my-6'>Sign Up</h1>
      <div className='loginsignup-fields'>
        <input type='text' placeholder='Your Name'/>
        <input type='email' placeholder='Email Address'/>
        <input type='password' placeholder='Password'/>
      </div>
      <button>Continue</button>
      <p className='loginsignup-login'>Already have an account? <span> Login here</span></p>
      <div className='loginsignup-agree'>
        <input type='checkbox' name='' id=''/>
        <p>By continuing, i agree to the terms of use & privacy policy.</p>
      </div>
    </div>
      
    </div>
  )
}

export default LoginSignup
