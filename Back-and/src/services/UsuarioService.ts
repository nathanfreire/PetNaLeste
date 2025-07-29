import Usuario from "../classes/Usuario";
import UsuarioRepository from "../repositories/UsuarioRepository";
import { Request,Response } from "express";
import bcrypt from "bcrypt"
import { sign,verify } from "jsonwebtoken";

export default class UsuarioService{

    usuRepository = new UsuarioRepository()
    async criptografiaSenha(senha:string){
        let rs = await bcrypt.hash (senha,12)
        return rs
    }
    async cadastroUsuario(req:Request, res:Response){
        const usu:Usuario = new Usuario()
        usu.nome = req.body.nome;
        usu.endereco = req.body.endereco;
        usu.senha = (await this.criptografiaSenha(req.body.senha)).toString()
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

    async ListarPerfilPorId(req:Request, res:Response){
        let id = req.params.id;
        
        try{
            const rs = await this.usuRepository.ListarPerfil(parseInt(id));
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

    async loginUsuario (req:Request, res:Response){
        let us = req.body.usuario
        let sh = req.body.senha
        try{
            const rs = await this.usuRepository.login(us, sh)
            if(rs==null){
                return res.status(404).json({msg:`Usuario ou senha invalidos`})
            }
            bcrypt.compare(sh,rs[0].senha,(erro,igual)=>{
                if(!igual){
                    return res.status(401).json({msg:`Usuario ou senha invalidos`})
            }
            let usuario={
                id_usuario:rs[0].id_usuario,
                nome_usuario:rs[0].nome_usuario,
                foto_usuario:rs[0].foto_usuario,
                id_contato:rs[0].id_contato,
                id_endereco:rs[0].id_endereco,
                id_redes:rs[0].id_redes
            }
            const token = sign(usuario,"$$$#",{expiresIn:"2d"})
            return res.status(200).json({msg:`logado`,payload:usuario, token:token})
        })
        }
        catch(error){
            return res.status(500).json(({msg:`Erro ao tentar logar ${error}`}))
        }
    }
}