import Endereco from "./Endereco"
import Usuario from "./Usuario"

export default class Animal {
    id!: number
    usuario!: Usuario
    endereco!: Endereco
    tipo_animal!: string
    raca!: string
    cor!: string
    porte!: string
    sexo!: string
    data_encontrado?: string
    data_perdido?: string
    foto!: string
    status!: string
    descricao!: string
}