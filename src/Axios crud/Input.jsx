import React, { useState } from 'react'
import axios from 'axios'
import toast,{ Toaster } from 'react-hot-toast'



function Input() {

    let [letter, setLetter]=useState({
        first: '',
        last: ''
    })


    let inputHandle=(e)=>{
       setLetter((prevState)=>({...prevState, [e.target.id]:e.target.value}))
    }

    let handleSubmit=()=>{
        axios.post('http://localhost:8080/data', letter)
        .then((res)=>toast.success('done'))
        .catch((err)=>toast.error('failed'))
    }

    //for firebase database- crud project

    // let submitFirebase=()=>{
    //     axios.post('https://crud-c3998-default-rtdb.asia-southeast1.firebasedatabase.app/input.json', letter)
    //     .then((res)=>console.log(res),
    //     setLetter({
    //         first:null,
    //         last: null
    //     }))
    //     .catch((err)=>console.log(err))
    // }

    /////

  return (
    <>
        <input type='text' id='first' onChange={inputHandle} placeholder='first name' style={{marginLeft: '20px'}}/>
        <input type='text' id='last' onChange={inputHandle} placeholder='last name'/>
        
        <button onClick={handleSubmit}>Submit</button>
        {/* <button onClick={submitFirebase}>Submit Firebse</button> */}

        
        <Toaster
              position="top-right"
              reverseOrder={false}
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
              }}
            />
    </>
    
  )
}

export default Input



















// import React, { useState } from 'react';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';

// function Input() {
//     let [letter, setLetter] = useState({
//         first: '',
//         last: ''
//     });

//     let inputHandle = (e) => {
//         setLetter((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
//     };

//     let handleSubmit = () => {
//         axios.post('http://localhost:8080/data', letter)
//             .then((res) => toast.success('Successfully submitted!'))
//             .catch((err) => toast.error('Submission failed!'));
//     };

//     return (
//         <>
//             <input 
//                 type='text' 
//                 id='first' 
//                 onChange={inputHandle} 
//                 placeholder='First Name' 
//                 style={{ marginLeft: '20px' }} 
//             />
//             <input 
//                 type='text' 
//                 id='last' 
//                 onChange={inputHandle} 
//                 placeholder='Last Name' 
//             />
//             <button onClick={handleSubmit}>Submit</button>
//             <Toaster 
//                 position="top-right"
//                 reverseOrder={false}
//                 toastOptions={{
//                     duration: 4000,
//                     style: {
//                         background: '#363636',
//                         color: '#fff',
//                     },
//                 }}
//             />
//         </>
//     );
// }

// export default Input;
