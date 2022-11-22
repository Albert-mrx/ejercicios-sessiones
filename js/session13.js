const num1 = document.getElementById("numb1");
const num2 = document.getElementById("numb2");
const num3 = document.getElementById("numb3");
const calcular = document.getElementById("cal1");
const respuesta1 = document.getElementById("respuesta");

calcular.onclick = function() {
    let n1 = num1.value;
    let n2 = num2.value;
    let n3 = num3.value;
    let sum = (parseInt(n1)+parseInt(n2)+parseInt(n3))/3;
    respuesta1.innerHTML = `nota Final ${sum}`;
}
/* ejer2 */
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const calcular2 = document.getElementById("cal2");
const respuesta2 = document.getElementById("sueldoFinal");

calcular2.onclick =  function() {
    let n1 = number1.value;
    let n2 = number2.value;
    let n3 = number3.value;
    let aumento1 = parseInt(n1*10)/100;
    let reporte1 = parseFloat(aumento1);
    let aumento2 = parseInt(n2*12)/100;
    let reporte2 = parseFloat(aumento2);
    let aumento3 = parseInt(n3*15)/100;
    let reporte3 = parseFloat(aumento3);

    respuesta2.innerHTML = `empleado 1 sueldo s/ ${reporte1} ,empleado 2 sueldo s/ ${reporte2} , empleado 3 sueldo s/ ${reporte3} ,`
}

/* ejer3 */
const numb1 = document.getElementById("number-1");
const numb2 = document.getElementById("number-2");
const numb3 = document.getElementById("number-3");
const calcular3 = document.getElementById("cal3");
const respuesta3 = document.getElementById("resultado");

calcular3.onclick =  function() {
    let n1 = numb1.value;
    let n2 = numb2.value;
    let n3 = numb3.value;
    let nota1 = parseInt(n1*30)/100;
    let nota2 = parseInt(n2*30)/100;
    let nota3 = parseInt(n3*40)/100;
    let notaFinal = (nota1+nota2+nota3)/3;

    if(notaFinal>13){
        respuesta3.innerHTML = `Aprobaste 😎 : ${notaFinal}`;
    }else{
        respuesta3.innerHTML = `DesAprobaste 😥 : ${notaFinal}`;
    }
}

//-----------------------------ejercicios Propuestos-----------------------------------

//ejer1
const Number1 = document.getElementById("n1");
const Number2 = document.getElementById("n2");
const calcular4 = document.getElementById("btn-cal");
const respuesta4 = document.getElementById("res1");

calcular4.onclick = function() {
    let a = Number1.value;
    let b = Number2.value;
    let sum = parseInt(a)+parseInt(b);
    let mul = parseInt(a*b);
    respuesta4.innerHTML = `la suma es : ${sum} y el producto ${mul}`;
}

//ejer2
const Number3 = document.getElementById("n3");
const calcular5 = document.getElementById("btn-cal2");
const respuesta5 = document.getElementById("res2");

calcular5.onclick = function() {
    let n = Number3.value;
    let porcentaje = parseFloat(n*20)/100;
    respuesta5.innerHTML = `el 20 % de ${n} es ${porcentaje}`;
}
//ejer 3
const Number4 = document.getElementById("n4");
const calcular6 = document.getElementById("btn-cal3");
const respuesta6 = document.getElementById("res3");

calcular6.onclick = function() {
    let a = Number4.value;
    let centimetro = parseInt(a)*100;
    let milimetros = centimetro*10;
    respuesta6.innerHTML = `${a}M en centimetros es : ${centimetro} cm y en milimetros : ${milimetros} mm`;
}
//ejer 4
const Number5 = document.getElementById("n5");
const Number6 = document.getElementById("n6");
const calcular7 = document.getElementById("btn-cal4");
const respuesta7 = document.getElementById("res4");

calcular7.onclick = function() {
    let a = Number5.value;
    let b = Number6.value;
    let area = (parseInt(a)*parseInt(b))/2;

    respuesta7.innerHTML = `el area del triangulo es ${area}`;
}
//ejer 5

const Number7 = document.getElementById("n7");
const calcular8 = document.getElementById("btn-cal5");
const respuesta8 = document.getElementById("res5");

calcular8.onclick = function(){
    let a = Number7.value;
    let comvercion = parseFloat(a)*3.38;
    respuesta8.innerHTML = `s/ ${a} soles en dolares es $ ${comvercion}`;
}

//ejer 6

const Number8 = document.getElementById("n8");
const calcular9 = document.getElementById("btn-cal6");
const respuesta9 = document.getElementById("res6");

calcular9.onclick = function() {
    let a = Number8.value;
    let medida = parseFloat(a)*25.4;

    respuesta9.innerHTML = `${a}pulgadas en milimetros es ${medida} mm`;
}
//ejer7
const Number9 = document.getElementById("n9");
const calcular10 = document.getElementById("btn-cal7");
const respuesta10 = document.getElementById("res7");

calcular10.onclick = function() {
    if(parseInt(Number9.value)>100){
        let n = Number9.value;
        let mod = parseInt(n)%10;
        let c = mod*mod;

        let val = parseInt(n/10);
        let x = val % 10;
        let b = x*x;

        let val2 = parseInt(n/10);
        let y = parseInt(val2/10);
        let a = y*y;

        let res = parseInt(a)+parseInt(b)+parseInt(c);

        respuesta10.innerHTML = `el resultado de suma de cifras elevada al cuadrado es : ${res}`;
    }else{
        respuesta10.innerHTML = "no es un numero de 3 cifras";
    }
}

//ejer8

const Number10 = document.getElementById("n10");
const calcular11 = document.getElementById("btn-cal8");
const respuesta11 =document.getElementById("res8");

calcular11.onclick = function() {
    let n = Number10.value;
    let socio1 = (parseInt(n)*30)/100;
    let socio2 = (parseInt(n)*20)/100;
    let socio3 = (parseInt(n)*50)/100;

    respuesta11.innerHTML = `al socio A s/ ${socio1}, socio B s/ ${socio2}, socio C s/ ${socio3}`;
}
// ejer 9

const Number11 = document.getElementById("n11");
const calcular12 = document.getElementById("btn-cal9");
const respuesta12 = document.getElementById("res9");

calcular12.onclick = function() {
    let a = Number11.value;
    let IGV = (parseInt(a)*19)/100;
    let res = parseFloat(a)+IGV;

    respuesta12.innerHTML = `el IGV es : ${IGV}y  precio Final ${res}`;
}
//ejer 10

const Number12 = document.getElementById("n12");
const Number13 = document.getElementById("n13");
const Number14 = document.getElementById("n14");
const calcular13 = document.getElementById("btn-cal10");
const respuesta13 = document.getElementById("res10");

calcular13.onclick = function() {
    let a = Number12.value;
    let b = Number13.value;
    let c = Number14.value;

    let val1 = parseInt(a)*150;
    let val2 = parseInt(b)*50;
    let val3 = parseInt(c)*80;
    respuesta13.innerHTML = `cant total x entrada General ${val1} , cant total x entrada mayoresEdad ${val2}, cant total x entrada Menores ${val3}`;
}
