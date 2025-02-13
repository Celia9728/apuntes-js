// 📌 Modificando estilos en elementos HTML con JavaScript

// 📍 SELECCIONAR ELEMENTO POR ID
let special = document.getElementById('special');

// 📍 MODIFICANDO ESTILOS CON style (INLINE CSS)
// Cambia el color del texto a rojo
special.style.color = 'red';
// Cambia el fondo del elemento
special.style.backgroundColor = 'yellow';
// Cambia el tamaño de la fuente
special.style.fontSize = '20px';
// Agrega un borde
special.style.border = '2px solid black';

// 📍 MODIFICANDO CLASES CON classList (RECOMENDADO)
// Añadir una clase al elemento
special.classList.add('resaltado');

// Remover una clase del elemento
special.classList.remove('oculto');

// Alternar una clase (la agrega si no está, la quita si está)
special.classList.toggle('activo');

// Verificar si el elemento tiene una clase específica
if (special.classList.contains('resaltado')) {
  console.log("El elemento tiene la clase 'resaltado'");
} else {
  console.log("El elemento NO tiene la clase 'resaltado'");
}
