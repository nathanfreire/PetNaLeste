import Usuario from "../classes/Usuario";
import UsuarioRepository from "../repositories/UsuarioRepository";
import { Request,Response } from "express";

export default class UsuarioService{

    usuRepository = new UsuarioRepository()
    async cadastroUsuario(req:Request, res:Response){
        const usu:Usuario = new Usuario()
        usu.nome = req.body.nome;
        usu.endereco = req.body.endereco;
        usu.senha = req.body.senha;
        usu.foto = req.body.foto;
        usu.contato = req.body.contato;
        
        try {
            const rs = await this.usuRepository.Cadastrar(usu);
            return res.status(201).json(rs);
        }
        catch (error) {
            return res.status(500).json(error)
        }
    }
    async listarUsuario (req:Request, res:Response){
        try {
            const rs = await this.usuRepository.Listar()
            return res.status(200).json(rs)

        } catch (error) {
            return res.status(500).json(error)
        }
    }
}