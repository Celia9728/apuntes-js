/* TIPOS DE VARIABLES */
let hola; // Se pone como no inicializada
var adios; // Se crea como undefined y crea el espacio de memoria cuando el ejecuta el script y antes de leer las lineas
const hello = 'hello'; // La constante no varia su valor, se reserva un espacio en memoria y DEBE inicializarse cuando se crea.

/* PUNTO Y COMA?*/

let student_from = 'OpenWebinars';
var course = 'JavaScript for begginers';
let year = 2025; /* Si no se pone punto y coma hay un salto de linea despues se lo traga */

console.log(
  `Yo soy estudiante en $(student_from) haciendo el curso de $(course) en el año (year)`
);

/* CASE SENSITIVE */
/**
 * JavaScript distinge entre mayuscula y minuscula,
 * por lo tanto podriamos tener varias variables con el mismo nombre
 * simplemente cambiando las mayusculas y minusculas.
 */
var nombre = 'Carlos';
var Nombre = 'Pedro';
var nimbrE = 'anA';

console.log(nombre);
console.log(Nombre);
console.log(nombrE);

/* PALABRAS RESERVADAS */
/**
 * var, let, function, if, else, try, catch, for, while
 */

/* REGLAS DE NOMBRADO */
/**
 * Mayusculas
 * minusculas
 * 09yletras
 * guiones_bajos
 */

var declaracion;
var _manifiesto;
var Ruta88;
var guiaParaPrincipiantes;
var Cajon_de_sastre;

/* HOISTING */
/** JavaScrip no mueve tu variable arriba, aquellas variaboles que define con var
 * les reserva un espacio en memoria desde el momento que que se ejecuta el scrip
 * antes de ejecutar una sola linea.
 */

/* Con let nos dice que no se puede acceder antes de su inicialización
 * Con var nos sale que es undefined, pero no saca el valor que esta definido abajo. */
console.log(city, town); /* Solo da error con let */

let city = 'Malaga';
var town = 'Ciudad jardin';

console.log(city, town); /* Esto lo hace correctamente. */
