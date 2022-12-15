import { consulta } from "../controller/APIPokemon.js";

export class Pokemon {
  //nombre, tipo de pokemon, habilidades y otras características que consideres importantes
  nombre;
  movimientos = [];
  tipoPokemon = [];
  ataque;
  defensa;
  vidaTotal;
  vidaActual;
  spriteDelantero;
  spriteTrasero;

  constructor(id) {
    consulta(id).then((data) => {
      this.convierteDatos(data);
    });
    // this.vidaActual = this.vidaPokemon(this.clasePokemon);
  }
  convierteDatos(data) {
    this.nombre = data.name;
    this.ataque = data.stats[1].base_stat;
    this.defensa = data.stats[2].base_stat;
    this.vidaTotal = data.stats[0].base_stat;
    this.spriteDelantero = data.sprites.front_default;
    this.spriteTrasero = data.sprites.back_default;
    this.creaMovimineto(this.movimientos, data);
    this.creaTipos(this.tipoPokemon, data);
  }
  creaMovimineto(movimientos, data) {
    for (let i = 0; i < 4; i++) {
      let n = Math.floor(Math.random() * data.moves.length + 1);
      movimientos.push(data.moves[n].move.name);
    }
  }

  creaTipos(tipos, data) {
    for (let i = 0; i < data.types.length; i++) {
      tipos.push(data.types[i].type.name);
    }
  }
}
