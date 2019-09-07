import Rocket from './images/foguete 2.png'

function addImage(){
    const img = document.createElement('img');
    img.alt = 'Rocket';
    img.width = '300';
    img.src = Rocket;

    const body = document.querySelector('body');
    body.appendChild(img)
}

export default addImage