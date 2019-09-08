import $ from 'jquery'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import {faSpinner, faStroopwafel, faSyncAlt} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css' //!This is not necessary anymore because of webpack preprocessor configs
import './header.scss'

library.add(faSpinner, faStroopwafel, faSyncAlt)
dom.watch()

class Header {
    development = 'http://localhost:9000/rocket.html'
    production = 'http://localhost:9090/rocket'

    development1 = 'http://localhost:9000/style-test.html'
    production1 = 'http://localhost:9090/style-test'

    render() {
        const i = document.createElement('i')
        i.classList.add('fas', 'fa-stroopwafel', 'fa-spin')

        const i2 = document.createElement('i')
        i2.classList.add('fas', 'fa-sync-alt', 'fa-spin')
        
        const h1 = document.createElement('h1')
        h1.innerHTML = '<i class="fas fa-spinner fa-spin"></i>These Page has bootstrap buttons and a fontAwesome spinner icon on top'

        const nav = document.createElement('nav')
        nav.classList.add('nav', 'nav-pills', 'flex-column', 'flex-sm-row')

        const a = document.createElement('a')
        a.classList.add('flex-sm-fill', 'text-sm-center', 'nav-link', 'unactive')
        a.innerHTML = 'Rocket'
        a.href = process.env.NODE_ENV === 'production' ? this.production : this.development

        const a2 = document.createElement('a')
        a2.classList.add('flex-sm-fill', 'text-sm-center', 'nav-link', 'unactive')
        a2.innerHTML = 'Styles'
        a2.href = process.env.NODE_ENV === 'production' ? this.production1 : this.development1

        const body = document.querySelector('body')
        body.appendChild(i)
        body.appendChild(i2)
        body.appendChild(h1)
        body.appendChild(nav)
        nav.appendChild(a)
        nav.appendChild(a2)


        // const h1 = $('<h1/>')
        // const body = $('body')
        // h1.text('This is a test header of all pages using JQuery') 
        // body.append(h1)
    }
}

export default Header

{/* <ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul> */}