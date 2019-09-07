import HelloWorldBtn from './components/hello-world-btn/hello-world-btn'
import addImage from './add-image'
import Heading from './components/heading/heading'


const heading = new Heading()
heading.render()
const helloWorldBtn = new HelloWorldBtn();
helloWorldBtn.render()
addImage()