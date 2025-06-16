import express from "express"
import cors from "cors"
import UsuarioService from "./services/UsuarioService"
import AnimalService from "./services/AnimalService"

const app = express()
app.use(express.json())
app.use(cors())

const usu = new UsuarioService()
const ani = new AnimalService()

// ################## Usuario ####################
app.get("/api/v1/usuario/listar", (req,res)=>{
    usu.listarUsuario(req,res)
})
app.post("/api/v1/usuario/cadastro", (req,res)=>{
    usu.cadastroUsuario(req,res)
})
// ############### Animal #######################
app.get("/api/v1/animal/listar", (req,res)=>{
    ani.listarAnimal(req,res)
})
app.post("/api/v1/animal/cadastro", (req,res)=>{
    ani.cadastrarAnimal(req,res)
})
//#############################
app.listen(5000, '0.0.0.0', () => {
    console.log('Online na porta 5000 (acesse de qualquer IP)');
});
  