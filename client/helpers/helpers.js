
export const formatPokemonData = (data) => {
  return {
    name: data.name,
    weight: data.weight,
    height: data.height,
    number: data.id,
    pokeType: data.types[0].type.name
  }
}

export const formatDescription = function (data) {
  return {
    name: data.name,
    description: data.flavor_text_entries.find(function (obj) {return obj.language.name === "en"}).flavor_text
  }
}

export const formatPokeType = (data) => {
  return {
    name: data.name,
    pokemon: selectThreeOriginalPokemon(data.pokemon),
    weakAgainst: removeDarkType(data.damage_relations.double_damage_from),
    strongAgainst: removeDarkType(data.damage_relations.double_damage_to)
  }
}

const removeDarkType = function (arr) {
  return arr.filter(function (obj) {
    if (obj.name !== 'dark'){
      return (obj)
    }
  })
}

const selectThreeOriginalPokemon = function (pokemonArray) {
  const filteredPokemonArray = []
  for (var x = 0; x < pokemonArray.length; x++) {
    var pokemonNumber = extractPokeNum(pokemonArray[x].pokemon.url)
    if (pokemonNumber <= 151 && filteredPokemonArray.length < 3) {
      filteredPokemonArray.push(pokemonArray[x])
      x+=2
    } else {
      break
    }
  }
  return filteredPokemonArray
}

export const extractPokeNum = function (url) {
  const regexPat = /\/\d+\//
  return url.match(regexPat)[0].slice(1,-1)
}
