import React from 'react'

const Profile = React.createClass({
  render() {
    if (
      // Checks if there is active pokemon
      (!this.props.pokemon.number) ||
      (this.props.fetching.isFetching) ||
      (this.props.fetching.error)
    ) {
      return <div></div>
    }

    let imageSRC = `http://veekun.com/dex/media/pokemon/global-link/${this.props.pokemon.number}.png`
    let {number, name, pokeType, weight, height} = this.props.pokemon
    let typeColor = `type-${pokeType}`
    let description = (this.props.pokemon.description) ? this.props.pokemon.description : ""

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

export default Profile
