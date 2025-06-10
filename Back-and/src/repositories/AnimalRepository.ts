import { resolve } from "path";
import Animal from "../classes/Animal";
import { conexao } from "../database/Config";
import Commands from "../interfaces/Commands";


export default class AnimalRepository implements Commands<Animal>{
    Cadastrar(obj: Animal): Promise<Animal> {
     return new Promise((resolve,reject)=>{   
        let id_end:any;
        conexao.query("INSERT INTO endereco (tipo_logradouro,logradouro,numero,complemento,cep,bairro) Values (?,?,?,?,?,?)", [
            obj.endereco.tipo_logradouro,
            obj.endereco.logradouro,
            obj.endereco.numero,
            obj.endereco.complemento,
            obj.endereco.cep,
            obj.endereco.bairro],(erro,end:any)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    id_end = end.insertID
                }
        conexao.query("INSERT INTO usuario (nome_usuario,senha,foto_usuario,id_contato,id_endereco,id_redes) Values (?")
            })})
    }
    Listar(): Promise<Animal[]> {
        throw new Error("Method not implemented.");
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atulizar(obj: Animal): Promise<Animal> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Animal> {
        throw new Error("Method not implemented.");
    }

}