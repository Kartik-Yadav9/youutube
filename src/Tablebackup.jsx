import axios, { Axios } from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';




function Table() {

    const[setData, getSetData]= useState([])
    const[edit, setEdit]= useState({
        id: '',
        fname: '',
        sname: ' ',
        gender: ' ',
    })
    

    useEffect(()=>{
        axios.get("http://localhost:5000/entry")
        .then(res=> getSetData(res.data))
        .catch(err=>console.log(err))
    
    },[])

    let butDlt=(id)=>{
        axios.delete('http://localhost:5000/entry/'+ id)
        .then(res=>console.log(res.data))
        .catch(res=>console.log(res))

    }

    let butEdit=(i)=>{                                                      {/* 2 update */}
        setEdit(i)
    }



        
   let inputhandle=(e)=>{
    setEdit(({...edit,[e.target.id]:e.target.value}))
   }


    let handleEdit = () => {
        
        axios.put(`http://localhost:5000/entry/${edit.id}`, edit)
            .then(res => {
                console.log(res.data);
                const updatedData = setData.map(item =>
                    item.id === edit.id ? edit : item
                );
                getSetData(updatedData);
            })
            .catch(err => console.log(err));
    }




  return (
    <>
    <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Gender</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
    
        {
        setData.map((i,index)=>{
        return(

            <tr key={index}>

                <td>{i.id}</td>
                <td>{i.fname}</td>
                <td>{i.sname}</td>
                <td>{i.gender}</td>
                <td>
                <button onClick={()=>butEdit(i)}>Edit</button>                  {/* 1 update */}                                                                   
                    <button onClick={(e)=>butDlt(i.id)}>Delete</button>       
                </td>
            </tr>
        )
        
    })}
    

  </tbody>
</table>
    <input type='text' value={edit.fname} onChange={(e)=>inputhandle(e)}/>
    <input type='text' value={edit.sname} onChange={(e)=>inputhandle(e)}/>
    <input type='text' value={edit.gender} onChange={(e)=>inputhandle(e)}/>
    <button onClick={handleEdit}> s a v e </button>
           

    </>
  )
}

export default Table