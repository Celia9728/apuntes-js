// Seleccionamos un elemento por su ID
let elemento = document.getElementById('special');

// Modificando el contenido del elemento
// innerHTML cambia el contenido HTML interno del elemento
// outerHTML cambia el contenido HTML incluyendo el propio elemento
elemento.innerHTML = '<strong>Opción Modificada</strong>';
elemento.outerHTML = "<li id='special' class='c'>Opción 3 Modificada</li>";

// Modificando el texto visible sin afectar al HTML
elemento.innerText = 'Texto plano modificado';

// Otras propiedades
// Hacer el elemento arrastrable
elemento.draggable = true;
// Ocultar el elemento
elemento.hidden = false;
// Modificar el índice de tabulación
elemento.tabIndex = 1;
// Agregar un mensaje al pasar el cursor
elemento.title = 'Esto es una opción especial';
// Modificar el ID
elemento.id = 'nuevoID';

// Trabajando con atributos
document.querySelector('li').setAttribute('data-info', 'opcion-especial');

// Comprobar si el elemento tiene atributos
console.log(elemento.hasAttributes()); // true o false

// Comprobar si tiene un atributo específico
console.log(elemento.hasAttribute('class')); // true o false

// Obtener el valor de un atributo
console.log(elemento.getAttribute('class')); // Devuelve el valor de la clase

// Obtener todos los nombres de los atributos
console.log(elemento.getAttributeNames()); // Devuelve un array con los nombres de los atributos
