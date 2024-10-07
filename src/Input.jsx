import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Input() {

   

    const[setData, setGetData]= useState({
       
        fname:null,
        sname: null,
        gender: null,

    })

    


    let inputhandle=(e)=>{
        setGetData((prevalue)=>({...prevalue,[e.target.id]:e.target.value.trim()}))
    }
    

    let radiohandle=(e)=>{
        setGetData((prevState)=>({...prevState,gender:e.target.value.trim()}));
    }

    
    let submithandle=(e)=>{
        
        e.preventDefault();
        
        axios.post("http://localhost:5000/entry",setData)
        .then(res=>{
            console.log(res.data)
        toast.success("submitted")
                                                
        
        setGetData({
           
            fname:" ",
            sname: " ",
            gender: " ",
           });
    })
        .catch(err=>{
            console.log(err)
        toast.error("error");
    })

        
    }


  return (
    <>
    <form onSubmit={submithandle}>

        <label htmlFor='fname'>First Name: </label>
        <input type='text'  onChange={(e)=>inputhandle(e)}  id='fname' name='first'/>
        <br/>
        <br/>
        <label htmlFor='fname'>Second Name: </label>
        <input type='text'  onChange={(e)=>inputhandle(e)}  id='sname' name='second'/>
        <br/>
        <br/>
        <label>Gender</label>
        <br/>
        <br/>
        
        <label htmlFor='male'>Men</label>
        <input type='radio' name='gender' value={'male'}  onChange={radiohandle}></input>
        <br/>
        <label>Women</label>
        <input type='radio' name='gender' value={'female'}  onChange={radiohandle} ></input>
        <br/>
        <br/>
        <button type='submit'>Submit</button>
    </form>
    <ToastContainer/>
    
    </>
  )
}

export default Input