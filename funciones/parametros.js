// PARAMETROS
// Los parametros se pasan por funciones.
// Si no le pasamos uno de los 2 parametros el valor seria undefined.
function conParametros(name, year) {
  let saludo = 'Hola me llamo ' + name + ' y tengo ' + year;
  return saludo;
}

let saludar = conParametros(Celia, 27);
console.log(saludar);

// ARGUMENTOS
/**
 * Son los parametros que tienen un valor por defecto
 * si al invocar la funcion no se les asigna ningun valor.
 * En su lugar pone el valor asignado en el parametro.
 */

function conArgumentos(name = 'Celia', year = 27) {
  let saludo = 'Hola me llamo ' + name + ' y tengo ' + year;
  return saludo;
}

let saludar2 = conArgumentos('Noemí', 23);
let saludar3 = conArgumentos();

console.log(saludar2, saludar3);
