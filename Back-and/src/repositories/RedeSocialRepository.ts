import Commands from "../interfaces/Commands";
import RedesSociais from "../classes/RedesSociais";
import { conexao } from "../database/Config";

export default class RedeSocialRepository implements Commands<RedesSociais>{
    Cadastrar(obj: RedesSociais): Promise<RedesSociais> {
        return new Promise((resolve,reject)=>{   
            let id_end:any;
            conexao.query("INSERT INTO RedeSociais (tipo_redes,identificador) Values (?,?)", [
                obj.tipo,
                obj.identificador,
               ],(erro,end:any)=>{
                    if(erro){
                        return reject(erro)
                    }
                    else{
                       return resolve(obj)
                    }
           
                })})
    }
    Listar(): Promise<RedesSociais[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from  RedeSociais ",(erro,result)=>{
                if (erro) {
                    return reject(erro)
                } else{
                    return resolve(result as RedesSociais[])
                }
            })
           })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atulizar(obj: RedesSociais): Promise<RedesSociais> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<RedesSociais> {
        throw new Error("Method not implemented.");
    }
   

}