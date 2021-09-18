function annioBisiesto()
{
    var annio= parseInt(prompt("Ingrese un año"))
    console.log("El año es: "+ annio)
    return annio %100===0? annio %400 === 0 : annio % 4=== 0;
}

console.log(`¿El año es bisiesto?: ${annioBisiesto()}`);