import React from 'react'
import SearchableSearchBar from '../containers/SearchableSearchBar'
import PopulatedProfile from '../containers/PopulatedProfile'
import PopulatedTypeHolder from '../containers/PopulatedTypeHolder'
import ClickedPokeList from '../containers/ClickedPokeList'

const Main = () => (
    <div>
      <SearchableSearchBar />
      <PopulatedProfile />
      <PopulatedTypeHolder />
      <ClickedPokeList />
    </div>
)

export default Main;
