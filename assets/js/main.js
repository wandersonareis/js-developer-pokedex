const content = document.getElementById("content");
const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const modal = document.getElementById("pokemon--Modal");

let offset = 0;
const limit = 10;

async function loadPokemonItens(offset, limit) {
	pokemonAPI.getPokemons(offset, limit).then((pokemons = []) => {
        pokemons.map(convertPokemonToList);
	}, 2000);
}

async function pokemonsAttributes() {
	pokemonAPI.getPokemons(offset, limit).then((pokemons = []) => {
		modal.style.display = "block";

		const pokemonFilter = pokemons.filter(function (el) {
			return `#${el.name}` == window.location.hash;
		});

        pokemonFilter.map(convertPokemonToAttributesModal);

	}, 2000);
}

window.addEventListener("hashchange", pokemonsAttributes);

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
	offset += limit;
	loadPokemonItens(offset, limit);
});
