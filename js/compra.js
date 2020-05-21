const compra = new Carrito();
const  listaCompra = document.querySelector('#lista-compra tbody');
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');

cargarEventos();

function cargarEventos(){

    document.addEventListener('DOMContentLoaded',compra.leerLocalStorageCompra());

    carrito.addEventListener('click', (e)=>{compra.eliminarProducto(e)});


    compra.calcularTotal();

    procesarCompraBtn.addEventListener('click', procesarCompra);

}

function procesarCompra(e){
    e.preventDefault();
    if(compra.obtenerProductosLocalStorage().length === 0){            
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'No hay productos, seleccione alguno',
            showConfirmButton: false,
            timer: 2000
        }).then(function(){
            window.location="index.html"; 

        })       
    }
    else if (cliente.value === '' || correo.value === ''){
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Ingresen todos los campos requeridos',
            showConfirmButton: false,
            timer: 2000
        })      
    }

    else   {
            const cargandoGif = document.querySelector('#cargando');
            cargandoGif.style.display = 'block';
            //Gif que envia email
            const enviado = document.createElement('img');
            enviado.src = 'img/mail.gif';  
            enviado.style.display = 'block';
            enviado.width = "150";
  
            //Ocultar sppiner y mstrar gif enviado
            setTimeout(function () {
                 cargandoGif.style.display = 'none';
                 document.querySelector('#loaders').appendChild(enviado);
  
                 setTimeout(() => {
                      enviado.remove();    
                      compra.vaciarLocalStorage();
                      window.location = "index.html";
                 }, 2000);
            }, 3000);
               
       }
    }
 


