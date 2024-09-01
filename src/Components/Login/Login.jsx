import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [emailValue, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
     

    const handleEmailInput = (e) => {
        let emailInput = e.target.value
        setEmail(emailInput)
        
    }

    const handlePasswordInput = (e) => {
        let passwordInput = e.target.value
        setPassword(passwordInput)
    }

    const handleLogin = () => {
        if (emailValue =="seun@gmail.com" && password=="fish2024"){
            navigate("/user/dashboard")
        }else{
            alert("Invalid Credentials")
        }
    }


  return (
    <>
    <input type="email" placeholder='Email Address' name='email' value={emailValue} onChange={handleEmailInput} />
    <input type="password" placeholder='Password' name='password' value={password} onChange={handlePasswordInput}/>
    <input type="submit" value="Login" onClick={handleLogin} />
    </>
  )
}

export default Login