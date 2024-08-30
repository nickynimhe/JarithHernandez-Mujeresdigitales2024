// Seleccionamos los elementos del HTML que necesitamos
const inputTarea = document.getElementById('taskInput');
const botonAgregar = document.getElementById('addTaskBtn');
const listaTareas = document.getElementById('taskList');

// Creamos un arreglo para almacenar las tareas
let tareas = [];

// Función para agregar una tarea
function agregarTarea() {
  // Obtenemos el texto de la tarea del input
  const textoTarea = inputTarea.value.trim();

  // Si el texto no está vacío, creamos una nueva tarea
  if (textoTarea !== '') {
    const tarea = {
      texto: textoTarea,
      completada: false
    };

    // Agregamos la tarea al arreglo de tareas
    tareas.push(tarea);

    // Renderizamos la lista de tareas
    renderizarListaTareas();

    // Limpiamos el input
    inputTarea.value = '';
  }
}

// Función para eliminar una tarea
function eliminarTarea(indice) {
  // Eliminamos la tarea del arreglo de tareas
  tareas.splice(indice, 1);

  // Renderizamos la lista de tareas
  renderizarListaTareas();
}

// Función para renderizar la lista de tareas
function renderizarListaTareas() {
  // Limpiamos la lista de tareas
  listaTareas.innerHTML = '';

  // Recorremos el arreglo de tareas
  tareas.forEach((tarea, indice) => {
    // Creamos un elemento de lista para la tarea
    const elementoTarea = document.createElement('li');

    // Agregamos el texto de la tarea al elemento
    elementoTarea.textContent = tarea.texto;

    // Creamos un botón para eliminar la tarea
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'X';
    botonEliminar.className = 'eliminar';

    // Agregamos un evento de click para eliminar la tarea
    botonEliminar.addEventListener('click', () => {
      eliminarTarea(indice);
    });

    // Agregamos el botón de eliminar al elemento de lista
    elementoTarea.appendChild(botonEliminar);

    // Agregamos el elemento de lista a la lista de tareas
    listaTareas.appendChild(elementoTarea);
  });
}

// Agregamos un evento de click al botón de agregar tarea
botonAgregar.addEventListener('click', agregarTarea);

// Renderizamos la lista de tareas inicial
renderizarListaTareas();
