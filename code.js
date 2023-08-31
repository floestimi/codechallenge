function enviar(){
    let nom = document.getElementById('nombre').value;
    let ape = document.getElementById('apellido').value;
    let grupo = document.getElementById('grupo').value;
    let sala = document.getElementById('sala').value;

fetch('https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo265', {
    headers:{"Content-Type": "application/json"},
    method: 'POST' ,
    body: JSON.stringify({
        "nombre": nom,
        "apellido": ape,
        "grupo": grupo,
        "sala": sala,
    })
})

.then(response => response.json())
.then(data => alert('datos enviados correctamente'))
}

document.addEventListener('DOMContentLoaded' ,() => {

    document.getElementById('enviar').addEventListener("click" , () => {
        enviar();
    })
})