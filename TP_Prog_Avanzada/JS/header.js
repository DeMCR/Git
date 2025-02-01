

const propiedadNav = {

    color: "black",
     fontStyle:"bold",
    textShadow: "0px 2px 0.5px white, 0px 3px 2px grey",
    colorInicial:"white",
    ShadowInicial:"0px 2px 0.5px grey, 0px 3px 2px black",
    

}
console.dir(document.querySelectorAll(".contenedor nav .holder ul li a")[0])
console.dir(document.querySelectorAll(".contenedor nav .holder ul li a")[1]);






 const AnimacionHeader = () => {
 console.log("evento scroll")

    console.dir(window.scrollY)
    if(window.innerHeight * 0.5 < window.scrollY){
        
        document.querySelector(".contenedor nav .holder").classList.add("bc");
        document.querySelector("header h1").classList.remove("h1");
        document.querySelectorAll(".contenedor nav .holder ul li a")[0].style.color=propiedadNav.color;
        document.querySelectorAll(".contenedor nav .holder ul li a")[1].style.color=propiedadNav.color;
console.log("eliminar")

 }else {
     document.querySelectorAll(".contenedor nav .holder ul li a")[0].style=document.querySelector(".contenedor nav .holder ul li a");
     document.querySelectorAll(".contenedor nav .holder ul li a")[1].style=document.querySelector(".contenedor nav .holder ul li a");
   
    document.querySelector(".contenedor nav .holder").classList.remove("bc");
     
    document.querySelector("header h1").className=("header h1");
  }   
 }




window.addEventListener("scroll", AnimacionHeader);