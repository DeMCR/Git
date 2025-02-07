/*invocar zona origen*/

let imagenes = document.querySelectorAll(".imagen");

/* evento dragstart */
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('dragstart', copiar)
    /*=>{
        console.log('evento dragstart');
    }); */


    function copiar(evento) {
        evento.dataTransfer.setData('text', evento.target.src);
    };
}


/* evento dragend */
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('dragend', soltado);


    function soltado(evento) {
         let imagen=evento.target;
          /* imagen.style.visibility="hidden";


        console.log('finalizado')*/

        imagen.style.display="none";
    };

}

/* evento drag */
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('drag', (evento) => {
        console.log('evento drag')
    });
}

/*invocar zona destino*/
let zona = document.querySelectorAll(".zona");

/* evento dragenter */
for (let i = 0; i < zona.length; i++) {
    zona[i].addEventListener('dragenter', (evento) => {
        console.log('evento dragenter')
    });
}

/* evento dragleave */
for (let i = 0; i < zona.length; i++) {
    zona[i].addEventListener('dragleave', (evento) => {
        console.log('evento dragleave')
    });
}

/* evento dragover */

for (let i = 0; i < zona.length; i++) {
    zona[i].addEventListener('dragover', prevenirDefault)

    function prevenirDefault(evento) {
        evento.preventDefault()
    }

};

/*evento drop */
for (let i = 0; i < zona.length; i++) {
    zona[i].addEventListener('drop', soltarElemento)



    function soltarElemento(evento) {

        let dataImagen = evento.dataTransfer.getData('text');

        zona[i].innerHTML = `<img id="imagen" src='${dataImagen}'/>`

        elementoSoltado = true;

}

}

/* botón reinciar */

const reiniciar = () =>  {
    window.location.reload();
}

