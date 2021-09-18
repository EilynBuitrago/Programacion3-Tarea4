function numMayor()

{
var num1= parseInt(prompt("Ingrese un numero"))
console.log("El numero es: "+ num1)
var num2 = parseInt(prompt("Ingrese otro numero"))
console.log("El numero es: "+ num2)

if (num1 > num2 || num1== num2)
{
   return num1;
   alert("num1")
 
}
else 
{
    return num2;
    alert("num2")
}
}

alert("El numero mayor es " + numMayor())
