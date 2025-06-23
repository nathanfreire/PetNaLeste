import Commands from "./Commands";

export default interface CommandsUsuario<T> extends Commands<T>{
    login (usuario:string,senha:string):any
}