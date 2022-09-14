
let cantidadContadorCarrito =0;
const mostrarProductos = (productos) => {
  const contenedorProductos = document.getElementById("producto-contenedor")
//card
  productos.forEach(producto => {
      const div = document.createElement("div")
      div.classList.add("col-md-4")
      div.innerHTML += `<div class="card">
                          <div class="bg-dark ">
                          <img src="${producto.img}" class="card-img-top" alt="...">
                          <div class="card-body">
                              <h2 class="card-title text-white">${producto.nombre}</h2>
                              <div>
                              <p class="card-title text-white">Descripción:  ${producto.desc}</p>
                              <p class="card-text text-white">Precio:$ ${producto.precio}</p>
                              </div>
                              <a href="#" class="btn btn-outline-warning btnColgante"id=boton${producto.id}><img src="assets/img/carrito.png" alt="" class="carrito"/>Comprar</a>

                          </div>
                          </div>
                      </div>`

      contenedorProductos.appendChild(div)

      const boton = document.getElementById( `boton${producto.id}` )

      boton.addEventListener('click', ()=> {
          carritoIndex(producto.id)
          alert(`Se agrego el producto ${producto.nombre}`)
      })
     

  })
}


mostrarProductos(productos)
