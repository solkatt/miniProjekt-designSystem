import React from 'react'
import { Link, Router, Switch, Route } from 'react-router-dom';

function Main () {
    return (
        <Link to="/">
        <div>
            <Link to="/products">
            <h1>START KÖP</h1>
            </Link>
        </div>
        </Link>
    )
 }



export default Main