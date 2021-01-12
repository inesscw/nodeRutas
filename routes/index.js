// requerimos la libreria express
const express =require("express")
//una funcion/metodo de la libreria express que crea las rutas en el archivo principal
const router = express.Router(); 

//Creamos la ruta que queramos
// localhost:3000/
router.get("/", (req, res)=>{
    res.send("ok desde el archivo ruta")
})

router.get("/", (req, res)=>{
    res.send("ok desde el archivo ruta")
})

router.get("/fabrica", (req, res)=>{
    res.send("ok desde el archivo ruta")
})

//Exportamos el modulo completo
module.exports= router; 