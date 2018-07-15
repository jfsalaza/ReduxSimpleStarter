//Individual Component or Views are snippets of code that produce HTML
//Write multiple components nest one inside another to make applications easier
//Component in JS that converts to HTML

import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC-M-rYaLw3FWsGj6h1dvFAYDWIThnwT30'

//Create a new component. This component should produce some HTML
//ES6 syntax
//HTML looking code is really javascript, babel transpiles the code into HTML
//This is how JSX renders to the DOM
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

//Take this component's generated HTML and put it 
//on the page (in the DOM)
//<App /> create instance of App

ReactDOM.render(<App />, document.querySelector('.container'));



