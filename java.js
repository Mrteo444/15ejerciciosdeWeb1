//1//


function areaCuadrado(lado) {
    return lado * lado;
}


function areaCirculo(radio) {
    return Math.PI * radio ** 2;
}


function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}


console.log("Área del cuadrado con lado de 5: " + areaCuadrado(5));
console.log("Área del círculo con radio de 3: " + areaCirculo(3).toFixed(2)); /
console.log("Área del triángulo con base de 4 y altura de 6: " + areaTriangulo(4, 6));

////2////

function volumenCubo(lado) {
    return lado ** 3;
}


function volumenCono(radio, altura) {
    return (1 / 3) * Math.PI * radio ** 2 * altura;
}


function volumenPiramide(base, altura) {
    return (1 / 3) * base ** 2 * altura;
}


console.log("Volumen del cubo con lado de 5: " + volumenCubo(5)); 
console.log("Volumen del cono con radio de 3 y altura de 4: " + volumenCono(3, 4).toFixed(2));
console.log("Volumen de la pirámide con base de 4 y altura de 6: " + volumenPiramide(4, 6)); 



///3////
const convertir = (celcius)=>{
    return((9/5)*celcius+32);
} 

console.log("la temperatuea es ",convertir(35))

const convertirt2=()=>{
    let celcius=document.getElementById("celcius").value
    alert(((9/5)*celcius+32))
}

////4/////
function sumaElementos(arreglo) {
    let suma = 0;
   
    for (let elemento of arreglo) {
        suma += elemento;
    }
    return suma;
}


const arreglo = [1, 2, 3, 4, 5];
console.log("La suma de los elementos del arreglo es:", sumaElementos(arreglo)); 


////////////6////////////////////

const mayor (n1,n2,n3){
    
    if(n1>n2>n3){

        console.log("n1")
        if(n2>n3){
            console.log("n2")
        }
    }

    

}

let n1=5
let n2=12
let n3=1

console.log

////////////7////////////

function mostrarImpares(inicio, fin) {
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}


mostrarImpares(1, 10); 

////////////8////////////


function contarVocales(str) {
   
    str = str.toLowerCase();
    // Definimos las vocales
    const vowels = "aeiou";
    
    let count = 0;
    
    for (let char of str) {
      
        if (vowels.includes(char)) {
            count++;
        }
    }
   
    return count;
}


console.log(contarVocales("Hola mundo")); 

//////////9////////////
function calculadora(num1, num2, operacion) {

    switch (operacion) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
           
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: división por cero";
            }
        default:
            return "Operación no válida";
    }
}


console.log(calculadora(5, 3, "+")); 
console.log(calculadora(10, 2, "/")); 
console.log(calculadora(5, 0, "/")); 
console.log(calculadora(4, 2, "%")); 

/////10//////////


const producto = {
    nombre: "Camisa",
    precio: 25,
    cantidad: 2
};


function imprimirProducto(producto) {
   
    const total = producto.precio * producto.cantidad;
  
    console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}, Total: ${total}`);
}


imprimirProducto(producto);


///11///


const alumno = {
    nombre: "Juan",
    edad: 20,
    calificaciones: [8, 7, 9, 10]
};


function calcularPromedio(calificaciones) {
    let sum = 0;
    for (let calificacion of calificaciones) {
        sum += calificacion;
    }
    return sum / calificaciones.length;
}


const promedio = calcularPromedio(alumno.calificaciones);
console.log(`El promedio de las calificaciones de ${alumno.nombre} es: ${promedio}`);

////12/


const agenda = {
    contactos: [
        { nombre: "Juan", telefono: "123456789", direccion: "Calle 123" },
        { nombre: "María", telefono: "987654321", direccion: "Avenida XYZ" },
        { nombre: "Pedro", telefono: "456789123", direccion: "Calle ABC" }
    ]
};


function mostrarContactos(agenda) {
    agenda.contactos.forEach(contacto => {
        console.log(`Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}`);
    });
}


mostrarContactos(agenda);

///13//


const libro1 = {
    titulo: "El señor de los anillos",
    autor: "J.R.R. Tolkien",
    añoPublicacion: 1954
};

const libro2 = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    añoPublicacion: 1967
};


function mostrarLibros(libros) {
    libros.forEach(libro => {
        console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
    });
}


const arrayLibros = [libro1, libro2];


mostrarLibros(arrayLibros);

////14/////

const cuentas = [
    { numero: 123456, saldo: 1000 },
    { numero: 789012, saldo: 2000 },
    { numero: 345678, saldo: 1500 }
];


function calcularSaldoTotal(cuentas) {
    let saldoTotal = 0;
    cuentas.forEach(cuenta => {
        saldoTotal += cuenta.saldo;
    });
    return saldoTotal;
}


const saldoTotal = calcularSaldoTotal(cuentas);
console.log(`El saldo total de todas las cuentas es: ${saldoTotal}`);
