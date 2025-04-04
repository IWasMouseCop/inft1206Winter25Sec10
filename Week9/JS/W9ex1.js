console.log("Hello");



function greeting1(){
    console.log("Hello, Again");

}

greeting1();

function greeting2(name){
    console.log(`Hello ${name}`)

}

greeting2()

function greeting3(name){
    return `Hello ${name}`;
}

let message = greeting3('tom');
console.log(message);

greeting2();

function sum(num1, num2){
    return num1+num2;
}

console.log(sum(3,6));


