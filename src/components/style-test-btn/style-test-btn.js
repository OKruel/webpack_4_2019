import './style-test-btn.scss'

class HelloWorldBtn {
    buttonCssClass = 'style-test-text'
    render() {
        const body = document.querySelector('body')
        const button = document.createElement('button')
        button.innerHTML = 'Testing WebPack Styles Loader '
        button.classList.add('style-test-btn')
        button.onclick = () => {
            const p = document.createElement('p');
            p.innerHTML = 'I am with SaSS Styles';
            p.classList.add(this.buttonCssClass)
            body.appendChild(p)
        }
        body.appendChild(button)
    }
}

export default HelloWorldBtn