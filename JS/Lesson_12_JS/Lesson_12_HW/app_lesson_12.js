// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

let wrapDiv = document.createElement('div')
wrapDiv.style.display = 'flex';
wrapDiv.style.flexWrap = 'wrap';
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        for (const post of posts) {
           let postDiv = document.createElement('div')
            postDiv.innerHTML = `<b>id :</b> ${post.id}<br>
                                 <b>userId :</b> ${post.userId}<br>
                                 <b>body:</b> ${post.body}<br>
                                 <b>title:</b> ${post.title}`
            postDiv.style.border = '2px solid black';
            postDiv.style.background = 'yellow';
            postDiv.style.width = '18%';
            postDiv.style.margin = '2px';
            postDiv.style.padding = '5px';
            wrapDiv.appendChild(postDiv)
        }
    })

//===========================================================================================
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        console.log(comments)
        for (const comment of comments) {
            let commentDiv = document.createElement('div')
            commentDiv.innerHTML = `<b>id:</b> ${comment.id}<br>
                                    <b>postId:</b> ${comment.postId}<br>
                                    <b>body :</b> ${comment.body}<br>
                                    <b>email :</b> ${comment.email}<br>
                                    <b>name:</b> ${comment.name}`
            commentDiv.style.border = '2px solid red';
            commentDiv.style.background = 'silver';
            commentDiv.style.width = '18%';
            commentDiv.style.margin = '2px';
            commentDiv.style.padding = '5px';
            wrapDiv.appendChild(commentDiv)
        }
    })

document.body.appendChild(wrapDiv);

