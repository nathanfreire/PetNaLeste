import Endereco from "../classes/Endereco";
import { conexao } from "../database/Config";
import Commands from "../interfaces/Commands";

export default class EnderecoRepository implements Commands<Endereco>{
    Cadastrar(obj: Endereco): Promise<Endereco> {
        throw new Error("Method not implemented.");
    }
    Listar(): Promise<Endereco[]> {
        throw new Error("Method not implemented.");
    }
    ListarPorId(id:number): Promise<Endereco[]> {
        return new Promise((resolve,reject)=>{
            conexao.query(`Select * from Endereco Where id_endereco=${id}`,(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as Endereco[])
                }
            })
        })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atulizar(obj: Endereco): Promise<Endereco> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Endereco> {
        throw new Error("Method not implemented.");
    }
}