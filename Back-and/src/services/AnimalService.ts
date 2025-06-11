import { Request, Response } from "express";
import Animal from "../classes/Animal";
import AnimalRepository from "../repositories/AnimalRepository";

export default class AnimalService{

    aniRepository = new AnimalRepository();
    async cadastrarAnimal(req:Request, res:Response){
        const ani:Animal = new Animal()
            ani.usuario = req.body.usuario;
            ani.endereco = req.body.endereco;
            ani.tipo_animal = req.body.tipo_animal;
            ani.raca = req.body.raca;
            ani.cor = req.body.cor;
            ani.porte = req.body.porte;
            ani.sexo = req.body.sexo;
            ani.data_encontrado = req.body.data_encontrado;
            ani.data_perdido = req.body.data_perdido;
            ani.foto = req.body.foto;
            ani.status = req.body.status;
            ani.descricao = req.body.descricao;
            try {
                const rs = await this.aniRepository.Cadastrar(ani);
                return res.status(201).json(rs);
            }
            catch (error) {
                return res.status(500).json(error)
            }
    }
    async listarAnimal (req:Request, res:Response){
        try {
            const rs = await this.aniRepository.Listar
            return res.status(200).json(rs)

        } catch (error) {
            return res.status(500).json(error)
        }
    }
}