/* function fetchPoke(){

fetch("https://pokeapi.co/api/v2/pokemon")

.then(response => response.json())

.then(function json() {
    console.log(json());
})

return fetchPoke()
}

fetchPoke(); */

function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
     .then(response => response.json())
     .then(function(allpokemon){
     allpokemon.results.forEach(function(pokemon){
       fetchPokemonData(pokemon); 
     })
    })
   }