import './App.css';
import {Posts, UserDetails, Users} from "./components";
import {useState} from "react";


function App() {
   const [userId, setUserId] = useState(null);
   const [postId, setPostId] = useState(null);


   const getUser = (user) => {
     setUserId(user);
     setPostId(null);
   }
    const getPostId = (id) => {
        setPostId(id)
    }
     return (
    <div>
         <div style={{display:'flex', flexWrap:'wrap'}}>
             <Users getUser={getUser}/>

             {userId && <UserDetails userId={userId} getPostId={getPostId}/>}
         </div>
        <hr/>
        { postId && <Posts postId={postId}/>}
    </div>
  )
}

export default App;
