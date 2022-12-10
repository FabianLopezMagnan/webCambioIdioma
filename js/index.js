document.getElementById('jsonBTNes').addEventListener('click',español);
document.getElementById('jsonBTNen').addEventListener('click',ingles);
function español(){
    console.log("Español");
    fetch('js/info.json')
    .then(function(res){
        // Devuelve el contenido del archivo JSON parseado como un objeto JavaScript
        return res.json();
    })
    .then(function(json){
        // Obtiene un elemento del documento HTML Párrafo
        var p = document.getElementById('textoP');
        var p2 = document.getElementById('textoP2');
        // Establece el contenido del archivo JSON como el texto del párrafo
        p.textContent = json.es.prueba1;
        p2.textContent = json.es.prueba2;
    });
}
function ingles(){
    console.log("INGLES");
    fetch('js/info.json')
    .then(function(res){
        // Devuelve el contenido del archivo JSON parseado como un objeto JavaScript
        return res.json();
    })
    .then(function(json){
        // Obtiene un elemento del documento HTML Párrafo
        var p = document.getElementById('textoP');
        var p2 = document.getElementById('textoP2');
        // Establece el contenido del archivo JSON como el texto del párrafo
        p.textContent = json.en.prueba1;
        p2.textContent = json.en.prueba2;
    });
}

