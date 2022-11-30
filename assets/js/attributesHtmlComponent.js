function convertPokemonToList(pokemon) {
	const a = document.createElement("a");
	a.href = `#${pokemon.name}`;

	const list = document.createElement("li");
	const spanNumber = document.createElement("span");
	const spanName = document.createElement("span");
	const divDetail = document.createElement("div");
	const olTypes = document.createElement("ol");
	const pokePhoto = document.createElement("img");

	a.classList.add("pokemon-info");

	list.classList.add("pokemon");
	list.classList.add(pokemon.type);

	spanNumber.classList.add("number");
	spanNumber.textContent = `#${pokemon.number}`;
	spanName.classList.add("name");
	spanName.textContent = pokemon.name;

	divDetail.classList.add("detail");
	olTypes.classList.add("types");

	pokemon.types.map((type) => {
		const liTypes = document.createElement("li");
		liTypes.classList.add("type");
		liTypes.classList.add(type);
		liTypes.textContent = type;
		olTypes.appendChild(liTypes);
	});

	pokePhoto.classList.add(pokemon.name);
	pokePhoto.src = pokemon.photo;
	pokePhoto.alt = pokemon.name;

	list.appendChild(spanNumber);
	list.appendChild(spanName);
	list.appendChild(divDetail);
	divDetail.appendChild(olTypes);
	divDetail.appendChild(pokePhoto);
	a.appendChild(list);

	pokemonList.appendChild(a);
}

function convertPokemonToAttributesModal(pokemon) {
	const mainDiv = document.createElement("div");
	const a = document.createElement("a");
	const leftArrow = document.createElement("i");
	const spanNumber = document.createElement("span");
	const spanName = document.createElement("span");
	const divTypes = document.createElement("div");
	const ulTypes = document.createElement("ul");
	const divImgPokemon = document.createElement("div");
	const pokePhoto = document.createElement("img");
	const divAttacks = document.createElement("div");
	const ulAttacks = document.createElement("ul");
	const divAttributes = document.createElement("div");
	const ulAttributes = document.createElement("ul");
	const divAttributesLeft = document.createElement("div");
	const divAttributesStatsNumbers = document.createElement("div");

	mainDiv.classList.add("contentAttributes");
	mainDiv.classList.add("pokemon");
	mainDiv.classList.add(pokemon.type);
	mainDiv.classList.add("pokemonAttributes");

	a.classList.add("returnInicial");
	a.href = "";
	a.addEventListener("click", () => {
		modal.style.display = "none";
        mainDiv.remove();
	});

	leftArrow.classList.add("fa-solid");
	leftArrow.classList.add("fa-arrow-left");
	spanNumber.classList.add("number");
	spanNumber.textContent = `#${pokemon.number}`;
	spanName.classList.add("name");
	spanName.textContent = pokemon.name;
	ulTypes.classList.add("types");
	ulTypes.classList.add("displayFlex");

	pokemon.types.map((type) => {
		const liTypes = document.createElement("li");
		liTypes.classList.add("type");
		liTypes.classList.add(type);
		liTypes.textContent = type;
		ulTypes.appendChild(liTypes);
	});

	divImgPokemon.classList.add("imgPokemon");
	pokePhoto.classList.add(pokemon.name);
	pokePhoto.src = pokemon.photo;
	pokePhoto.alt = pokemon.name;
	divImgPokemon.appendChild(pokePhoto);

	divAttacks.classList.add("attacks");
	ulAttacks.classList.add("types");
	ulAttacks.classList.add("displayFlex");
	ulAttacks.textContent = `attacks: `;

	pokemon.attacks.map((attacks) => {
		const liAttacks = document.createElement("li");
		liAttacks.textContent = attacks;
		ulAttacks.appendChild(liAttacks);
	});
	divTypes.appendChild(ulTypes);
	divAttacks.appendChild(ulAttacks);

	divAttributes.classList.add("attributes");

	ulAttributes.appendChild(divAttributesLeft);
	pokemon.statsNames.map((statsNames) => {
		const liStatsNames = document.createElement("li");
		liStatsNames.textContent = statsNames;
		divAttributesLeft.appendChild(liStatsNames);
	});
	divAttributesStatsNumbers.classList.add("statsNumbers");

	pokemon.statsNumbers.map((statsNumbers) => {
		const liStatsNumbers = document.createElement("li");
		liStatsNumbers.textContent = statsNumbers;
		divAttributesStatsNumbers.appendChild(liStatsNumbers);
	});
	ulAttributes.appendChild(divAttributesStatsNumbers);

	ulAttributes.appendChild(divAttributesStatsNumbers);
	divAttributes.appendChild(ulAttributes);

	a.appendChild(leftArrow);

	mainDiv.appendChild(a);
	mainDiv.appendChild(spanNumber);
	mainDiv.appendChild(spanName);
	mainDiv.appendChild(divTypes);
	mainDiv.appendChild(divAttacks);
	mainDiv.appendChild(divImgPokemon);
	mainDiv.appendChild(divAttributes);
	modal.appendChild(mainDiv);
}
