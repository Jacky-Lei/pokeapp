// component SearchBar.js

import React, { Component } from 'react';
// you have to import react as long as it's a component
// need to use class for instance for this, can't use extends Component

// class SearchBar extends Component
const SearchBar = React.createClass({
    handleSubmit (event) {
      event.preventDefault();
      console.log(this.refs.searchString.value)
      const formattedSearchString = this.refs.searchString.value.replace(/[^a-z]/g, "").toLowerCase();
      this.props.submitSearch(formattedSearchString)
    },
    render() {
      return (
        <form onSubmit={this.handleSubmit} id="tester">
        {/* <p onClick={this.props.onClicky}>test</p> */}
        <input type="text" ref="searchString"/>
        <input type="submit"/>
        </form>
      )
    }
})

export default SearchBar;
