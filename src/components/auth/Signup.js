import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import firebase from '../../firebaseConfig'
import {Button} from '@mui/material'
function Signup()
{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const navigate=useNavigate()
    const [message,setMessage]=useState(null)
    const Submit=async(e)=>{
        //alert('')
        e.preventDefault()
        try{
            
            const user=await firebase.auth().createUserWithEmailAndPassword(email,pass)
            if (user)
            {
                alert("User Created Successfully")
                navigate('/signin')
            }
        }
        catch(error)
        {
            setMessage("Enter Correct Details")
        }

    }
    const Login=()=>{
        navigate('/')
    }
    return (
        <>
         <body className="bg-warning">
        <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Register</h3></div>
                                    <div className="card-body">
                                        <form>
                                        <div className="form-floating mb-3">
                                                <input className="form-control" id="inputUser" value={name} type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
                                                <label htmlFor="inputUser">User Name</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputEmail" value={email} type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
                                                <label htmlFor="inputEmail">Email address</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputPassword"  value={pass} type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)}/>
                                                <label htmlFor="inputPassword">Password</label>
                                            </div>
                                            
                                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                               
                                                <Button onClick={Submit} variant="contained">Register</Button>
                                                <Button onClick={Login} variant="contained">Login</Button>
                                            </div>
                                            {message && <div  className="p-3" style={{color:"red"}}>{message}</div>}
                                        </form>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div></body>
        </>
    )

}
export default Signup