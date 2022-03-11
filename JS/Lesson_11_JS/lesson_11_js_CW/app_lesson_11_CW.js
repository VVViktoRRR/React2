// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву
// favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let wrapDiv = document.createElement('div');
let favorites = [];
        for (const user of users) {
        let userDiv = document.createElement('div')

        userDiv.innerHTML = `${user.name}  - - 
                             ${user.age}  - - 
                             ${user.status}`;

        let favoriteButton = document.createElement('button');
        favoriteButton.innerHTML = 'Add Favorites'
            favoriteButton.onclick = (e) => {
            e.preventDefault();
            favorites.push(`name: ${user.name}, age: ${user.age}, status: ${user.status}`)
            localStorage.setItem('favorites', JSON.stringify(favorites))
            }

        wrapDiv.appendChild(userDiv);
        wrapDiv.appendChild(favoriteButton);

    }
let a = document.createElement('a');
a.style.fontSize = '30px';
a.style.color = 'black';
a.innerHTML = `<a href = "favorites.html"> Favorites </a>`;

document.body.appendChild(wrapDiv);
document.body.appendChild(a);