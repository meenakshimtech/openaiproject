import firebase from '../../firebaseConfig'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [message,setMessage]=useState(null)
    const navigate=useNavigate()
    const Login=async(e)=>{
        e.preventDefault()
        await firebase.auth().signInWithEmailAndPassword(email,password).then((userCretentials)=>{
            navigate('/dashboard')
        }).catch((error)=>{
            setMessage("Username and Password is wrong")
        })

    }
    return(
        <>
          <body className="bg-warning">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    
    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                    <div className="card-body">
        <form onSubmit={Login}>
           
            <div className="form-floating mb-3">
            <input type='email' placeholder='Enter your Email' className="form-control" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-floating mb-3">
            <input type='password' placeholder='Enter your Password' className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="d-flex align-items-center justify-content-between mt-4 mb-0 text-right">
                                               
            <button type='submit' variant="contained" className='text-right'>Login</button>
            <a href='/signup' type='submit' variant="contained" className='text-right'>Sign Up</a>
            </div>
            {message && <div  className="p-3" style={{color:"red"}}>{message}</div>}
        </form>
        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        </main>
                </div>
                </div>
                </body>
        </>
    )
}
export default Signin