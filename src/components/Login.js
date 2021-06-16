import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <div id='loginModal'>
      <div class='long'><h2>Username</h2><input id='username'></input></div>
      <div class='long'><h2>Password</h2><input id='password'></input></div>
    </div>
  );
}
