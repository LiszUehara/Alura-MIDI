function tocaSom(seletorAudio){

    const elemento = document.querySelector(seletorAudio);


    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    } else {
        alert('Elemento não encontrado');
    }


const listaDeTeclas = document.querySelectorAll('.tecla');
 

for(let cont = 0; cont < listaDeTeclas.length; cont++){
    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    
    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        if(evento.code === 'space' || evento.code ==='enter' ){
            tecla.classList.add('ativa');
        }
    }
