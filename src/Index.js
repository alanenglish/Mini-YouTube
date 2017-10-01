import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDdjEu5h7_2k8yg5WITlp71d6zW679B6XY';

// Create a new component - this component should produce some HTML
const App = () => {
  return <div>Hi!</div>;
}
// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
