import HelloWorldBtn from './components/style-test-btn/style-test-btn'
import Heading from './components/heading/heading'
import './style-test.scss'
import _ from 'lodash'
import React from 'react'


const heading = new Heading()
heading.render(_.upperFirst('style Test'))
const helloWorldBtn = new HelloWorldBtn();
helloWorldBtn.render()

if(process.env.NODE_ENV === 'production') {
    console.log('production mode')
} else if (process.env.NODE_ENV === 'development') {
    console.log('development mode')
}
