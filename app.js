const express = require('express')
const app = express()
const port = 3000

// Importo/requiero el archivo index.js de la carpeta Routes para poder utilizar sus rutas
const indexRoutes = require("./routes/index")

//Requiero el archivo user
const userRoutes = require("./routes/user")

//Vamos a crear un archivo solo que controle las rutas
// ruta principal
// utilize ( ruta: localhost:3000/)
// Ejecute el archivo index.js de la carpeta Routes
app.use("/", indexRoutes)

//Utilizo el archivo user
// utilize ( ruta: localhost:3000/user)
app.use("/user", userRoutes)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})