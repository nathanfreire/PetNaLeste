import { resolve } from "path";
import Animal from "../classes/Animal";
import { conexao } from "../database/Config";
import Commands from "../interfaces/Commands";
import { error } from "console";


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
        conexao.query("INSERT INTO animal (id_usuario,tipo_animal,raca,cor,porte,sexo,data_encontrado,data_perdido,id_endereco,foto_animal,status,descricao) Values (?,?,?,?,?,?,?,?,?,?,?,?)",
            [obj.usuario,
            obj.tipo_animal,
            obj.raca,
            obj.cor,
            obj.porte,
            obj.sexo,
            obj.data_encontrado,
            obj.data_perdido,
            id_end,
            obj.foto,
            obj.status,
            obj.descricao
            ],(error,result)=>{
                if (error) {
                    return reject (error)
                } else {
                    return resolve(obj)
                }
            })
            })})
    }
    Listar(): Promise<Animal[]> {
       return new Promise((resolve,reject)=>{
        conexao.query("Select * from animal",(erro,result)=>{
            if (erro) {
                return reject(erro)
            } else{
                return resolve(result as Animal[])
            }
        })
       })
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