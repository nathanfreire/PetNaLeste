import dotenv from 'dotenv';
dotenv.config();
import express from "express"
import cors from "cors"
import UsuarioService from "./services/UsuarioService"
import AnimalService from "./services/AnimalService"
import EnviarEmailController from "./controllers/EnviarEmailController"
import RedeSocialService from './services/RedeSocialService';
import EnderecoService from './services/EnderecoService';


const app = express()
app.use(express.json())
app.use(cors())
app.use("/fotos",express.static("/fotos"))

const usu = new UsuarioService()
const ani = new AnimalService()
const rede = new RedeSocialService()
const end = new EnderecoService()
const enviarEmailController = new EnviarEmailController();

// ################## Usuario ####################
app.get("/api/v1/usuario/listar", (req,res)=>{
    usu.listarUsuario(req,res)
})
app.post("/api/v1/usuario/cadastro", (req,res)=>{
    usu.cadastroUsuario(req,res)
})
app.post("/api/v1/usuario/login", (req,res)=>{
    usu.loginUsuario(req,res)
})
// ############### Animal #######################
app.get("/api/v1/animal/listar", (req,res)=>{
    ani.listarAnimal(req,res)
})
app.post("/api/v1/animal/cadastro", (req,res)=>{
    ani.cadastrarAnimal(req,res)
})

// ############### RedeSocial ##################
app.get("/api/v1/redesocial/listar", (req,res)=>{
    rede.ListarRedeSocial(req,res)
})
app.post("/api/v1/redesocial/cadastro", (req,res)=>{
    rede.cadastrarRedeSocial(req,res)
})
//=======

app.get("/api/v1/animal/listarporid/:id",(req,res)=>{
    ani.ListarAnimalPorId(req,res);
})
//################## Endereco #################
app.get("/api/v1/endereco/listarporid/:id",(req,res)=>{
    end.ListarEnderecoPorId(req,res);
})

// Rota enviar email
app.post('/enviar-email', (req, res) => {enviarEmailController.handle(req, res)});

app.listen(5000, '0.0.0.0', () => {
    console.log('Online na porta 5000 (acesse de qualquer IP)');
});
  
