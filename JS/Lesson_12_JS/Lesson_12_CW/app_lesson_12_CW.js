// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let wrapDiv = document.createElement('div');
wrapDiv.style.display = 'flex';
wrapDiv.style.flexWrap = 'wrap';
fetch('https://jsonplaceholder.typicode.com/posts')
.then(value => value.json())
.then(posts => {
    for (const post of posts) {
        let postDiv = document.createElement('div');
        postDiv.innerHTML = `<b>id:</b> ${post.id}<br>
                             <b>userId:</b> ${post.userId}<br>                    
                             <b>body:</b> ${post.body}<br> 
                             <b>title:</b> ${post.title}<br>`;
        postDiv.style.width = '18%';
        postDiv.style.background = 'silver';
        postDiv.style.margin = '2px';
        postDiv.style.padding = '5px';
        postDiv.style.border = '2px solid blue';
        let postBtn = document.createElement('button');
        postBtn.innerHTML = 'comments';
        postBtn.style.borderRadius = '20px';
        postBtn.style.background = '#FF00FF';
            postBtn.onclick =(e) => {
                e.preventDefault();
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(value => value.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (post.userId === comment.postId) {
                                let commentDiv = document.createElement('div');
                                commentDiv.innerHTML = `<b>id:</b> ${comment.id}<br>
                                                        <b>postId:</b> ${comment.postId}<br>
                                                        <b>body :</b> ${comment.body}<br>
                                                        <b>email :</b> ${comment.email}<br>
                                                        <b>name:</b> ${comment.name}`

                                commentDiv.style.background = '#FF00FF';
                                commentDiv.style.marginTop = '5px';
                                commentDiv.style.padding = '5px';
                                postDiv.appendChild(commentDiv);
                            }
                        }
                    })
            }
        postDiv.appendChild(postBtn);
        wrapDiv.appendChild(postDiv);
    }
})




document.body.appendChild(wrapDiv);