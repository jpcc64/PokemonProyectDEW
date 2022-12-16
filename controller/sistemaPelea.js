import { Pokemon } from "../models/Pokemon.js";
import { Jugador } from "../models/Jugador.js ";
//Se guarda el nombre -->
let n = Math.floor(Math.random() * 905 + 1);
const forNombre = document.getElementById("formNombre");

forNombre.addEventListener("input", () => {
  const nombreJugador = document.getElementById("nombreJugador");
  localStorage.setItem("Nombre", nombreJugador.value);
});
const pokemonAliado = new Pokemon(Math.floor(Math.random() * 905 + 1));
export let player = new Jugador(localStorage.getItem("Nombre"));
export let enemy = new Jugador("Pepe el dominguero");
//Se crea el primer pokemon aleatorio -->
const cargarDatoPokemon = () => {
  // console.log(pokemonAliado.nombre);

  creaPokemon();
  grupoEnemigo(Math.floor(Math.random() * 905 + 1));
  grupoEnemigo(Math.floor(Math.random() * 905 + 1));
  grupoEnemigo(Math.floor(Math.random() * 905 + 1));
  printaPelea()
};


const pintaDatos = () => {
  
};


setTimeout(() => {
  cargarDatoPokemon();
}, 1000);



export function creaPokemon() {
  // console.log(data);
  //si ya existe un pokemon en tu array se mete en el array enemigo

  player.tusPokemon.push(pokemonAliado);
  let sprite1 = document.getElementById("sprite1");
  let sprite2 = document.getElementById("sprite2");
  let pokename = document.getElementById("pokeName");
  pokename.innerHTML = pokemonAliado.nombre;
  sprite1.src = pokemonAliado.spriteDelantero;
  sprite2.src = pokemonAliado.spriteTrasero;
}
console.log("tus pokemon", player.tusPokemon);
console.log("pokemon enemigos", enemy.tusPokemon);

let botonPelear = document.getElementById("botonPelear");

function grupoEnemigo(n) {
  let pokemonEnemigo = new Pokemon(n);
  enemy.tusPokemon.push(pokemonEnemigo);
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
  console.log(player.tusPokemon[0].nombre);
  tuPokemon.innerHTML = player.tusPokemon[0].nombre;
};

