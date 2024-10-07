













import axios, { Axios } from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';




function Table() {

    const[setData, getSetData]= useState([])
    const [editData, setEditData] = useState({
        id: "",
        fname: "",
        sname: "",
        gender: ""
    });

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


    const butEdit = (item) => {
        setEditData(item); // Set the data of the entry being edited
    }

    const handleEdit = () => {
        axios.put(`http://localhost:5000/entry/${editData.id}`, editData)
            .then(res => {
                console.log(res.data);
                // Update the entry in the state with the edited data
                const updatedData = setData.map(item =>
                    item.id === editData.id ? editData : item
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
                <button onClick={() => butEdit(i)}>Edit</button>
                    <button onClick={(e)=>butDlt(i.id)}>Delete</button>
                </td>
            </tr>
        )
        
    
    })}
    
    
  </tbody>
</table>
            <div>
                <input type="text" value={editData.fname} onChange={(e) => setEditData({ ...editData, fname: e.target.value })} />
                <input type="text" value={editData.sname} onChange={(e) => setEditData({ ...editData, sname: e.target.value })} />
                <input type="text" value={editData.gender} onChange={(e) => setEditData({ ...editData, gender: e.target.value })} />
                <button onClick={handleEdit}>Save</button>
            </div>

    </>
  )
}

export default Table