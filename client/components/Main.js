import React from 'react'
import CameraAndButtons from './CameraAndButtons'
import Title from './Title'
import SearchableSearchBar from '../containers/SearchableSearchBar'
import PopulatedProfile from '../containers/PopulatedProfile'
import PopulatedTypeHolder from '../containers/PopulatedTypeHolder'
import ClickedPokeList from '../containers/ClickedPokeList'

const Main = () => (
  <div className="container">
    <div className="row">
      <CameraAndButtons />
      <Title />
      <SearchableSearchBar />
    </div>
    <article className="screen clearfix">
      <PopulatedProfile />
      <PopulatedTypeHolder />
      <ClickedPokeList />
    </article>
  </div>
)

export default Main
