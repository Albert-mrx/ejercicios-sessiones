//asincrono
//ejer1
const name = document.getElementById("name");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const calcular1 = document.getElementById("cal1");
const result1 = document.getElementById("res1");

calcular1.onclick = function() {
    let nombre = name.value;
    let a = num1.value;
    let b = num2.value;
    let sueldobase = parseInt(a);
    let hijos = parseInt(b);
    let bono = (parseInt(a)*7)/100;
    let sueldoFinal = sueldobase+bono;

    if(parseInt(b.value)==0 || parseInt(b.value)==null){
        result1.innerHTML = `nombre : ${nombre} su sueldo es s/ ${sueldobase}`;
    }else{
        result1.innerHTML = `nombre ${nombre} su sueldo Final es : s/ ${sueldoFinal} incluye bono de s/ ${bono}`
    }
}
//ejer2
const num3 = document.getElementById("num3");
const calcular2 = document.getElementById("cal2");
const result2 = document.getElementById("res2");

calcular2.onclick = function() {
    let a = num3.value;
    let porcentaje = (parseInt(a)*18)/100;
    if(parseInt(num3.value) >500){
        result2.innerHTML = `el 18% de ${a} es ${porcentaje}`;
    }else{
        result2.innerHTML = "el numero no es mayor a 500";
    }
}
//ejer3

const num4 = document.getElementById("num4");
const calcular3 = document.getElementById("cal3");
const result3 = document.getElementById("res3");

calcular3.onclick = function() {
    let a = parseInt(num4.value);
    let acumulador=1;
    for(i = 1; i<=a;i++){
        acumulador *=i;
    }
    result3.innerHTML = `el factorial de ! ${a} es ${acumulador}`
}
//----------------------Reto------------------------------------------
//ejer1
const num5 = document.getElementById("num5");
const calcular4 = document.getElementById("cal4");
const result4 =document.getElementById("res4");

calcular4.onclick = function() {
    let a = num5.value;
    let descuento = (parseInt(a)*12)/100;
    let total = parseInt(a)-descuento;
    if(parseInt(a)>150){
        result4.innerHTML = `to tal a pagar s/ ${total} valor descuento s/ ${descuento}`;
    }else{
        result4.innerHTML = `total a pagar ${a}`;
    }
}
//ejer2
const names = document.getElementById("name2");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const calular5 = document.getElementById("cal5");
const result5 = document.getElementById("res5");

calular5.onclick = function(){
    let name = names.value;
    let a = parseInt(num6.value);
    let b = parseInt(num7.value);
    let c = parseInt(num8.value);
    let pesoExamen = b*2;
    let promedioFinal = (a+pesoExamen+c)/3;
    if(promedioFinal>13){
        result5.innerHTML = `${name} estas aprobado ✅`;
    }else{
        result5.innerHTML = `${name} estas desAprobado ❌`;
    }
}