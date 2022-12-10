document.getElementById('jsonBtnEs').addEventListener('click',es);
document.getElementById('jsonBtnEn').addEventListener('click',en);
function es(){
    console.log("spanish");
    fetch('js/info.json')
    .then(function(res){
        // Devuelve el contenido del archivo JSON parseado como un objeto JavaScript
        return res.json();
    })
    .then(function(json){
        // Obtiene un elemento del documento HTML Párrafo
        var p = document.getElementById('txt');
        var p2 = document.getElementById('txt1');
        // Establece el contenido del archivo JSON como el texto del párrafo
        p.textContent = json.es.prueba1;
        p2.textContent = json.es.prueba2;
    });
}
function en(){
    console.log("english");
    fetch('js/info.json')
    .then(function(res){
        // Devuelve el contenido del archivo JSON parseado como un objeto JavaScript
        return res.json();
    })
    .then(function(json){
        // Obtiene un elemento del documento HTML Párrafo
        var p = document.getElementById('txt');
        var p2 = document.getElementById('txt1');
        // Establece el contenido del archivo JSON como el texto del párrafo
        p.textContent = json.en.prueba1;
        p2.textContent = json.en.prueba2;
    });
}

