document.getElementById('jsonBTN').addEventListener('click',cargarJSON);


function cargarJSON(){
    fetch('js/info.json')
    .then(function(res){
        console.log(res);
    })
}