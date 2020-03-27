import React from 'react'
import { Link, Router, Switch, Route } from 'react-router-dom';

import VerticalLinearStepper from "../Stepper/Stepper"

function Checkout () {
    return (
        <div>
            <h1>Checkout</h1>
            <VerticalLinearStepper></VerticalLinearStepper>
        </div>
    )
 }

export default Checkout