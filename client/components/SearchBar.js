import React from 'react'

const SearchBar = React.createClass({
  handleSubmit (event) {
    event.preventDefault()
    const formattedSearchString = this.refs.searchString.value.replace(/[^a-z]/gi, "").toLowerCase()
    this.refs.searchString.value = ''
    this.props.submitSearch(formattedSearchString)
  },
  render() {
    return (
      <form className="form form-group has-info col-md-4 text-align-center" onSubmit={this.handleSubmit}>
        <input className="search-input form-control" type="text" ref="searchString"  placeholder=" . . . enter pokemon name" />
        <button className="btn btn-info btn-raised" type="submit" name="button">Search!</button>
      </form>
    )
  }
})

export default SearchBar
