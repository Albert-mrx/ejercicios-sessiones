//---------Aincrono---

//ejer1
const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const calular1 = document.getElementById("btn-cal1");
const resultado1 = document.getElementById("res1");

calular1.onclick = function() {
    let a = number1.value;
    let b = number2.value;
    let cant = parseInt(a)+parseInt(b);
    let porcentaje1 = parseInt((a*100)/cant);
    let porcentaje2 = parseInt((b*100)/cant);
    resultado1.innerHTML = `el porcentaje de Hombres son ${porcentaje1} % , y porcentaje de Mujeres ${porcentaje2} %`
}
//ejer2

const number3 = document.getElementById("num3");
const calular2 = document.getElementById("btn-cal2");
const resultado2 = document.getElementById("res2");

calular2.onclick = function() {
    let a = number3.value;
    let n1 = (parseInt(a)*35)/100;
    let n2 = (parseInt(a)*25)/100;
    let n3 = (parseInt(a)*10)/100;
    let n4 = (parseInt(a)*15)/100;
    let n5 = (parseInt(a)*15)/100;
    resultado2.innerHTML = `Avernida la Mar : s/ ${n1}, Avenida Avancay s/ ${n2}, Avenida 28 de julio s/ ${n3}, Avenida Aviacion s/ ${n4},Avenida Tacna s/ ${n5}`
}

//ejer3

const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const calcular13 = document.getElementById("btn-cal3");
const respuesta13 = document.getElementById("res3");

calcular13.onclick = function() {
    let a = num4.value;
    let b = num5.value;
    let c = num6.value;

    let val1 = parseInt(a)*150;
    let val2 = parseInt(b)*50;
    let val3 = parseInt(c)*80;
    respuesta13.innerHTML = `cant total x entrada General s/ ${val1} , cant total x entrada mayoresEdad s/ ${val2}, cant total x entrada Menores s/ ${val3}`;
}
//---ejercicios propuestos

//ejer1

const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num10 = document.getElementById("num10");
const calcular14 = document.getElementById("btn-cal4");
const respuesta14 = document.getElementById("res4");

calcular14.onclick = function() {
    let a = num7.value;
    let b = num8.value;
    let c = num9.value;
    let d = num10.value;
    let sum = parseInt(a)+parseInt(b);
    let rest = parseInt(c) - parseInt(d);
    let prod = sum*rest;

    respuesta14.innerHTML = `la suma es : ${sum} , la resta ${rest} y el producto de ambos es ${prod}`;
}