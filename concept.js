//default parameter:

//function add (num1, num2 = 0){
//    const total = num1 + num2;
//    console.log(num1,num2,total);
//}
//add(10)

//2 string :

//function fullName (first, last = ' '){
//    const name = first + ' ' + last;
//    console.log(name);
//}
//
//fullName('kamal')

//dynamic string:

//const firstName = 'Osman';
//const aboutMe = `my name is ${firstName}`;


//const giveMe = `give me money ${(10+2)*2+500}`;


//const firstName = 'osman';
//const lastName = 'hadi';

//const fullName = `${firstName} ${lastName}`;

//function getCardHTML (name,description,price) {
//    const div = `
//    <div class='card'>
//    <h2>${name}</h2>
//    <p>price:${price}</p>
//    <p>${description}</p>
//    </div>
//    `
//    console.log(div);
//}
//getCardHTML('IPHONE12','LATEST MODEL',999);


//arrow function:

//const add = (num1, num2) => num1 + num2;

//console.log(add(50, 60));

//const multipli = (a,b) => a*b;

//console.log(multipli(2,5));

//const doMath = (x, y) => {
//    const sum = x + y;
//    const diff = x - y;
//    const result = sum * diff;
//
//    return result;
//}
//
//console.log(doMath(50, 60));

//spread operator:

//const numbers = [3, 5, 1, 8, 2, 58, 9];

//const max = Math.max(...numbers);

//console.log(...numbers);

//console.log(max);

//const parrams = [45,12,3];
//
//function sum (x,y,z) {
//    return(x+y+z);
//}
//const result = sum(...parrams);
//console.log(result);

//const arr1 =[1,2,3];
//const array2 =[...arr1];
//array2.push(4);
//console.log(arr1);
//console.log(array2);

//const person = { name:'Alice', age:30 };
//const person2 = {...person , designation : 'devoloper'};
//person.salary = 36000;
//console.log(person);
//console.log(person2);

//obj and array distructaring :

//const {
//    name,
//    price: phonePrice,
//    camera: '12mp'
//} = {
//    name: 'iphone',
//    price: 799,
//    brand: 'apple',
//    camera: '48mp'
//};
//
//console.log(name);
//console.log(phonePrice);
//console.log(camera);

//const [first, second] = [10, 20];

//const [height, weight] = [60, 70];

//const king = {name:'musafa', age: 55, kingdom:'Prideland'};
//const keys = Object.keys(king);
//const values = Object.values(king);
//const entries = Object.entries(king);

//console.log(keys);
//console.log(values);
//console.log(entries);

//dot notation and bracket notation :

//console.log(employee.name)

//console.log(employee['name']);
//console.log(employee[1]);
//console.log(employee['home-address']);

//looping object:

//const employee = {
//    name: 'john doe',
//    1: 'deskone',
//    'home-address': '123 main st',
//    salary: 5000,
//    position: 'software engineer'
//};
//
//for (const key in employee) {
//    const value = employee[key];
//    console.log(key, value);
//}; 