import React, { Component } from 'react'; // pull off property component as variable called component

class SearchBar extends Component {
  render() {          // every class must have a render function
    // whenever writing JSX and using Javascript variables, wrap in curly braces
    // onChange is now passed as a prop
    return <input onChange={event => console.log(event.target.value)} />;  // must return some JSX // React.createElement
  }

  // event handler defined as method on the class
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

// any file that imports SearchBar will get the component
export default SearchBar;
