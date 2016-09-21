import React from 'react'

const Profile = React.createClass({
  render() {
    const {pokemon: {number}, fetching: {isFetching, error}} = this.props
    if ( (!number) || (isFetching) || (error) ){
      return <div></div>
    }

    const imageSRC = `http://veekun.com/dex/media/pokemon/global-link/${this.props.pokemon.number}.png`
    const {name, pokeType, weight, height} = this.props.pokemon
    const typeColor = `type-${pokeType}`
    const description = (this.props.pokemon.description) ? this.props.pokemon.description : ""

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
  pokemon: React.PropTypes.shape({
    number: React.PropTypes.number,
    name: React.PropTypes.string,
    pokeType: React.PropTypes.string,
    weight: React.PropTypes.number,
    height: React.PropTypes.number,
    description: React.PropTypes.string,
  }),
  fetching: React.PropTypes.shape({
    isFetching: React.PropTypes.bool,
    error: React.PropTypes.string
  })
}

export default Profile
