// llamo a la API
// fetch(url).then(codigo)
import { creaPokemon } from "./sistemaPelea.js";
function consulta(numero) {
  fetch("https://pokeapi.co/api/v2/pokemon/" + numero)
    .then(function (resultadoEnBruto) {
      return resultadoEnBruto.json();
    })
    .then(function (resultadoEnJSON) {
      //  console.log(resultadoEnJSON);
      return creaPokemon(resultadoEnJSON);
    });
}
function consultaEnemigo(numero) {
  fetch("https://pokeapi.co/api/v2/pokemon/" + numero)
    .then(function (resultadoEnBruto) {
      return resultadoEnBruto.json();
    })
    .then(function (resultadoEnJSON) {
      //  console.log(resultadoEnJSON);
      return creaPokemon(resultadoEnJSON);
    });
}

export { consulta };
export { consultaEnemigo };
