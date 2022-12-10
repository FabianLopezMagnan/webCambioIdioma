document.getElementById('jsonBTN').addEventListener('click',cargarJSON);


function cargarJSON(){
    fetch('info.json')
    .then(function(res){
        console.log(res);
    })
}