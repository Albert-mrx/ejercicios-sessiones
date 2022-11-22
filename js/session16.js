//ejer1
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const calculo1 = document.getElementById("cal1");
const result1 = document.getElementById("res1");

calculo1.onclick = function() {
    let a = parseInt(num1.value);
    let b = parseInt(num2.value);

    let suma = a+b;
    let resta = a-b;
    let mult = a*b;
    let pot = Math.pow(a,b);

    result1.innerHTML = `suma : ${suma}, resta ${resta}, producto ${mult}, potencia ${pot}`;
}

//ejer2

const num3 = document.getElementById("num3");
const calculo2 = document.getElementById("cal2");
const result2 = document.getElementById("res2");

calculo2.onclick = function() {
    let grado = parseFloat(num3.value);
    let celcius = (grado-32)/1.8;

    result2.innerHTML = `${grado} grados farenheight es ygual a ${celcius} grados celcius`;
}
//ejer3

const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const calculo3 = document.getElementById("cal3");
const result3 = document.getElementById("res3");

calculo3.onclick = function() {
    let a = parseInt(num4.value);
    let b = parseInt(num5.value);

    let suma = a+b;
    result3.innerHTML = `la suma es ${suma}`;
}