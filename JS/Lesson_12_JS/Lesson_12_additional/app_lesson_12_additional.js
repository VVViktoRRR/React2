// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let wrapDiv = document.createElement('div');
wrapDiv.style.display = 'flex';
wrapDiv.style.flexWrap = 'wrap';
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
            for (const user of users) {
            let userDiv = document.createElement('div');
            userDiv.innerHTML = `<b> id:</b> ${user.id}<br>
                                 <b> name:</b> ${user.name}<br>
                                 <b> username:</b> ${user.username}<br>
                                 <b> phone:</b> ${user.phone}<br>
                                 <b> address:</b> ${user.address.street}<br>
                                 <b> company:</b> ${user.company.name}<br>
                                 <b> website:</b> ${user.website}<br><hr>`
            userDiv.style.width = '47%';
            userDiv.style.border = '2px solid red';
            userDiv.style.margin = '3px';
            userDiv.style.padding = '5px';

                let postBtn = document.createElement('button');
                postBtn.innerHTML = 'all posts';
                postBtn.style.borderRadius = '20px';
                postBtn.style.background = 'pink';
                postBtn.onclick = (e) => {
                    e.preventDefault();
                    fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(value => value.json())
                        .then(posts => {
                            for (const post of posts) {
                                if(user.id === post.userId) {
                                    let postDiv = document.createElement('div');
                                    postDiv.innerHTML = `<b> userId:</b> ${post.userId}<br>
                                                         <b> id:</b> ${post.id}<br>
                                                         <b> body:</b> ${post.body}<br>
                                                         <b> title:</b> ${post.title}<br><hr>`

                                    postDiv.style.background = 'pink';
                                    postDiv.style.marginTop = '5px';
                                    postDiv.style.padding = '5px';
                                        let commentBtn = document.createElement('button');
                                        commentBtn.innerHTML = 'all comments';
                                        commentBtn.style.borderRadius = '20px';
                                        commentBtn.style.background = '#FF00FF';
                                        commentBtn.onclick = (e) => {
                                            e.preventDefault();
                                            fetch('https://jsonplaceholder.typicode.com/comments')
                                                .then(value => value.json())
                                                .then(comments => {
                                                    for (const comment of comments) {
                                                        if (post.userId === comment.postId) {
                                                            let commentDiv = document.createElement('div');
                                                            commentDiv.innerHTML = `<b>postId:</b> ${comment.postId}<br>
                                                                                    <b>id:</b> ${comment.id}<br>
                                                                                    <b>body :</b> ${comment.body}<br>
                                                                                    <b>email :</b> ${comment.email}<br>
                                                                                    <b>name:</b> ${comment.name}`
                                                            commentDiv.style.marginTop = '5px';
                                                            commentDiv.style.padding = '5px';
                                                            commentDiv.style.background = '#FF00FF';
                                                            postDiv.appendChild(commentDiv)
                                                        }
                                                    }
                                                })
                                        }
                                    postDiv.appendChild(commentBtn);
                                    userDiv.appendChild(postDiv);
                                }
                            }
                        })
                }
            userDiv.appendChild(postBtn);
            wrapDiv.appendChild(userDiv);
        }
    })
document.body.appendChild(wrapDiv);