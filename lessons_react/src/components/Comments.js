import {useEffect, useState} from "react";

export default function Comments() {
  let [comments, setComments] = useState( []);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(comments => {
          setComments(comments);
        });
  }, [])
  return (
    <div>
    <h2> Comments :</h2>
      {
        comments.map(comment =>
            <div key={comment.id}>
                    <b>id:</b>{comment.id}
                    <br></br>
                    <b>name:</b>{comment.name}
                    <br></br>
                    <b>email:</b>{comment.name}
                    <br></br>
                    <b>body:</b>{comment.body}
                    <br></br>
                    <hr></hr>
          </div>)
      }
    </div>
  );
}