document.onload = init;

function init() {
    document.getElementById('add').onclick = add;
}

function guardar() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var cui = document.getElementById("cui").value;
    var departamento = document.getElementById("departamento").value;

    var lista = document.getElementById('listado');
    var nodo = document.createElement("li");
    var mensaje = document.createElement("a");
    mensaje.innerHTML = "Nombre: " + nombre + " Apellido: " + apellido + " CUI: " + cui + " Departamento: " + departamento;
    nodo.appendChild(mensaje);
    lista.appendChild(nodo);
    
    document.getElementById("nombre").value = '';
    document.getElementById("apellido").value = '';
    document.getElementById("cui").value = '';
    document.getElementById("departamento").value = '';
}