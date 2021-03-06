import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React, { Component } from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default class App extends Component {

    render() {
        return (
            <div className="container">
                <Menu />
                <Routes />
            </div>
        )
    }
}