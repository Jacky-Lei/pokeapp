import React, { Component } from 'react'
// you have to import react as long as it's a component
// need to use class for instance for this, can't use extends Component

// class SearchBar extends Component
const SearchBar = React.createClass({
    handleSubmit (event) {
      event.preventDefault()
      const formattedSearchString = this.refs.searchString.value.replace(/[^a-z]/gi, "").toLowerCase()
      this.refs.searchString.value = ''
      this.props.submitSearch(formattedSearchString)
    },
    render() {
      return (
        <form className="form form-group has-info col-md-4" onSubmit={this.handleSubmit} id="tester">
        {/* <p onClick={this.props.onClicky}>test</p> */}
          <input type="text" ref="searchString" className="search-input form-control" placeholder=" . . . enter pokemon name" />
          <button type="submit" className="btn btn-info btn-raised " name="button">Search!</button>
        </form>
      )
    }
})

export default SearchBar
