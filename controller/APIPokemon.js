// llamo a la API
// fetch(url).then(codigo)

function consulta(numero) {
  return fetch("https://pokeapi.co/api/v2/pokemon/" + numero)
    .then(function (resultadoEnBruto) {
      return resultadoEnBruto.json();
    })
    .then(function (resultadoEnJSON) {
      //  console.log(resultadoEnJSON);
      return resultadoEnJSON;
    });
}

export { consulta };

