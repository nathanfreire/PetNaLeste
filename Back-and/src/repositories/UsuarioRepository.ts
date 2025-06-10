import Usuario from "../classes/Usuario";
import Commands from "../interfaces/Commands";

export default class UsuarioRepository implements Commands <Usuario>{
    Cadastrar(obj: Usuario): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    Listar(): Promise<Usuario[]> {
        throw new Error("Method not implemented.");
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