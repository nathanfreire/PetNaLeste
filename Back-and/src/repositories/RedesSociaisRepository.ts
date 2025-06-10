import Redes from "../classes/RedesSociais";
import Commands from "../interfaces/Commands";

export default class RedesSociaisRepository implements Commands<Redes>{
    Cadastrar(obj: Redes): Promise<Redes> {
        throw new Error("Method not implemented.");
    }
    Listar(): Promise<Redes[]> {
        throw new Error("Method not implemented.");
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atulizar(obj: Redes): Promise<Redes> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Redes> {
        throw new Error("Method not implemented.");
    }
}