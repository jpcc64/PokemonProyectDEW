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
  slot = [];

  constructor(id) {
    consulta(id).then((data) => {
      this.convierteDatos(data);
    });
    // this.vidaActual = this.vidaPokemon(this.clasePokemon);
  }
  convierteDatos(data) {
    // console.log(data);
    this.nombre = data.name;
    this.ataque = data.stats[1].base_stat;
    this.defensa = data.stats[2].base_stat;
    this.vidaTotal = data.stats[0].base_stat;
    this.spriteDelantero = data.sprites.front_default;
    this.spriteTrasero = data.sprites.back_default;
    this.creaMovimineto(this.movimientos, data);
    this.creaTipos(this.tipoPokemon, data);
    this.creaSlot(this.slot,data)
  }
  creaMovimineto(movimientos, data) {
    for (let i = 0; i < data.abilities.length; i++) {
      movimientos.push(data.abilities[i].ability.name);
    }
  }

  creaTipos(tipos, data) {
    for (let i = 0; i < data.types.length; i++) {
      tipos.push(data.types[i].type.name);
    }
  }
  creaSlot(slot,data){
      for (let i = 0; i < data.abilities.length; i++) {
        slot.push(data.abilities[i].slot);
      }
  }
}
