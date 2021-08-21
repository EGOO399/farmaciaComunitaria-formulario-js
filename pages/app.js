const items = document.getElementById('items')
const templatecard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
let carrito = {}


document.addEventListener('DOMContentLoaded', () => {
    fetchData ()
})

items.addEventListener('click', e =>{
    addCarrito (e)
}) 

const fetchData = async () => {
    try{
        const res = await fetch('api.json')
        const data = await res.json()
        //console.log(data)
         pintarCards(data)
    }catch (error){
        console.log(error)
    }
}

const pintarCards = data => {
    data.forEach(producto => {
        console.log(data)

        templatecard.querySelector('h5').textContent = producto.title
        templatecard.querySelector('p').textContent = producto.precio
        templatecard.querySelector('img').setAttribute("src", producto.imagen)
        templatecard.querySelector('button').dataset.id = producto.id

        const clone = templatecard.cloneNode(true)
        fragment.appendChild(clone)

        
    });
    items.appendChild(fragment)

}
const addCarrito = e =>{
    //console.log(e.target)
    //console.log(e.target.classList.contains('btn-dark'))
    if (e.target.classList.contains('btn-dark')){
        setCarrito(e.target.parentElement) 
    }
    e.stopPropagation()
}

const setCarrito = Object =>{
    //console.log(Object)
    const producto = {
        id: Object.querySelector('.btn-dark').dataset.id,
        title: Object.querySelector('h5').textContent,
        precio: Object.querySelector('p').textContent,
        cantidad: 1
    }
    // para ir sumando los productos a nuestro carrito 
    //cundo sean de los mismos
    if (carrito.hasOwnProparty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1
    }
    carrito[producto.id] = {...producto}


    console.log(carrito)

}


