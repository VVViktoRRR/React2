console.log('1) создать интерфейс на основе этого объекта:');
const user = {
    name: 'Max',
    age: 18,
    gender: 'male'
};
const sum = (a, b) => a + b;
const showSum = (a, b) => {
    console.log(a + b);
};
const incAge = (someUser, inc) => {
    someUser.age += inc;
    return someUser;
};
console.log(sum(1, 2));
console.log(showSum(2, 3));
console.log(incAge(user, 2));
//# sourceMappingURL=app.js.map