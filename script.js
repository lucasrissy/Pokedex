let counter, counterColor, counterBackgroundScreen = 0;
let primaryColor = ["#836FFF", "#0000CD", " #ff0000", "#FF00FF", "#B0C4DE", "#00FF00"];
let secondaryColor = ["#483D8B", "#000080", "#8B0000", "#8B008B", "#778899", "#006400"];
let backgroundScreen = ["url(Resources/background3.jpeg)","/Resources/background2.png"]
window.onload = (event) => {
    api("bulbasaur");
}

function submit() {
    const input = document.querySelector('#pokemonName').value;

    api(input);
}

async function api(input) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const pokemon = await data.json();
    console.log(pokemon)
    showPokemon(pokemon);
}

function getTypes(pokemon) {
    if (pokemon === undefined) {
        return null
    }
    return pokemon.map(element => element.type.name).join(" | ");
}


function showPokemon(pokemon) {
    const pokemonName = document.querySelector("#name");
    pokemonName.textContent = pokemon.name || " ";

    const pokemonID = document.querySelector("h5");
    pokemonID.textContent = pokemon.id || " ";

    const pokemonImg = document.querySelector("img");
    pokemonImg.src = pokemon['sprites']?.['versions']?.['generation-v']?.['black-white']?.['animated']?.['front_default'] || "Not Found";

    const pokemonType = document.querySelector("#type");
    pokemonType.textContent = (getTypes(pokemon['types']) || " ")



    const hp = document.querySelector("#hp-value");
    hp.textContent = pokemon['stats'][0]['base_stat'] !== "Not Found" ? pokemon['stats'][0]['base_stat'] + "| " : "0"

    const atk = document.querySelector("#atk-value");
    atk.textContent = pokemon['stats'][1]['base_stat'] + "| " || "0"

    const def = document.querySelector("#def-value");
    def.textContent = pokemon['stats'][2]['base_stat'] + "| " || "0"

    const speed = document.querySelector("#speed-value");
    speed.textContent = pokemon['stats'][5]['base_stat'] || "0"


    //names = 
    //PokemonImg.width = "100px";
    counter = pokemon.id;

}

function increment() {
    counter++;
    str = counter.toString();
    api(str);
    return counter;
}

function decrement() {
    console.log(counter)
    if (counter > 1) {
        counter--;
        str = counter.toString();
        api(str);
        return counter;
    }

}


function changeColor() {
    const background = document.querySelector(".pokedex")
    const header = document.querySelector(".header")
    background.style.backgroundColor = primaryColor[counterColor];
    header.style.backgroundColor = secondaryColor[counterColor];
    counterColor < 5 ? counterColor++ : counterColor = 0;
    return counterColor
}

function setBackground(){
    const backgroundScreen = document.querySelector(".screen")
    if(counterBackgroundScreen === 0){
        backgroundScreen.style.backgroundImage = "url(./Resources/background3.jpeg)"
        return counterBackgroundScreen++;  
    }
    if(counterBackgroundScreen === 1){
        backgroundScreen.style.backgroundImage ="url(./Resources/background2.png)"
        return counterBackgroundScreen--;
    }
    
}