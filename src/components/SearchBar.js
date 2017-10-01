import React, { Component } from 'react'; // pull off property component as variable called component

class SearchBar extends Component {
  // first and only function called automatically whenever a new instance of the class is created
  // reserved for doing set up, initializing variables and state
  constructor(props) {
    // calls the parent constructor method
    super(props);
    // initialize by creating new object and assigning it to this.state
    // the object that is passed will also contain properties that we want to record on the state
    // name properties accordingly
    this.state = {term: ''};
  }
  render() {          // every class must have a render function
    // whenever writing JSX and using Javascript variables, wrap in curly braces
    // onChange is now passed as a prop, set state of term prop to value entered into input
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );  // must return some JSX // React.createElement
  }

  // event handler defined as method on the class
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

// any file that imports SearchBar will get the component
export default SearchBar;

// state is a plain JS object that is used to record and react to user events
// each class based component that we define, has its own state object
// whenever a components state is changed, the component immediately rerendereds
// and forces all its children to rerender as well
// functional components do not have state, only class based
