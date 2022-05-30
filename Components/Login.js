import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import '../App.css'

export default function Login() {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')

    const navigate = useNavigate();

    const handleOnClick = useCallback(() => navigate('/register'));
    const dispatch = useDispatch()

    const users=useSelector(state=>state.users)

    const login=()=>{
       const payload= users.find(user=>user.userName === userName && user.password === password)
       console.log(payload,'uhg')
       if(payload){
           dispatch({
               type:'Login',
               payload
           })
           alert('Login SuccessFul...')
           setUserName('')
           setPassword('')
       }else{
           alert('Not Match!!! Register first')
       }
    }

  return (
    <div  className="login">
      {
        users.map((value)=>
          <div key={value.id}>
            {value.name}
          </div>
        )
      }
    <div style={{display:'flex',flexDirection:'column',marginLeft:'20%'}}>
    <h1 style={{marginTop:'250px'}}>Login</h1>
    <form>
         <input style={{width:'200px',height:'30px',margin:'10px'}} type='text' placeholder='UserName' value={userName} onChange={e=>setUserName(e.target.value)}/><br/>
        <input style={{width:'200px',height:'30px',margin:'10px'}} type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/><br/>
        <div>
        <input style={{width:'95px',height:'30px',margin:'10px'}} type='button' value='Login' onClick={login}/>
        <button style={{width:'95px',height:'30px',margin:'10px'}} onClick={handleOnClick}>Register</button>
        </div>
    </form>
    </div>
    </div>
  )
}
