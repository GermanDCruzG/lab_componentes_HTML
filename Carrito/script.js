// Ejercicio 2: Carrito de Compras
// Implementar un sistema simple de carrito de compras que actualice cantidades y precios.
// 1. Crea 3 productos con nombre y precio (usa elementos <span> para mostrar los precios).
// 2. Para cada producto, agrega un botón "Agregar al carrito" con evento onclick que:
// •Actualice un contador de items totales (<span id="total-items">0</span>)
// •Sume el precio al total acumulado (<span id="total-precio">0</span>)
// 3. Funcionalidades adicionales:
// •Muestra un alert() con el mensaje "¡Envío gratis aplicado!" cuando el total supere los $50.
// •Implementa un console.log() que liste los productos agregados al carrito.
// 4. Agrega un botón "Vaciar carrito" que:
// •Restablezca todos los contadores a 0
// •Muestre un alert() con el mensaje "Carrito vaciado"

alert("Bienvenido al E-commerce de Generation. Por favor, acepta para comenzar.");
const curso1 = 25;
const curso2 = 20;
const curso3 = 15;
let total = 0;

function Agregar(id, precio) {
  alert("Se ha agregado tu producto al carrito!");
  let contadorA = document.getElementById(id);
  let carrito = parseInt(contadorA.innerText);
  carrito++;
  contadorA.innerText = carrito;
  total += precio;
  document.getElementById("total").innerText = total;
  if (total > 50){  
    alert(`¡Envío gratis aplicado! $${total}`);
     }  
     console.log(`Total actual: $${total}`);
}

function Quitar(id, precio) {
  alert("Se ha quitado tu producto del carrito!");
  let contadorQ = document.getElementById(id);
  let carrito = parseInt(contadorQ.innerText);
  if (carrito > 0){  
    carrito--;
    contadorQ.innerText = carrito;
    total -= precio;
    document.getElementById("total").innerText = total;
    console.log(`Total actual: $${total}`);
    if (total === 0) {  
    alert("Tu carrito ha sido vaciado.");
  } 
} 
}
function Comprar() {
    if (total === 0){  
    alert(`Tu carrito está vacío.`);
    } else { 
        alert(`Compra confirmada. Total: $${total}`);
        total = 0;
        document.getElementById("contador").innerText = 0;
        document.getElementById("total").innerText = total;
    }  
}
function Vaciar() {
  document.getElementById("Contador1").innerText = 0;
  document.getElementById("Contador2").innerText = 0;
  document.getElementById("Contador3").innerText = 0;
  total = 0;
  document.getElementById("total").innerText = total;
  alert("Se ha vaciado tu carrito!");   
}

  