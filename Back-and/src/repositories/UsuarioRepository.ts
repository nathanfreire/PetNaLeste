
import Usuario from "../classes/Usuario";
import Commands from "../interfaces/Commands";
import { conexao } from "../database/Config";
import CommandsUsuario from "../interfaces/CommandsUsuario";
import { ResultSetHeader } from 'mysql2';



export default class UsuarioRepository implements CommandsUsuario <Usuario>{
    login(usuario: string, senha: string):Promise <any> {
        return new Promise((resolve,reject)=>{
            conexao.query(`SELECT * from Usuario WHERE nome_usuario=?`,
             [
                 usuario
             ], (erro,result:any)=>{
                 if(erro){
                     return reject(erro)
                 }
                 else{
                     return resolve(result)
                 }
             }
     
            )
         })
    }
    Cadastrar(obj: Usuario): Promise<Usuario> {
        return new Promise((resolve, reject) => {
            let id_end: any;
            let id_con: any;
    
            // Inserir Endereço
            conexao.query(
                "INSERT INTO Endereco (tipo_logradouro,logradouro,numero,complemento,cep,bairro) VALUES (?,?,?,?,?,?)",
                [
                    obj.endereco?.tipo_logradouro,
                    obj.endereco?.logradouro,
                    obj.endereco?.numero,
                    obj.endereco?.complemento,
                    obj.endereco?.cep,
                    obj.endereco?.bairro
                ],
                (erro, end: any) => {
                    if (erro) {
                        return reject(erro);
                    } else {
                        id_end = end.insertId;
                    }
    
                    // Extrair id_redes do objeto redes, se existir
                    const idRedesContato = obj.contato.redes ? obj.contato.redes.id : null;
    
                    // Inserir Contato
                    conexao.query(
                        "INSERT INTO Contato (id_redes,telefone_residencial,telefone_celular,email) VALUES (?,?,?,?)",
                        [
                            idRedesContato,
                            obj.contato.telefone_residencial,
                            obj.contato.celular,
                            obj.contato.email
                        ],
                        (erro, con: any) => {
                            if (erro) {
                                return reject(erro);
                            } else {
                                id_con = con.insertId;
                            }
    
                            // Inserir Usuario
                            conexao.query(
                                "INSERT INTO Usuario (nome_usuario,senha,foto_usuario,id_contato,id_endereco,id_redes) VALUES (?,?,?,?,?,?)",
                                [
                                    obj.nome,
                                    obj.senha,
                                    obj.foto,
                                    id_con,
                                    id_end,
                                    idRedesContato
                                ],
                                (error, result: ResultSetHeader) => {
                                    if (error) {
                                        return reject(error);
                                    } else {
                                        obj.id = result.insertId; // agora o TypeScript sabe que insertId existe
                                        return resolve(obj);
                                    }
                                }
                            );
                        }
                    );
                }
            );
        });
    }
    
    Listar(): Promise<Usuario[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from Usuario",(erro,result)=>{
                if (erro) {
                    return reject(erro)
                } else{
                    return resolve(result as Usuario[])
                }
            })
           })
    }

    ListarPerfil(id:number): Promise<any[]> {
        return new Promise((resolve,reject)=>{
            conexao.query(`select 
Usuario.id_Usuario,
Usuario.nome_Usuario,
Usuario.foto_Usuario,
Contato.id_Contato,
Contato.telefone_residencial,
Contato.telefone_celular,
RedeSociais.id_redes,
RedeSociais.tipo_redes,
RedeSociais.identificador,
Animal.id_Animal,
Animal.tipo_Animal,
Animal.raca,
Animal.cor,
Animal.porte,
Animal.sexo,
Animal.foto_Animal,
Animal.descricao

from Usuario inner join Contato on Usuario.id_contato=Contato.id_contato 
inner join RedeSociais on Usuario.id_redes=RedeSociais.id_redes 
inner join Animal on Usuario.id_usuario=Animal.id_usuario 
where Usuario.id_usuario=${id}`,(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as any[])
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