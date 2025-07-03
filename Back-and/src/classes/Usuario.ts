import Contato from "./Contato"
import Endereco from "./Endereco"
import Redes from "./RedesSociais"

export default class Usuario {
    id?: number
    nome!: string
    senha!:string
    foto?:string
    contato!: Contato
    endereco?: Endereco
    redes?: Redes
    
}