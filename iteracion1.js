// 1 y 2

const empleados = [
  { name: 'Luis', email: 'Luis@gmail.com' },
  { name: 'Ana', email: 'Ana@gmail.com' },
  { name: 'Andrea', email: 'Andrea@gmail.com' },
]

const [, contactoAna] = empleados

console.log(contactoAna)

const [mailLuis, ,] = empleados

const { name, email } = mailLuis

console.log(email)

//3

let a = 3
let b = 5

;[a, b] = [b, a]

console.log(a, b)

//4

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
}

const { today: maximaHoy, tomorrow: maximaMañana } = HIGH_TEMPERATURES

console.log(maximaHoy, maximaMañana)
