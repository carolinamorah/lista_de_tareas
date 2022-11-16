const inputTarea = document.getElementById("tarea");
const btnAgregar = document.getElementById("agregarTarea");
const listaDeTareas = document.querySelector("tbody");
const botonBorrar = document.getElementById("borrar");
let tareasTotales = document.querySelector("#total");
let tareasRealizadas = document.querySelector("#realizadas");
let id = 0;


function renderTareas(array = tareas){
    let html = "";
    for (let tarea of array){
        html += `<tr>
                    <td>${tarea.id}</td>
                    <td id="nombre${tarea.id}">${tarea.nombre}</td>
                    <td><input id="${tarea.id}" class="form-check-input mt-0" type="checkbox" onclick="cambiarEstadoCheckbox(${tarea.id})" ></td>
                    <td><button onclick="borrarTarea(${tarea.id})">❌</button></td>
                </tr>`;
    }

    tareasTotales.innerHTML = array.length
    listaDeTareas.innerHTML = html
}

const tareas = [];

btnAgregar.addEventListener('click', () => {
    const nombreTarea = inputTarea.value;
    id++

    if (nombreTarea != ""){
    tareas.push({id: id, nombre: nombreTarea, estado: false});
    inputTarea.value = "";

    renderTareas()
    } else {
        alert("Debes ingresar una tarea")
    }
})


function borrarTarea(id){
    const index = tareas.findIndex((ele)=> ele.id == id)
    tareas.splice(index, 1)

    renderTareas()
}

function holo(id){
    tareas.map((tarea) => {
        if (tarea.id == id) tarea.estado = !tarea.estado;
    });
    
    renderTareas()
}

function cambiarEstadoCheckbox(param) {
    let check = document.getElementById(param);
    const index = tareas.findIndex((ele) => ele.id == param);
    if (check.checked == true) {
        document.getElementById(`nombre${param}`).classList.add("text-decoration-line-through");
        tareas[index].estado = true;
    }
    else {
        document.getElementById(`nombre${param}`).classList.remove("text-decoration-line-through");
        tareas[index].estado = false;
    }

    tareasRealizadas.innerHTML = `${tareas.filter(chkx => chkx.estado == true).length}`;
}








