import RedeSocialRepository from "../repositories/RedeSocialRepository";
import { Request, Response } from "express";
import RedesSociais from "../classes/RedesSociais";

export default class RedeSocialService{
    redeRepository = new RedeSocialRepository()

    async cadastrarRedeSocial (req: Request, res:Response){
        const rede:RedesSociais = new RedesSociais()
        rede.tipo = req.body.tipo_redes;
        rede.identificador = req.body.identificador;
        try {
            const rs = await this.redeRepository.Cadastrar(rede);
            return res.status(201).json(rs);
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    async ListarRedeSocial (req:Request, res:Response){
        try {
            const rs = await this.redeRepository.Listar()
            return res.status(200).json(rs)

        } catch (error) {
            return res.status(500).json(error)
        }
    }
}