export const formatPokemonData = (data) => ({
  name: data.name,
  weight: data.weight,
  height: data.height,
  number: data.id,
  pokeType: data.types[0].type.name
})

export const formatDescription = (data) => ({
  name: data.name,
  description: data.flavor_text_entries.find((obj) => obj.language.name === "en").flavor_text
})

export const formatPokeType = (data) => ({
  name: data.name,
  pokemon: selectThreeOriginalPokemon(data.pokemon),
  weakAgainst: removeDarkType(data.damage_relations.double_damage_from),
  strongAgainst: removeDarkType(data.damage_relations.double_damage_to)
})

const removeDarkType = (arr) => (
  arr.filter((obj) => {
    if (obj.name !== 'dark'){
      return (obj)
    }
  })
)

const selectThreeOriginalPokemon = (pokemonArray) => {
  const filteredPokemonArray = []
  for (let x = 0; x < pokemonArray.length; x++) {
    let pokemonNumber = extractPokeNum(pokemonArray[x].pokemon.url)
    // Limits to original 151 and non-randomized Pokemon to reduce load time
    if (pokemonNumber <= 151 && filteredPokemonArray.length < 3) {
      filteredPokemonArray.push(pokemonArray[x])
      // Avoids showing evolutions of the first Pokemon
      x += 2
    } else {
      break
    }
  }
  return filteredPokemonArray
}

export const extractPokeNum = (url) => {
  const regexPat = /\/\d+\//
  return url.match(regexPat)[0].slice(1,-1)
}
