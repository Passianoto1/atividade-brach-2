function somar(a, b) {
  return a - b; // BUG 1: operação errada (deveria ser +)
}

function subtrair(a, b) {
  return a + b; // BUG 2: operação errada (deveria ser -)
}

function multiplicar(a, b) {
  return a * b; // BUG 3: não é bug aqui, mas...
}

console.log("Soma de 5 e 3:", somar(5, 3));         // Esperado: 8
console.log("Subtração de 10 e 4:", subtrair(10, 4)); // Esperado: 6
console.log("Multiplicação de 2 e 7:", multiplicar(2)); // BUG 3: argumento faltando
