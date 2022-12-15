import { Pokemon } from "../models/Pokemon.js";
import { Jugador } from "../models/Jugador.js ";
//Se guarda el nombre -->
let n = Math.floor(Math.random() * 905 + 1);
const forNombre = document.getElementById("formNombre");

forNombre.addEventListener("input", () => {
  const nombreJugador = document.getElementById("nombreJugador");
  localStorage.setItem("Nombre", nombreJugador.value);
});
const pokemonRandom = new Pokemon(n);
export let player = new Jugador(localStorage.getItem("Nombre"));
export let enemy = new Jugador("Pepe el dominguero");
//Se crea el primer pokemon aleatorio -->
const cargarDatoPokemon = () => {
  // console.log(pokemonRandom.nombre);
  creaPokemon();
};

setTimeout(() => {
  cargarDatoPokemon();
}, 1000);

export function creaPokemon() {
  // console.log(data);
  //si ya existe un pokemon en tu array se mete en el array enemigo
  if (player.tusPokemon.length == 0) {
    player.tusPokemon.push(pokemonRandom);
    let sprite1 = document.getElementById("sprite1");
    let sprite2 = document.getElementById("sprite2");
    let pokename = document.getElementById("pokeName");
    pokename.innerHTML = pokemonRandom.nombre;
    sprite1.src = pokemonRandom.spriteDelantero;
    sprite2.src = pokemonRandom.spriteTrasero;
  } else {
    enemy.tusPokemon.push(pokemonRandom);
  }
}
// console.log("tus pokemon", player.tusPokemon);
// console.log("pokemon enemigos", enemy.tusPokemon);

let botonPelear = document.getElementById("botonPelear");

function grupoEnemigo() {
  for (let i = 0; i < 3; i++)
    consultaEnemigo(Math.floor(Math.random() * 905 + 1));
}
//quita la prepelea e imprime el sistema de combate
let pelea = document.getElementById("pelea");
pelea.remove();

function ocultarPrepelea() {
  let prepelea = document.getElementById("prePelea");
  prepelea.remove();
  document.body.appendChild(pelea);
}

botonPelear.addEventListener("click", ocultarPrepelea);

///COMIENZA LA PELEA
const printaPelea = () => {
  let tuPokemon = document.getElementById("tuPokemon");
  // tuPokemon.src = player.tusPokemon.spriteTrasero;
};

printaPelea();
