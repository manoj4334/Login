import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const [name,setName]=useState('')
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
     const navigate = useNavigate();

    const handleOnClick = useCallback(() => navigate('/'));

    const dispatch=useDispatch()

    const register=()=>{
        if(password===confirmPassword){
            dispatch({
                type:'REGISTER',
                payload:{
                    name,userName,password
                }
            })
            setName('')
            setUserName('')
            setPassword('')
            setConfirmPassword('')
            handleOnClick()
        }else {
            alert('Confirm password is not match!')
        }   
    }

  return (
      <div className='register'>
    <div style={{display:'flex',flexDirection:'column'}}>
      <h1>Register</h1>
    <form>
        <input type='text' placeholder='Name' value={name} onChange={e=>setName(e.target.value)}/><br/>
        <input type='text' placeholder='UserName' value={userName} onChange={e=>setUserName(e.target.value)}/><br/>
        <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/><br/>
        <input type='password' placeholder='Conform Password' value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}/><br/>
        <input type='button' value='Register' onClick={register}/>
    </form>
    </div>
    </div>
  )
}
