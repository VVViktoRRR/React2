import {useEffect, useState} from "react";

export default function Users() {
  const [users, setUsers] = useState( []);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(users => {
                      setUsers(users);
        });
  }, [])

  return (
     <div>
         <h2> Users:</h2>
       {
         users.map(user => <div key = {user.id}>
             {user.id}) {user.name} --- {user.username}
                           </div>)
       }
    </div>
  );
}