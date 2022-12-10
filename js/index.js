function obtenerJSON() {
    fetch('js/info.json')
      .then(function(res) {
        // Devuelve el contenido del archivo JSON parseado como un objeto JavaScript
        console.log(res.json);
      })
      .then(function(json) {
        // Accede al contenido del archivo JSON
        console.log(json);
        return json;
      });
  }
  document.getElementById('jsonBTNes').addEventListener('click', function() {
    console.log("entre a funcion para Español");
    var json = obtenerJSON();
    var p = document.getElementById('textoP');
    var p2 = document.getElementById('textoP2');
    p.textContent = json.es.prueba1;
    p2.textContent = json.es.prueba2;
  });
  document.getElementById('jsonBTNen').addEventListener('click', function() {
    console.log("entre a funcion para Ingles");
    var json = obtenerJSON();
    var p = document.getElementById('textoP');
    var p2 = document.getElementById('textoP2');
    p.textContent = json.en.prueba1;
    p2.textContent = json.en.prueba2;
  });
  
  
  
  
  
  