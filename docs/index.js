let previousClassX = '';
let previousClassY = '';
let previousDistance = '';
const directionsX = ['top','bottom']
const directionsY = ['left','right']
const distances = ['0','1','2','3','10','16','20']

function aceptar(){
    alert("Sabia que ibas a aceptar jijiji")
}

function mouseEncima(){
    const botonNo = document.getElementById("no");

    if(!botonNo.classList.contains('absolute')){
        botonNo.classList.add('absolute');
        botonNo.classList.add('m-2');
    } 
    
    if(previousClassX || previousClassY){
        botonNo.classList.remove(`${previousClassX}-0`)
        botonNo.classList.remove(`${previousClassY}-0`)
        botonNo.classList.remove(`m-${previousDistance}`)
    }

    let directionX = '';
    let directionY = '';
    let distance = '';
    
    do{
        directionX = directionsX[getRandomInt(0,directionsX.length)]
        directionY = directionsY[getRandomInt(0,directionsY.length)]
        distance = distances[getRandomInt(0,distances.length)]

    } while(previousClassX == directionX 
        && previousClassY == directionY);

    botonNo.classList.add(`${directionX}-0`)
    botonNo.classList.add(`${directionY}-0`)
    botonNo.classList.add(`m-${distance}`)

    previousClassX = directionX
    previousClassY =  directionY

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function declaracion(){
    const $declaracion = document.getElementById('declaracion')
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    $declaracion.innerHTML = `${(urlParams.get('nombre') ? urlParams.get('nombre')+', ' : '')}¿¿Quieres ser mi novia??`

}

declaracion()