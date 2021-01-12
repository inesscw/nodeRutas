const express= require("express"); 
const router = require(".");
const routes = express.Router(); 

//localhost:3000/user
router.get("/user", (req, res)=>{
    res.send("ok desde la ruta usuario")
})

//localhost:3000/user/calzado
router.get("/calzado", (req, res)=>{
    res.send("ok desde la ruta usuario 2")
})

module.exports = router; 