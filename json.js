//joson :
//{
//    "name" : "Zihad",
//    "age" : 28,
//    "isStudent" : false
//}

//1.

//const person = {
//    name: "selim",
//    fruit: "dalim",
//    dish: "halim",
//    friends: ["alim", "kolim", "lamim"],
//    isRich: false,
//    money: 34000,
//};

//console.log(person);

//console.log(person.name);       // selim
//console.log(person.fruit);      // dalim
//console.log(person.money);      // 34000
//console.log(person.isRich);     // false

//console.log(person.friends[0]); // alim
//console.log(person.friends[1]); // kolim
//console.log(person.friends[2]); // lamim

//const personJson = JSON.stringify(person);
//
//console.log(personJson);

// json add :

//fetch("https://jsonplaceholder.typicode.com/todos/1")
//    .then((res) => res.json())
//    .then((data) => console.log(data));


//load data to UI :

//1 jodi 1 ta post dhakate chai;

//const loadPost = () => {
//    fetch("https://jsonplaceholder.typicode.com/todos/1")
//        .then((res) => res.json())
//        .then((data) => {
//            displayPost(data);
//        });
//};
//
//const displayPost = (post) => {
//    const postContainer = document.getElementById("post-container");
//
//    const li = document.createElement("li");
//    li.innerText = post.title;
//
//    postContainer.appendChild(li);
//};
//
//loadPost();

//2 jodi onnek gulu todo dhekate chai:

//const loadPost = () => {
//    fetch("https://jsonplaceholder.typicode.com/todos")
//        .then((res) => res.json())
//        .then((data) => {
//            displayPost(data);
//        });
//};
//
//const displayPost = (posts) => {
//    const postContainer = document.getElementById("post-container");
//
//    
//
//    posts.forEach((post) => {
//        const li = document.createElement("li");
//        li.innerText = post.title;
//        postContainer.appendChild(li);
//    });
//};
//
//loadPost();

//3 noton kore add hobe na;

//const loadPost = () => {
//    fetch("https://jsonplaceholder.typicode.com/todos")
//        .then((res) => res.json())
//        .then((data) => {
//            displayPost(data);
//        });
//};
//
//const displayPost = (posts) => {
//    const postContainer = document.getElementById("post-container");
//
//    postContainer.innerHTML = "";
//
//    posts.forEach((post) => {
//        const li = document.createElement("li");
//        li.innerText = post.title;
//        postContainer.appendChild(li);
//    });
//};
//
//loadPost();

