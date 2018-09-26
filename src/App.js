import React, { Component} from 'react'
import {Router, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import Vote from './containers/Vote'
import Info from './components/Info'


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
                <div className="container">
                        <ul className="nav justify-content-center">
                            <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to='/registration'>Registration</Link></li>
                            <li className="nav-item"><Link className="nav-link" to='/info'>Info</Link></li>
                            <li className="nav-item"><Link className="nav-link" to='/vote'>Vote</Link></li>
                        </ul>


                    <Route exact path="/" component={Home}/>
                    <Route path="/registration" component={Registration}/>
                    <Route path="/info" component={Info}/>
                    <Route path="/vote" component={Vote}/>
                </div>
            </Router>
        )
    }
}