
/*const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

function fetchPokemons(){
    fetch(baseURL)
     .then(response => response.json())
     .then(function(allpokemon){
     allpokemon.results.forEach(function(pokemon){
       fetchPokemons(pokemon); 
     })
    })
    return console.log(fetchPokemons())
   }

console.log(fetchPokemons());*/
function getPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon/5')
    .then(response){
        rsponse.json()
       // console.log(response.json());
    }
    .then(function (pokemon)){
        console.log(pokemon.name)
    }
    }
    
    getPokemon();