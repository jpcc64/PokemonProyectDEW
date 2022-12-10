export class Pokemon {
  //nombre, tipo de pokemon, habilidades y otras características que consideres importantes
  tipoPokemon;
  nombre;
  vidaTotal;
  movimientos;
  ataque;
  defensa;
  vidaActual;
  spriteDelantero;
  spriteTrasero;

  constructor(
    nombre,
    tipoPokemon,
    movimientos,
    ataque,
    defensa,
    vidaTotal,
    spriteDelantero,
    spriteTrasero
  ) {
    this.nombre = nombre;
    this.tipoPokemon = tipoPokemon;
    this.movimientos = movimientos;
    this.ataque = ataque;
    this.defensa = defensa;
    this.vidaTotal = vidaTotal;
    this.spriteDelantero = spriteDelantero;
    this.spriteTrasero = spriteTrasero;
    // this.vidaActual = this.vidaPokemon(this.clasePokemon);
  }
}
