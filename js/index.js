document.getElementById('jsonBTNes').addEventListener('click',imprimirJSONEspañol);
//document.getElementById('jsonBTNes').addEventListener('click',imprimirJSONen);
function imprimirJSONEspañol(){
    fetch('js/info.json')
    .then(function(res){
        // Devuelve el contenido del archivo JSON parseado como un objeto JavaScript
        return res.json();
    })
    .then(function(json){
        // Obtiene un elemento del documento HTML Párrafo
        var p = document.getElementById('textoP');

        // Establece el contenido del archivo JSON como el texto del párrafo
        p.textContent = json.es.prueba1;

        // Obtiene un elemento del documento HTML donde se quiere mostrar el párrafo
        //var container = document.getElementById('container');

        // Agrega el párrafo al elemento
        //container.appendChild(p);
    });
}

