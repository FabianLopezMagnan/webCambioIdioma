document.getElementById('jsonBTN').addEventListener('click',imprimirJSON);

function cargarJSON(){
    fetch('js/info.json')
    .then(function(res){
        // Devuelve el contenido del archivo JSON parseado como un objeto JavaScript
        return res.json();
    })
    .then(function(json){
        // Accede al contenido del archivo JSON
        console.log(json);
    });
}
function imprimirJSON(){
    fetch('js/info.json')
    .then(function(res){
        // Devuelve el contenido del archivo JSON parseado como un objeto JavaScript
        return res.json();
    })
    .then(function(json){
        // Accede al contenido del archivo JSON
        console.log(json);

        // Crea un elemento p
        var p = document.createElement('p');

        // Establece el contenido del archivo JSON como el texto del párrafo
        p.textContent = json;

        // Obtiene un elemento del documento HTML donde se quiere mostrar el párrafo
        var container = document.getElementById('container');

        // Agrega el párrafo al elemento
        container.appendChild(p);
    });
}
