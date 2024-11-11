let ubicacionPrincipal = window.pageYOffset; //""0"" para saber la ubicacion donde estoy 

  AOS.init();


window.addEventListener("scroll", function () { //cada vez que haga scroll
    let desplazamientoActual = window.pageYOffset; //""100""
    if (ubicacionPrincipal >= desplazamientoActual) { //""0 > 100""
        document.getElementsByTagName("nav")[0].style.top = "0px" //se toma la informacion de algo deacuerdo a su nombre de estiqueta
    } else { //sino esta en la parte de ubicacion principal
        document.getElementsByTagName("nav")[0].style.top = "-100px" //si "nav" baja
    }
    ubicacionPrincipal = desplazamientoActual; //""100""  "nav" aparecera en la ubicacion actual

})

//Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0]; //0 es el primer elemento
let semaforo = true; 

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function () { // al dar click en el menu hambuerguesa que automaticamente pase una funcion
   if(semaforo){ //si semaforo es verdadero, que cambie a color blanco
    document.querySelectorAll(".hamburguer")[0].style.color = "white";
    semaforo = false;
   }
   else{ // si es falso cambie a negro
    document.querySelectorAll(".hamburguer")[0].style.color = "black";
    semaforo = true;
   }
   
   
    enlacesHeader.classList.toggle("menudos")

})