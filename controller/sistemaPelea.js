import { Pokemon } from "../models/Pokemon.js";
import { consulta, consultaEnemigo } from "./APIPokemon.js";
import { Jugador } from "../models/Jugador.js ";
//Se guarda el nombre -->
// let n = Math.floor(Math.random() * 905 + 1);
let tusPokemon = [];
let pokemonEnemigos = [];
const forNombre = document.getElementById("formNombre");

forNombre.addEventListener("input", () => {
  const nombreJugador = document.getElementById("nombreJugador");
  localStorage.setItem("Nombre", nombreJugador.value);
});

export const player = new Jugador(forNombre, tusPokemon);
export const enemy = new Jugador("Pepe el dominguero", pokemonEnemigos);
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
  //si ya existe un pokemon en tu array se mete en el array enemigo
  if (player.tusPokemon.length == 0) {
    player.tusPokemon.push(pokemonRandom);
    let sprite1 = document.getElementById("sprite1");
    let sprite2 = document.getElementById("sprite2");
    let pokename = document.getElementById("pokeName");
    pokename.innerHTML = nombre;
    sprite1.src = spriteDelantero;
    sprite2.src = spriteTrasero;
  } else {
    enemy.tusPokemon.push(pokemonRandom);
  }
}
console.log("tus pokemon", player.tusPokemon);
console.log("pokemon enemigos", enemy.tusPokemon);

let botonPelear = document.getElementById("botonPelear");

function grupoEnemigo() {
  for (let i = 0; i < 3; i++)
    consultaEnemigo(Math.floor(Math.random() * 905 + 1));
}

let pelea = document.getElementById("pelea");
pelea.remove();

function ocultarPrepelea() {
  let prepelea = document.getElementById("prePelea");
  prepelea.remove();
  document.body.appendChild(pelea);
}

if (player.tusPokemon.length == 0) {
  consulta(Math.floor(Math.random() * 905 + 1)), grupoEnemigo();
}

botonPelear.addEventListener("click", ocultarPrepelea);

///COMIENZA LA PELEA
const printaPelea = () => {
  let tuPokemon = document.getElementById("tuPokemon");
  console.log(player.tusPokemon);
  // tuPokemon.src = player.tusPokemon.spriteTrasero;
};

printaPelea();
