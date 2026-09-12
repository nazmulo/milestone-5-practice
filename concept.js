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

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;

    return result;
}

console.log(doMath(50, 60));