import { Pokemon } from "../models/Pokemon.js";
import { Jugador } from "../models/Jugador.js ";
//Se guarda el nombre -->
let n = Math.floor(Math.random() * 905 + 1);
const forNombre = document.getElementById("formNombre");

forNombre.addEventListener("input", () => {
  const nombreJugador = document.getElementById("nombreJugador");
  localStorage.setItem("Nombre", nombreJugador.value);
});
export let player = new Jugador(localStorage.getItem("Nombre"));
export let enemy = new Jugador("Pepe el dominguero");
//Se crea el primer pokemon aleatorio -->
const cargarDatoPokemon = () => {
  // console.log(pokemonAliado.nombre);

  creaPokemon();
  grupoEnemigo(Math.floor(Math.random() * 905 + 1));
  grupoEnemigo(Math.floor(Math.random() * 905 + 1));
  grupoEnemigo(Math.floor(Math.random() * 905 + 1));
};
cargarDatoPokemon();
let pelea = document.getElementById("pelea");

const comienzaPartida = () => {
  printaPelea();
  // pelea.remove();
  pintaMoviminetos();
  sistemaPelea();
};

setTimeout(() => {
  comienzaPartida();
}, 1000);

export function creaPokemon() {
  //si ya existe un pokemon en tu array se mete en el array enemigo
  const pokemonAliado = new Pokemon(Math.floor(Math.random() * 905 + 1));
  player.tusPokemon.push(pokemonAliado);
}

// console.log("tus pokemon", player.tusPokemon);
// console.log("pokemon enemigos", enemy.tusPokemon);

let botonPelear = document.getElementById("botonPelear");

function grupoEnemigo(n) {
  let pokemonEnemigo = new Pokemon(n);
  enemy.tusPokemon.push(pokemonEnemigo);
}
//quita la prepelea e imprime el sistema de combate

function ocultarPrepelea() {
  let prepelea = document.getElementById("prePelea");
  prepelea.remove();
  document.body.appendChild(pelea);
}

botonPelear.addEventListener("click", ocultarPrepelea);

///COMIENZA LA PELEA
const printaPelea = () => {
  //prepelea
  let sprite1 = document.getElementById("sprite1");
  let sprite2 = document.getElementById("sprite2");
  let pokename = document.getElementById("pokeName");
  pokename.innerHTML = player.tusPokemon[0].nombre;
  sprite1.src = player.tusPokemon[0].spriteDelantero;
  sprite2.src = player.tusPokemon[0].spriteTrasero;
  //comienza la pelea
  let tuPokemon = document.getElementById("tuPokemon");
  let pokemonEnemy = document.getElementById("pokemonEnemy");
  let statAtaque = document.getElementById("statAtaque");
  let statDefensa = document.getElementById("statDefensa");
  let statVida = document.getElementById("statVida");
  let statVidaEnemy = document.getElementById("statVidaEnemy");
  let statAtaqueEnemy = document.getElementById("statAtaqueEnemy");
  let statDefensaEnemy = document.getElementById("statDefensaEnemy");
  // console.log(player.tusPokemon);
  tuPokemon.src = player.tusPokemon[0].spriteTrasero;
  pokemonEnemy.src = enemy.tusPokemon[0].spriteDelantero;
  //estadisticas tu pokemon
  statVida.innerHTML = "VIDA: " + player.tusPokemon[0].vidaTotal;
  statAtaque.innerHTML = "ATAQUE: " + player.tusPokemon[0].ataque;
  statDefensa.innerHTML = "DEFENSA: " + player.tusPokemon[0].defensa;
  //estadisticas del enemigo
  statVidaEnemy.innerHTML = "VIDA: " + enemy.tusPokemon[0].vidaTotal;
  statAtaqueEnemy.innerHTML = "ATAQUE: " + enemy.tusPokemon[0].ataque;
  statDefensaEnemy.innerHTML = "DEFENSA: " + enemy.tusPokemon[0].defensa;
};

//Sistema de pelea
let listMovimientos = document.getElementById("listMovimientos");
let moves = player.tusPokemon[0].movimientos;

const pintaMoviminetos = () => {
  for (let i = 0; i < moves.length; i++) {
    let option = document.createElement("option");
    option.text = moves[i];
    listMovimientos.add(option);
  }
};

const sistemaPelea = () => {
  //Daño = (defensa del pokemon atacado) -  (ataque_base Atacador) * Valor aleatorio entre [0.5 , slot de habilidad Atacador]
  let daño =
    enemy.tusPokemon[0].defensa -
    player.tusPokemon[0].ataque *
      Math.floor(Math.random() * (player.tusPokemon.slot[0] - 0.5) - 0.5);
  console.log(daño);
};
