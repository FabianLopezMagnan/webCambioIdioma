document.getElementById('jsonBTN').addEventListener('click',cargarJSON);

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