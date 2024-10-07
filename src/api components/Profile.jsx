import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile(){
  
 const {user}= useContext(UserContext)                    //user bcoz we have to recieve value

  //conditional return

 if (!user)  return <div>Please login</div> 

return <div>Welcome {user.username}</div>
}

export default Profile
