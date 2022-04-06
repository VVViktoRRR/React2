import {useEffect, useState} from "react";

export default function Posts() {
  let [posts, setPosts] = useState( []);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(posts => {
          setPosts(posts);
        });
  }, [])
  return (
    <div>
          <h2>Posts :</h2>
      {
        posts.map(post =>
            <div key={post.id}>
               <b>id:</b>{post.id}
               <br></br>
               <b>title:</b>{post.title}
               <br></br>
               <b>body:</b>{post.body}
               <br></br>
               <hr></hr>
            </div>)
      }
    </div>
  );
}