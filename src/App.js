import React, { Component} from 'react'
import {Router, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import Vote from './containers/Vote'
import Info from './containers/Info'
import Head from './components/Head/Head'


const history = createBrowserHistory()

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const Registration = () => (
    <div>
        <h2>Registration</h2>
    </div>
)

export default class App extends Component {
    render(){
        return(
            <Router history={history}>
                <div className="wrapper">
                    <Head />
                    <div className="container">
                        <Route exact path="/" component={Home}/>
                        <Route path="/registration" component={Registration}/>
                        <Route path="/info" component={Info}/>
                        <Route path="/vote" component={Vote}/>
                    </div>
                    <div className="footer">
                        <span>Develop by eagleweb 2018</span>
                    </div>
                </div>
            </Router>
        )
    }
}