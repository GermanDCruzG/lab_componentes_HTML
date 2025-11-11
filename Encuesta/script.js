// Ejercicio 1: Encuesta de Intereses
// Crear una encuesta simple que permita registrar votos y mostrar resultados en tiempo real.
// 1. Crea una página HTML con una encuesta que tenga 3 opciones de interés (por ejemplo:
// "Diseño Web", "JavaScript", "Bases de Datos").
// 2. Implementa botones con el evento onclick para registrar los votos de cada opción.
// 3. Muestra los resultados en elementos <span> que se actualicen en tiempo real
// (ejemplo: Votos: <span id="votos-js">0</span>).
// 4. Funcionalidades adicionales:
// •Muestra un alert() con el mensaje "¡Gracias por tu voto!" cada vez que alguien vota.
// •Implementa un console.log() que muestre el total acumulado de votos cada 5 votos
// registrados.

alert("Bienvenido a esta encuesta. Por favor, acepte para comenzar.");

function Like(){
    alert("Gracias por tu like!");
    let contadorLikes = document.getElementById("Contador-likes");
    let likes = parseInt(contadorLikes.innerText);
    likes += 1;
    contadorLikes.innerText = likes;
    console.log(`Nuevo like! Total: ${likes}`);
}

function Like1(){
    alert("Gracias por tu like!");
    let contadorLikes1 = document.getElementById("Contador-likes1");
    let likes1 = parseInt(contadorLikes1.innerText);
    likes1 += 1;
    contadorLikes1.innerText = likes1;
    console.log(`Nuevo like! Total: ${likes1}`);
}

function Like2(){
    alert("Gracias por tu like!");
    let contadorLikes2 = document.getElementById("Contador-likes2");
    let likes2 = parseInt(contadorLikes2.innerText);
    likes2 += 1;
    contadorLikes2.innerText = likes2;
    console.log(`Nuevo like! Total: ${likes2}`);
}

