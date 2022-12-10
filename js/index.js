document.getElementById('jsonBTNes').addEventListener('click', imprimirJSONes);
document.getElementById('jsonBTNes').addEventListener('click', imprimirJSONen);

function imprimirJSONes() {
  fetch('js/info.json')
    .then(function(res) {
      // Devuelve el contenido del archivo JSON parseado como un objeto JavaScript
      return res.json();
    })
    .then(function(json) {
      // Accede al contenido del archivo JSON
      console.log(json);

      // Obtiene un elemento del documento HTML Párrafo
      var p = document.getElementById('textoP');
      var p2 = document.getElementById('textoP2');

      // Establece el contenido del archivo JSON como el texto del párrafo
      p.textContent = json.es.prueba1;
      p.textContent = json.es.prueba2;
    });
}

function imprimirJSONen() {
  fetch('js/info.json')
    .then(function(res) {
      // Devuelve el contenido del archivo JSON parseado como un objeto JavaScript
      return res.json();
    })
    .then(function(json) {
      // Accede al contenido del archivo JSON
      console.log(json);

      // Obtiene un elemento del documento HTML Párrafo
      var p = document.getElementById('textoP');
      var p2 = document.getElementById('textoP2');

      // Establece el contenido del archivo JSON como el texto del párrafo
      p.textContent = json.en.prueba1;
      p.textContent = json.en.prueba2;
    });
}