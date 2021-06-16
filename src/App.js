
import { hot } from 'react-hot-loader/root';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import "./styles.css";

import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {

    return (
        <div id='AppDiv'>
            {/* <Login /> */}
            <Home />
        </div>
    );
}

export default hot(App);
