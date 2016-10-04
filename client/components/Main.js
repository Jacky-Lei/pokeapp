import React from 'react'
import CameraAndButtons from './presentational/CameraAndButtons'
import Title from './presentational/Title'
import SearchableSearchBar from './containers/SearchableSearchBar'
import PopulatedScreen from './containers/PopulatedScreen'

const Main = () => (
  <div className="container">
    <div className="row">
      <CameraAndButtons />
      <Title />
      <SearchableSearchBar />
    </div>
    <PopulatedScreen />
  </div>
)

export default Main
