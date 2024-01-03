import React, { useState,useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Button} from '@mui/material'
import api from './api'
import Header from './Header'

const ManageBook=()=>{
    const [book,setBook]=useState([])
    const [message,setMessage]=useState('')
    const findtotal = totalprice()

    function totalprice()
    {
        let t = 0;
        book.map((d) => t = t + d.book_price)
        return t;
    }

    const fetchBook=async()=>{
        const response=await api.get('/books/');
        setBook(response.data)
    }
    useEffect(()=>{

        fetchBook();
        },[]);
    return (<>
    <body className='bg-warning'>
        <Header />
    <div className="container">
    <main>
                  
                        <h3 className='p-4'>Manage Book</h3>
                        
                        
                        {message && <div  className="p-3" style={{color:"red",fontSize:"20px"}}>{message}</div>}
                            <TableContainer component={Paper}>
                            <Table sx={{minWidth:650}} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                            <TableCell  style={{fontWeight:"bold"}}>Sno#</TableCell>
                            <TableCell  style={{fontWeight:"bold"}}>Book</TableCell>
                            <TableCell  style={{fontWeight:"bold"}}>Price</TableCell>
                            
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                {book!=null ? book.map((res)=>(<TableRow>
                                    <TableCell>{res.id}</TableCell>
                            <TableCell>{res.book_name}</TableCell>
                            <TableCell>{res.book_price}</TableCell>
                           
                            </TableRow>)):<TableCell colSpan={3}><h3 style={{textAlign:'center'}}>No Results</h3></TableCell>}
                           
                           <TableRow><TableCell ></TableCell><TableCell ></TableCell><TableCell style={{fontWeight:'bold',fontSize:'20px'}}>Total: {findtotal}</TableCell></TableRow>
                            </TableBody>
                            </Table>
                            </TableContainer>
                           
                </main></div></body>
    
    </>)
}
export default ManageBook