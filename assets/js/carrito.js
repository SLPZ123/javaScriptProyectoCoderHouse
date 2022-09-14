const carritoDeCompras = []

const carritoIndex = (productoId)=>{

    const contenedorCarrito = document.getElementById("carrito-contenedor");
    let contadorCarrito = document.getElementById("contador-carrito");

    const renderProductosCarrito = ()=> {
        let producto  = productos.find( producto => producto.id == productoId )
        carritoDeCompras.push(producto)
        console.log(carritoDeCompras);

        producto.cantidad = 1
        cantidadContadorCarrito += 1;
        contadorCarrito.innerHTML = cantidadContadorCarrito;

        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")

        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button id="eliminar${producto.id}" class="boton-eliminar" ><img src="./assets/img/basura.png" class="basura"/></button>`;
        contenedorCarrito.appendChild(div);
//borrar elemento por boton basura
        const borrarElemento = document.getElementById("eliminar"+producto.id);
        borrarElemento.addEventListener('click', ()=>{
            cantidadContadorCarrito -= 1;
            contadorCarrito.innerHTML = cantidadContadorCarrito;
            let myself = document.getElementById("eliminar"+producto.id);
            let parent = myself.parentElement;
            parent.remove();
        })


    }

    renderProductosCarrito()
}