import { Pokemon } from "../models/Pokemon.js";
import { consulta } from "../models/APIPokemon.js";

//Se guarda el nombre -->
let n = Math.floor(Math.random() * 905 + 1);
export let tusPokemon = [];

const forNombre = document.getElementById("formNombre");

forNombre.addEventListener("submit", () => {
  const nombreJugador = document.getElementById("nombreJugador");
  localStorage.setItem("Nombre", nombreJugador.value);
});
//Se crea el primer pokemon aleatorio -->
function creaMovimineto(array, data) {
  for (let i = 0; i < 4; i++) {
    let n = Math.floor(Math.random() * data.moves.length + 1);
    array.push(data.moves[n].move.name);
  }
}

function creaTipos(array, data) {
  for (let i = 0; i < data.types.length; i++) {
    array.push(data.types[i].type.name);
  }
}

export function creaPokemon(data) {
  // console.log(data);
  let nombre = data.name;
  let movimientos = [];
  let tipoPokemon = [];
  let ataque = data.stats[1].base_stat;
  let defensa = data.stats[2].base_stat;
  let vidaTotal = data.stats[0].base_stat;
  let spriteDelantero = data.sprites.front_default;
  let spriteTrasero = data.sprites.back_default;

  creaMovimineto(movimientos, data);
  creaTipos(tipoPokemon, data);

  const pokemonRandom = new Pokemon(
    nombre,
    tipoPokemon,
    movimientos,
    ataque,
    defensa,
    vidaTotal,
    spriteDelantero,
    spriteTrasero
  );
  tusPokemon.push(pokemonRandom);
  let sprite1 = document.getElementById("sprite1");
  let sprite2 = document.getElementById("sprite2");
  let pokename = document.getElementById("pokeName");
  pokename.innerHTML = nombre;
  sprite1.src = spriteDelantero;
  sprite2.src = spriteTrasero;
}
// se muestra el primer pokemon
let GeneraPokemonRandom = document.getElementById("CreaPokemonRandom");
GeneraPokemonRandom.addEventListener("click", consulta(n));
