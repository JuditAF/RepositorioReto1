// * En el fichero index.js (fichero de librería):
// * - Declarar las funciones de la calculadora por separado (suma, resta, producto, división)
// * - Al final del documento index.js escribir la sentencia:
// *   module.exports =
// * A continuación escribir el nombre de las funciones entre {} separados por comas de la librería que se desean exportar

const resta = (op1, op2) => {

    let resultado = op1 - op2;

    return resultado;

}

const multiplicacion = (op1, op2) => {

    let resultado = op1 * op2;

    return resultado;

}

const division = (op1, op2) => {

    let resultado = op1 / op2;

    return resultado.toFixed(3);

}

const cuadrado = (op1) => {

    let resultado = op1 * op1;

    return resultado;
}

module.exports = {resta, multiplicacion, division, cuadrado};

const libreria1 = require ("./index");