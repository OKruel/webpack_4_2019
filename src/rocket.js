import Heading from './components/heading/heading'
import Rocket from './components/rocket-image/rocket-image'
import Header from './components/header/header'

import './rocket.scss'

import _ from 'lodash'

const header = new Header()
header.render()

const heading = new Heading()
heading.render(_.upperFirst('rocket Image'))

const rocket = new Rocket()
rocket.render()

