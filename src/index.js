import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

// Connect to MongoDB env variable
const mongoUser = process.env.MONGO_INITDB_ROOT_USERNAME
const mongoPwd = process.env.MONGO_INITDB_ROOT_PASSWORD
const mongoDb = process.env.MONGO_DATABASE
const mongoHost = process.env.MONGO_DATABASE_HOST
const mongoPort = process.env.MONGO_DATABASE_PORT
 
// URL de conexión a MongoDB utilizando las variables de entorno
// const mongoUrl = `mongodb://localhost/${mongoDb}`;
const mongoUrl = `mongodb://${mongoUser}:${mongoPwd}@${mongoHost}:${mongoPort}/${mongoDb}`;
console.log(mongoUrl)

// Conectarse a MongoDB
await mongoose.connect(mongoUrl)

console.log('Conectado a MongoDB')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  email: {
    type: String,
    required: true
  }
})
//VALIDA QUE TENFA UNA ESCTRUCTURA DE CORREO
schema.path('email').validate(async function (value) {
  return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
}, 'Invalid email');

const User = mongoose.model('User', schema);


try {
  const user = await User.create({
    name: 'John',
    age: 30,
    email: 'john.due@yopmail.com'
  });
  // const userTwo = await User.create({
  //   name: 'John',
  //   age: 30,
  //   email: 'john.due'
  // });
  console.log(`User created: ${JSON.stringify(user)}`)
  //OBTENER TODOS LOS USUARIOS
  const users = await User.find();
  console.log(`Users: ${JSON.stringify(users)}`)
} catch (error) {
  console.error(`Error creating user: ${error}`)
}
