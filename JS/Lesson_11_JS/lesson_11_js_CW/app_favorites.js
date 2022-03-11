let favoriteJSON = localStorage.getItem('favorites');
let favoriteParse = JSON.parse(favoriteJSON);
console.log(favoriteJSON);
let favoritesDiv = document.createElement('div');
console.log(favoriteParse);
    for (const favorites of favoriteParse) {
    let outDiv = document.createElement('div')
    outDiv.innerHTML = `${favorites}`;

    favoritesDiv.appendChild(outDiv);
}
document.body.appendChild(favoritesDiv);