import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './register.css'

function Register() {
    const [data,setData] = useState({username:"",password:"",cpassword:""})
    const navigator=useNavigate();
    const onRegister=(e)=>{
        e.preventDefault()
        if(data.password !==data.cpassword){
            return alert(`password doesn't match`)
        }
    fetch("https://listtodobackend.onrender.com/signup",{
        method:"post",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            email:data.email,
            password:data.password,
            confirmpassword:data.cpassword
        })
    }).then(res=>res.json())
    .then((data)=>{
        console.log(data);
        if(data.message){
            return alert(data.message)
        }
        alert('user loggin successfully')
        navigator("/");
    })
    
        
    }
  return (
    <div>
         <div className="login-main" >
            <div className="login-box">
                <div className="login-logo">signup todo app</div>
                <div className="login-para">Create New Account</div>
                <form className='login-form'>
                    <input className='login-input'  type="email" placeholder="username should be a valid email id" name="username"  required  onChange={(e)=>{setData({...data,email:e.target.value})}} />
                    <input className='login-input'  type="password" placeholder="Password" name="password"  required onChange={(e)=>{setData({...data,password:e.target.value})}} />
                    <input className='login-input'  type="password" placeholder="Confirm Password" name="cpassword"  required onChange={(e)=>{setData({...data,cpassword:e.target.value})}} />
                    <button className='login-btn'   type="submit" onClick={onRegister} >Sign up</button>
                </form>
            </div>
            <div className='addition'>
            
            <Link to={"/"}>Sign in</Link>
            </div>
        </div>

    </div>
  )
}

export default Register
