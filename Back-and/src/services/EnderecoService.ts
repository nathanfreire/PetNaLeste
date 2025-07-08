import EnderecoRepository from "../repositories/EnderecoRepository";
import { Request, Response } from "express";

export default class EnderecoService{
    endRepository = new EnderecoRepository();
    async ListarEnderecoPorId(req:Request, res:Response){
        let id = req.params.id;
        
        try{
            const rs = await this.endRepository.ListarPorId(parseInt(id));
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }
}