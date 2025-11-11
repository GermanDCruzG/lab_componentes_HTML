Ejercicio 2: Carrito de Compras
Implementar un sistema simple de carrito de compras que actualice cantidades y precios.
1. Crea 3 productos con nombre y precio (usa elementos <span> para mostrar los precios).
2. Para cada producto, agrega un botón "Agregar al carrito" con evento onclick que:
•Actualice un contador de items totales (<span id="total-items">0</span>)
•Sume el precio al total acumulado (<span id="total-precio">0</span>)
3. Funcionalidades adicionales:
•Muestra un alert() con el mensaje "¡Envío gratis aplicado!" cuando el total supere los $50.
•Implementa un console.log() que liste los productos agregados al carrito.
4. Agrega un botón "Vaciar carrito" que:
•Restablezca todos los contadores a 0
•Muestre un alert() con el mensaje "Carrito vaciado"

alert("Soy una alerta desde afuera.");
console.log("Prueba del console.log");
function alertFunction(){
    alert("Hola, soy una alerta desde JS dando click");
    console.log("Hola, dieron click y aparecí");
}

document.getElementById("red").style.color = "red";
document.getElementById("azul").style.color = "blue";


function brown(){
    document.getElementById("brown").style.color = "brown";
    alert("Las papas son cafés");
    console.log("Efectivamente, las papas son cafés.");
}