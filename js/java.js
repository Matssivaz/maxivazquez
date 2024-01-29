const MARCA = "AldiSosaNatura";


console.log(MARCA);

alert(MARCA);

let ingresarNombre = prompt("¿Cual es tu nombre?")

function saludoInicial(){
    
return alert ("Bienvenido " + ingresarNombre);
}
saludoInicial()

const productos = [
    { nombre: 'Perfume', precio: 5000 },
    { nombre: 'Crema', precio: 3000 },
    { nombre: 'Maquillaje', precio: 3500 }
];
function carritoCompra() {
    let carrito = {};
    let total = 0;

    while (true) {
        const seleccion = prompt(`
  Productos disponibles:
  1. ${productos[0].nombre}: $${productos[0].precio.toFixed(2)}
  2. ${productos[1].nombre}: $${productos[1].precio.toFixed(2)}
  3. ${productos[2].nombre}: $${productos[2].precio.toFixed(2)}
  
  Ingrese el número del producto que desea comprar (o escriba "fin" para salir):`);

        if (seleccion.toLowerCase() === 'fin') {
            break;
        }

        const seleccionIndex = parseInt(seleccion) - 1;

        if (!isNaN(seleccionIndex) && seleccionIndex >= 0 && seleccionIndex < productos.length) {
            const cantidad = parseInt(prompt('Ingrese la cantidad de unidades:'));

            if (cantidad > 0) {
                const productoSeleccionado = productos[seleccionIndex].nombre;
                carrito[productoSeleccionado] = cantidad;
                total += productos[seleccionIndex].precio * cantidad;

                if (cantidad < 3) {
                    const respuestaDescuento = prompt(`¡Comprando 3 o más unidades de ${productoSeleccionado} obtiene un descuento del 20%! ¿Desea agregar más cantidad? (Sí/No):`);
                    if (respuestaDescuento.toLowerCase() === 'sí' || respuestaDescuento.toLowerCase() === 'si') {
                        const nuevaCantidad = parseInt(prompt(`Ingrese una cantidad adicional de ${productoSeleccionado}:`));
                        if (!isNaN(nuevaCantidad) && nuevaCantidad > 0) {
                            carrito[productoSeleccionado] += nuevaCantidad;
                            total += productos[seleccionIndex].precio * nuevaCantidad;
                        } else {
                            alert('Cantidad no válida. No se ha agregado más cantidad.');
                        }
                    }
                }
            } else {
                alert('La cantidad ingresada no es válida. Inténtelo de nuevo.');
            }
        } else {
            alert('Número de producto no válido. Inténtelo de nuevo.');
        }
    }

    console.log('Resumen de la compra:');
    for (const producto in carrito) {
        console.log(`${producto}: ${carrito[producto]} unidades`);
    }

    if (total > 0) {
        let descuentoAplicado = total;
        if (Object.values(carrito).reduce((acc, curr) => acc + curr, 0) >= 3) {
            descuentoAplicado *= 0.8;
            return('Se aplica un descuento del 20% debido a la compra de 3 o más unidades.');
        } else {
            console.log('No aplica descuento.');
        }

        console.log(`Total a pagar: $${descuentoAplicado.toFixed(2)}`);
    } else {
        return alert ("No se ha realizado ninguna compra");
    }
}

carritoCompra();

