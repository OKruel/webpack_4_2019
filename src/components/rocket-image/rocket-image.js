import Rocket from './foguete 2.png'
import './rocket-image.scss'

class RocketImage {
    render() {
        const div = document.createElement('div')
        const img = document.createElement('img');
        img.alt = 'Rocket';
        img.src = Rocket;
        img.classList.add('rocket-image')

        const body = document.querySelector('body');
        body.appendChild(div)
        div.appendChild(img)
    }
}

export default RocketImage