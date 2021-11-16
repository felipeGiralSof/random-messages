//se declara el arreglo
const messages = [
  "Valentina",
  "Felipe",
  "Estela",
  "Carlos",
  "Ana",
  "David",
  "Jhanca",
  "Deyanira",
  "Jennifer",
  "paulina"
]

//crear funcion para enviar aleatoriamente los nombres del arreglo
const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}

//exportar como un modulo
module.exports = { randomMsg };
