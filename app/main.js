const greeter = require('./Greeter');
document.querySelector('#root').appendChild(greeter());

document.getElementById("btn").onclick=function () {
    alert("注意天气变化")
}