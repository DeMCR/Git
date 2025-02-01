// traer el nodo video

let video = document.querySelector('video');

console.dir(video)


//duración
const transformarTiempo = (tiempo) => {


    let minutos = tiempo / 60;
    let segundos = (tiempo % 60).toFixed(0)


    return parseInt(minutos) + ":" + segundos

}

const mostrar = () => {
    let spanDuracion= document.querySelector('#duracion')



    let estruturaTiempo = transformarTiempo(video.duration)

    spanDuracion.innerText = estruturaTiempo
}

// Play y Pausa

let intervalo; 

const reproducir = () => {
    video.play();
   intervalo= setInterval(()=>{ let SpanCuentaTiempo=document.querySelector('#cuentatiempo')
    SpanCuentaTiempo.innerText=transformarTiempo(video.currentTime)
    console.log('ejecutando')
    },1000);

    document.querySelector("#DurVid").style.opacity="0";
}

const pausar = () => {
    video.pause()
    console.dir(video.currentTime)
    clearInterval(intervalo)
};
