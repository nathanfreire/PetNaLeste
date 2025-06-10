import mysql from "mysql2"

export const conexao = mysql.createConnection({
    host:"10.26.45.28",
    port:3307,
    user:"root",
    password:"123456",
    database:"PetNaLeste"
}); 

