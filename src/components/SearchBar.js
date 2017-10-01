import React, { Component } from 'react'; // pull off property component as variable called component

class SearchBar extends Component {
  render() {          // every class must have a render function
    return <input />;            // must return some JSX
  }
}                     // React.createElement

// any file that imports SearchBar will get the component
export default SearchBar;
