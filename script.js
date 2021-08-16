let randomPokeImg = document.querySelector('.randomPokeImg');
console.log("RandomPokeImage:", randomPokeImg);
const baseURL = 'https://pokeapi.co/api/v2/pokeathlon-stat/{id or name}/'
const catchBtn = document.querySelector('.catchBtn')

catchBtn.addEventListener('click', getPokemon)

const getPokemon = () => {
    fetch(baseURL)

    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}
