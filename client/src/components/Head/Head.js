import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => (
    <header>
        <ul className="nav justify-content-center">
            <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/registration'>Registration</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/info'>Info</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/vote'>Vote</Link></li>
        </ul>
    </header>

)

export default Head