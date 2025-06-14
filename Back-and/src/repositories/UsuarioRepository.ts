
import Usuario from "../classes/Usuario";
import Commands from "../interfaces/Commands";
import { conexao } from "../database/Config";


export default class UsuarioRepository implements Commands <Usuario>{
    Cadastrar(obj: Usuario): Promise<Usuario> {
        return new Promise((resolve, reject) => {
            let id_end: any;
            let id_con: any;
    
            conexao.query("INSERT INTO endereco (tipo_logradouro,logradouro,numero,complemento,cep,bairro) VALUES (?,?,?,?,?,?)", [
                obj.endereco?.tipo_logradouro,
                obj.endereco?.logradouro,
                obj.endereco?.numero,
                obj.endereco?.complemento,
                obj.endereco?.cep,
                obj.endereco?.bairro
            ], (erro, end: any) => {
                if (erro) {
                    return reject(erro);
                } else {
                    id_end = end.insertId;
                }
    
                conexao.query("INSERT INTO contato (id_redes,telefone_residencial,telefone_celular,email) VALUES (?,?,?,?)", [
                    obj.contato.redes,
                    obj.contato.telefone_residencial,
                    obj.contato.celular,
                    obj.contato.email
                ], (erro, end: any) => {
                    if (erro) {
                        return reject(erro);
                    } else {
                        id_con = end.insertId;
                    }
    
                    conexao.query("INSERT INTO usuario (nome_usuario,senha,foto_usuario,id_contato,id_endereco,id_redes) VALUES (?,?,?,?,?,?)", [
                        obj.nome,
                        obj.senha,
                        obj.foto,
                        id_con,
                        id_end,
                        obj.contato.redes
                    ], (error, result) => {
                        if (error) {
                            return reject(error);
                        } else {
                            return resolve(obj);
                        }
                    });
                });
            });
        });
    }
    
    Listar(): Promise<Usuario[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from usuario",(erro,result)=>{
                if (erro) {
                    return reject(erro)
                } else{
                    return resolve(result as Usuario[])
                }
            })
           })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atulizar(obj: Usuario): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
}