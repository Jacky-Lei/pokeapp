import React from 'react'

const Profile = React.createClass({
  render() {
    const {data: {activePokemon: {number}, fetching: {isFetching, error}}} = this.props

    if ( (!number) || (isFetching) || (error) ){
      return <div></div>
    }

    const imageSRC = `http://veekun.com/dex/media/pokemon/global-link/${number}.png`
    const {name, pokeType, weight, height, description} = this.props.data.activePokemon
    const typeColor = `type-${pokeType}`

    return (
      <figure className="clear row">
        <div className="col-xs-12 col-lg-5 text-align-center">
          <img src={imageSRC} alt={`${name} image`} />
        </div>
        <div className="attributes col-xs-12 col-lg-7">
          <p className="profile-num top-bottom-margin ">#{number}</p>
          <p className="profile-name capitalize top-bottom-margin ">{name}</p>
          <p className={`profile-type type top-bottom-margin ${typeColor} text-align-center`}>{pokeType}</p>
          <p className="weight top-bottom-margin ">Weight: {weight/10} kg</p>
          <p>Height: {height/10} m</p>
        </div>
        <figcaption className="clear description">{description}</figcaption>
      </figure>
    )
  }
})

Profile.propTypes = {
  data: React.PropTypes.shape({
    activePokemon: React.PropTypes.shape({
      number: React.PropTypes.number,
      name: React.PropTypes.string,
      pokeType: React.PropTypes.string,
      weight: React.PropTypes.number,
      height: React.PropTypes.number,
      description: React.PropTypes.string,
    }).isRequired,
    fetching: React.PropTypes.shape({
      isFetching: React.PropTypes.bool.isRequired,
      error: React.PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default Profile
