let salir = 'n'
let numeros = []

while (salir == 'n') {
    numero = prompt('ingresa un número')
    if (numero != null) {
        numeros.push(parseInt(numero))
    }
    let seguir = confirm('desea ingresar mas numeros')
    if (!seguir) {
        salir = 'y'
    }
}

const newArray = []

numeros.map(numero => {
   let numberToString = (num) => Number(num);

   let numberArray = Array.from(String(numero), numberToString);

   if (numero % 3 == 0 && numero % 5 == 0) {
      newArray.push('FizzBuzz');
   } else if (numero % 3 == 0 || numberArray.some((n) => n == 3)) {
      newArray.push('Fizz');
   } else if (numero % 5 == 0 || numberArray.some((n) => n == 5)) {
      newArray.push('Buzz');
   } else {
      newArray.push(numero);
   }
})
window.alert(`Arreglo ingresado: ${numeros}`)
window.alert( `El array formado es: ${newArray}`);