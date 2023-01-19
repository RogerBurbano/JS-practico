// 1. Vamos a seleccionar la clase del mail y creamos la constante

const menuEmail = document.querySelector('.navbar-email')

//  3. seleccionamos la clase del contenedor al que vamos a ocultar o a mostrar, en este caso es la linea 55 del html "desktop-menu" 

const desktopMenu = document.querySelector(".desktop-menu");





// 2. Ahora vamos a utilizar el metodo o propiedad addEventListener para llamarlo,"despues creamos la funcion y despues  de click colocamos el nombre de la misma "

menuEmail.addEventListener('click',toggleDesktopMenu)

function toggleDesktopMenu(){

      desktopMenu.classList.toggle('inactive') //inactive = class que le creamos y con la misma le hicimos un display none en el css "linea 17" para poder mosatrarla y quitarla y esa misma la llamamos en la funcion 
}