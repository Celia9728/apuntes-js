/**El tipo de la variable se determna en tiempo de ejecución */

// CAMBIO DE TIPO
/**
 * Una misma variable puede ser de diferentes tipos de valor
 * segun el valor que tenga, pues el tipo se determina mientras se esta ejecutando.
 * EL TIPO CAMBIA DE FORMA DINAMICA.
 */

let varible = '1'; // string
variable = true; // boolean
variable = 2; // number

// CASTING DE VARIABLES
/**
 * Cambiar el tipo de la variable sin necesidad
 * de cambiar el valor.
 */

/**
 * FUNCIONES DE CONVERSION:
 *  A numero -> Number()
 * A booleano -> Boolean()
 * A texto -> String()
 * Para null y undefined se le da el valor a la variable y yasta.
 */

let cambiarTipo = '1'; // string

// Para cambiar el tipo
cambiarTipo = Boolean(cambiarTipo); // boolean

let anio = '2025';

// Casting a numero
anio = Number(anio);

// Casting a boolean
anio = Boolean(anio);

// Casting a string
anio = String(anio);

// Casting a null
anio = null;

// Casting a undefined
anio = undefined;
