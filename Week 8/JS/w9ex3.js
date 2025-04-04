console.log("Hello");

function multiplyNumbers(){
    let numberOne = document.querySelector('#n1').value;
    let numberTwo = document.querySelector('#n2').value;
    let result = numberOne * numberTwo;
    document.querySelector('#output').textContent ='The multiplication of  '+ numberOne + ' and ' + numberTwo + ' is ' + result;
    document.querySelector('#output').style.color='blue'
}

document.querySelector('#btn').addEventListener('click', multiplyNumbers);