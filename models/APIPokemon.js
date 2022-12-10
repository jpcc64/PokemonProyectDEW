// llamo a la API
// fetch(url).then(codigo)
import {creaPokemon} from "../controller/prepelea.js"
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

export { consulta };
