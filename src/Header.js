import React from 'react'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom'
import {signOut,getAuth} from "firebase/auth"
const Header=()=>{
    const auth=getAuth()
    const user = auth.currentUser;
    const username1=user.email.split("@")
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    async function handleClose () {
      setAnchorEl(null);
       
        
        try{
        await signOut(auth)
        }
        catch(error)
        {
        console.log(error)
        }
}
return(
    <>
    
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Logo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse text-right" id="navbarNav" >
    <ul className="navbar-nav text-right" >
      <li  className="nav-item active" style={{color:"#fff"}}><a  className="nav-link">Welcome {username1[0]}</a></li>
    
      <li className="nav-item active">
        <a className="nav-link" href="/logout" onClick={handleClose}>Logout</a>
      </li>
      
    </ul>
  </div>
</nav>
   
    </>
)
}
export default Header