import React from 'react'
import SearchableSearchBar from '../containers/SearchableSearchBar'
import PopulatedProfile from '../containers/PopulatedProfile'
import PopulatedTypeHolder from '../containers/PopulatedTypeHolder'
import ClickedPokeList from '../containers/ClickedPokeList'
import CameraAndButtons from './CameraAndButtons'
import Title from './Title'



// var url = require('file!img!./pokemon1.png');

// import 'bootstrap/dist/css/bootstrap.css'

// import 'bootstrap'

// var picc = require('./pokemon1.png')

const Main = () => (
    <div className="container">
      <div className="row">
        <CameraAndButtons />
        <Title />
        <SearchableSearchBar />
      </div>

      <PopulatedProfile />      


      <PopulatedTypeHolder />
      <ClickedPokeList />
    </div>
)

export default Main;
