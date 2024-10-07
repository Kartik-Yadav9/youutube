// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// function Table() {
    
//     let[store, setStore]= useState()

//     useEffect(()=>{
//         axios.get('http://localhost:8080/data')
//         .then((res)=>setStore(res.data))
//         .catch((err)=>console.log(err))
        
//     },[])

//     let dlt=(id)=>{
//       axios.delete('http://localhost:8080/data/'+ id)
//       .then((res)=>console.log(res),
//       setStore(store.filter(item=>item.id !== id)))
//       .catch((err)=>console.log(err))
//     }

//   return (
//     <>
//         <table className="table table-dark table-striped">
        
//   <thead>
//     <tr>
//       <th scope="col">id</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Action</th>
//     </tr>
//   </thead>
//   <tbody>
//     {
//         store && store.map((item, index)=>{
//             return (
//             <tr key={index}>
//                 <td>{index+1 }</td>
//                 <td>{item.first}</td>
//                 <td>{item.last}</td>
//                 <td>
//                     <button>Edit</button>
//                     <button onClick={()=>dlt(item.id)}>Delete</button>
//                 </td>
//             </tr>
//             )
//         })
//     }
//   </tbody>
  
// </table>
//     </>
//   )
// }

// export default Table





















import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Table() {
    
    let [store, setStore] = useState([])
    let [editing, setEditing] = useState(false)
    let [currentItem, setCurrentItem] = useState({ id: '', first: '', last: '' })

    useEffect(() => {
        axios.get('http://localhost:8080/data')
        .then((res) => setStore(res.data))
        .catch((err) => console.log(err))
    }, [])

    let dlt = (id) => {
      axios.delete(`http://localhost:8080/data/${id}`)
      .then((res) => {
          console.log(res)
          // Update the store after deletion
          setStore(store.filter(item => item.id !== id))
      })
      .catch((err) => console.log(err))
    }

    let edit = (item) => {
      setEditing(true)
      setCurrentItem({ id: item.id, first: item.first, last: item.last })
    }

    let handleEditChange = (e) => {
      setCurrentItem((prevState) => ({ ...prevState, [e.target.id]: e.target.value }))
    }

    let saveEdit = () => {
      axios.put(`http://localhost:8080/data/${currentItem.id}`, currentItem)
      .then((res) => {
          console.log(res)
          // Update the store with the edited item
          setStore(store.map(item => item.id === currentItem.id ? currentItem : item))
          setEditing(false)
      })
      .catch((err) => console.log(err))
    }

  return (
    <>
        <table className="table table-dark table-striped">
        
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        store && store.map((item, index) => {
            return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.first}</td>
                <td>{item.last}</td>
                <td>
                    <button onClick={() => edit(item)}>Edit</button>
                    <button onClick={() => dlt(item.id)}>Delete</button>
                </td>
            </tr>
            )
        })
    }
  </tbody>
  
</table>

    {
        editing && (
            <div>
                <h3>Edit Item</h3>
                <input type='text' id='first' value={currentItem.first} onChange={handleEditChange} placeholder='First name' />
                <input type='text' id='last' value={currentItem.last} onChange={handleEditChange} placeholder='Last name' />
                <button onClick={saveEdit}>Save</button>
                <button onClick={() => setEditing(false)}>Cancel</button>
            </div>
        )
    }
    </>
  )
}

export default Table
