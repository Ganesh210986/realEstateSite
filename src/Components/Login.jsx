import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="login-container">
        <div className='Log-in'>
        <h2>Log In</h2>
      <form action="">
        <div className="username">
        Username
        <input type="text" placeholder='Username' />
      </div>
      <div className="password">
        Password
        <input type="password" placeholder='Password'/>
      </div>
      <button type='submit'>Login</button>
      </form>
    </div>
    </div>
  )
}

export default Login
