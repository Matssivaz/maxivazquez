const MARCA = "AldiSosaNatura";


console.log(MARCA);

alert(MARCA);

let ingresarNombre = prompt("¿Cual es tu nombre?")

function saludoInicial(){
    
return alert ("Bienvenido " + ingresarNombre);
}
saludoInicial()

const shopContent = document.getElementById("shopContent");

const productos  = [
    {
    id: 1,
    nombre: "Perfume",
    precio: 20000,
    img:"https://i.pinimg.com/564x/2c/68/bf/2c68bfb9638c2e9e94cf092e5736d4c5.jpg",

},
{
    id: 2,
    nombre: "Crema",
    precio: 5000,
    img:"https://i.pinimg.com/564x/ba/57/06/ba5706b016254a126a235ccbd2d7e0be.jpg",

},
{
    id: 3,
    nombre: "Jabones",
    precio: 4500,
    img:"https://i.pinimg.com/564x/da/05/0f/da050fcf79b954add779a26e7ef9f8ef.jpg",

},
{
    id: 4,
    nombre: "Labial",
    precio: 8000,
    img:"https://i.pinimg.com/564x/38/ce/f3/38cef379c16e595c14bebd79bddbe4f4.jpg",

},

]
let carrito = [];
productos.forEach((productos)=>{
    let content = document.createElement("div");
    content.innerHTML =`
    <img src="${productos.img}">
    <h3>${productos.nombre}</h3>
    <p>${productos.precio}$</p>
    `;
    shopContent.appendChild(content);

    let comprar = document.createElement("button");
    comprar.innerText= "comprar";

    content.append(comprar);
})
;
function carritoCompra() {
    let carrito = {};
    productos.forEach((product)=>{
        let content = document.createElement("div");
        content.innerHTML =`
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio}$</p>
        `;
        shopContent.appendChild(content);
    
        let comprar = document.createElement("button");
        comprar.innerText= "comprar";
    
        content.append(comprar);
    })
    ;
    let total = 0;

    while (true) {
        const seleccion = prompt(`
  Productos disponibles:
  1. ${productos[0].nombre}: $${productos[0].precio.toFixed(2)}
  2. ${productos[1].nombre}: $${productos[1].precio.toFixed(2)}
  3. ${productos[2].nombre}: $${productos[2].precio.toFixed(2)}
  4. ${productos[3].nombre}: $${productos[3].precio.toFixed(2)}
  
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

