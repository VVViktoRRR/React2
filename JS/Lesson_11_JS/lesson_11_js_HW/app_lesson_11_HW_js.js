// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let wrapDiv = document.createElement('div');
let NameAgeForm = document.createElement('form')
let nameLabel = document.createElement('label')
nameLabel.innerHTML = `Name:`;
let nameInput = document.createElement('input');
let ageLabel = document.createElement('label');
ageLabel.innerHTML = `Age:`;
let ageInput = document.createElement('input');
nameInput.style.margin = '20px';
ageInput.style.margin = '20px';
let btn = document.createElement('button');
btn.innerHTML = ` Send data`;

btn.onclick = (e) => {
    e.preventDefault();
    localStorage.setItem(`${nameInput.value}`, JSON.stringify(`name: ${nameInput.value}, age: ${ageInput.value}`));
}

NameAgeForm.appendChild(nameLabel);
NameAgeForm.appendChild(nameInput);

NameAgeForm.appendChild(ageLabel);
NameAgeForm.appendChild(ageInput);
NameAgeForm.appendChild(btn);

wrapDiv.appendChild(NameAgeForm)
document.body.appendChild(wrapDiv)

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let carDiv = document.createElement('div');
let carForm = document.createElement('form');
carDiv.style.background = 'silver';
carDiv.style.padding = '10px';
let modelLabel = document.createElement('label');
modelLabel.innerHTML = 'Model:';
modelLabel.style.marginLeft = '20px';
let modelInput = document.createElement('input');
modelInput.style.marginLeft = '5px';
let typeLabel = document.createElement('label');
typeLabel.innerHTML = 'Type:';
typeLabel.style.marginLeft = '20px';
let typeInput = document.createElement('input');
typeInput.style.marginLeft = '5px';
let volumeLabel = document.createElement('label');
volumeLabel.innerHTML = 'Volume:';
volumeLabel.style.marginLeft = '20px';
let volumeInput = document.createElement('input');
volumeInput.style.marginLeft = '5px';
let addBtn = document.createElement('button');
addBtn.innerHTML = ' Add auto';
addBtn.style.borderRadius = '20px';
let cars = [];

addBtn.onclick = (e) => {
    e.preventDefault();
    cars.push(`Model: ${modelInput.value}, Type: ${typeInput.value}, Volume ${volumeInput.value}`)
    localStorage.setItem('cars', JSON.stringify(cars));
    let carsJSON = localStorage.getItem('cars');
    console.log(carsJSON);
    let carsParse = JSON.parse(carsJSON);
    console.log(carsParse)
}

carForm.style.display = 'flex';
carForm.appendChild(modelLabel);
carForm.appendChild(modelInput);
carForm.appendChild(typeLabel);
carForm.appendChild(typeInput);
carForm.appendChild(volumeLabel);
carForm.appendChild(volumeInput)
carForm.appendChild(addBtn);


carDiv.appendChild(carForm);
document.body.appendChild(carDiv);
