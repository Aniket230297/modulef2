let name = document.getElementById("textname");
let form = document.getElementById("form");
let email = document.getElementById("email");
let gpa = document.getElementById("gpa");
let age = document.getElementById("age");
let degree = document.getElementById("degree");

let std = document.getElementById("std");

let tasks=[];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
})

let formValidation = () => {
    if (textname.value === "") {
        console.log("failure");
    } else {
        console.log("success");
        saveData();
    }
}

let saveData = () =>{

    let task ={
        name: textname.value,
        email: email.value,
        gpa: gpa.value,
        age: age.value,
        degree: degree.value
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

console.log(tasks);


