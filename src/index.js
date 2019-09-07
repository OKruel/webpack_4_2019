import HelloWorldBtn from './components/hello-world-btn/hello-world-btn'
import addImage from './add-image'
import Heading from './components/heading/heading'


const heading = new Heading()
heading.render()
const helloWorldBtn = new HelloWorldBtn();
helloWorldBtn.render()
addImage()

if(process.env.NODE_ENV === 'production') {
    console.log('production mode')
} else if (process.env.NODE_ENV === 'development') {
    console.log('development mode')
}