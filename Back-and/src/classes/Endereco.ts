export default class Endereco{
    id!: number;
    tipo_logradouro!: string;
    logradouro!: string;
    numero!: string;
    complemento?: string;
    cep!: string;
    bairro!: string;
}