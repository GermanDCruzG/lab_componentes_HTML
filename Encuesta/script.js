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

alert("Bienvenido a esta encuesta. Por favor, acepta para comenzar.");

function Like(id) {
  alert("Gracias por tu like!");
  let contador = document.getElementById(id);
  let likes = parseInt(contador.innerText);
  likes++;
  contador.innerText = likes;
  console.log(`Nuevo like! Total: ${likes}`);
  if (likes % 5 === 0){  
    alert(`Total de likes acumulado: ${likes}`);
    console.log(`Total de likes acumulado: ${likes}`);
  } else { 
  }  
}
