const listado = []; //Almacenar listado de vehiculos

//Clase vehiculo con constructor y atributos
class vehiculo
{
    constructor(marca,modelo,annio)
    {
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
    }

}

//Función para crear los vehiculos en la cantidad solicitada.

function creacion(repeticiones) 
{
    for(let x = 0; x < repeticiones; x++)
    {
        let marca = prompt("Ingrese la marca del vehiculo: ")
        let modelo = prompt("Ingrese el modelo del vehiculo: ")
        let annio = prompt("Ingrese el annio del vehiculo: ")
        const carro = new vehiculo(marca,modelo,annio); // creación del objeto con los atributos
        listado.push(carro); // agregar el vehiculo al arreglo de vehiculos.

    }
    
}
function imprimir(arreglo) 
{
    for(let i = 0; i < arreglo.length; i++)
    {
        console.log(arreglo[i]);
    }
    
}


creacion(10);
console.log(listado);