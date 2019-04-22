import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Header from './Sections/Header'
// import Navigation from './Sections/Navigation.js'
// import Services from './Sections/Services.js'
// import Portfolio from './Sections/Portfolio.js'
// import Skills from './Sections/Skills.js'
// import CallToAction from './Sections/CallToAction.js'
// import Contacts from './Sections/Contacts.js'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Header />, document.getElementById('headerS'));
// ReactDOM.render(<Navigation />, document.getElementById('navigationS'));
// ReactDOM.render(<Services />, document.getElementById('serviceS'));
// ReactDOM.render(<Portfolio />, document.getElementById('portfolioS'));
// ReactDOM.render(<Skills />, document.getElementById('skillS'));
// ReactDOM.render(<CallToAction />, document.getElementById('callToActionS'));
// ReactDOM.render(<Contacts />, document.getElementById('contactS'));
ReactDOM.render(<App />, document.getElementById('testS'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
