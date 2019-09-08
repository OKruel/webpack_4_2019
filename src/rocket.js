import Heading from './components/heading/heading'
import Rocket from './components/rocket-image/rocket-image'
import _ from 'lodash'

const heading = new Heading()
heading.render(_.upperFirst('rocket Image'))
// heading.render('rocket Image')

const rocket = new Rocket()
rocket.render()

