import React from 'react'
import CameraAndButtons from './CameraAndButtons'
import Title from './Title'
import SearchableSearchBar from '../containers/SearchableSearchBar'
import PopulatedProfile from '../containers/PopulatedProfile'
import PopulatedTypeHolder from '../containers/PopulatedTypeHolder'
import PopulatedPokeList from '../containers/PopulatedPokeList'

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
      <PopulatedPokeList />
    </article>
  </div>
)

export default Main
