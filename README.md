# 🐶 PetNaLeste - Projeto Integrador (SENAC)
PetNaLeste é um projeto social que tem como objetivo ajudar tutores da Zona Leste de São Paulo a reencontrarem seus animais de estimação perdidos. Por meio de uma plataforma acessível e colaborativa, o projeto conecta pessoas que perderam seus pets com aquelas que encontraram animais vagando pelas ruas ou abrigos da região.

O PetNaLeste promove a conscientização sobre a importância da identificação animal e cuidados com os pets, fortalecendo a rede de apoio entre moradores e protetores da causa animal.

---

## Objetivo do Projeto:

-
-

---

## Público Alvo:

-
-

---

## 🚀 Tecnologias Utilizadas:
(Norma SOLID)
- HTML 5
- CSS 3
- JavaScript
- Bootstrap
- TypeScript
- Node.js
- MySQL

---

## Configuração:

1. Instale as dependências com:

```bash 
npm install
```

2. Configure as variáveis de ambiente no arquivo .env, como:

```bash 
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=dbpethouse
JWT_SECRET=sua_chave_secreta
```

3. Inicie o servidor com:

```bash 
node index.js
```

---

## Banco de Dados PetNaLeste

### Tabela Usuario:

```bash 
CREATE TABLE `Usuario` (
    `id_usuario` INT PRIMARY KEY AUTO_INCREMENT,
    `nome_usuario` VARCHAR(50) NOT NULL,
    `senha` VARCHAR(30) NOT NULL,
    `foto_usuario` VARCHAR(500),
    `id_contato` INT NOT NULL,
    `id_endereco` INT NOT NULL,
    `id_redes` INT,
    FOREIGN KEY (id_contato) REFERENCES Contato(id_contato),
    FOREIGN KEY (id_endereco) REFERENCES Endereco(id_endereco),
    FOREIGN KEY (id_redes) REFERENCES RedeSociais(id_redes)
);
```

### Tabela Animal:

```bash 
CREATE TABLE `Animal` (
    `id_animal` INT PRIMARY KEY AUTO_INCREMENT,
    `id_usuario` INT NOT NULL,
    `id_endereco` INT NOT NULL,
    `tipo_animal` VARCHAR(50) NOT NULL,
    `raca` VARCHAR(30),
    `cor` VARCHAR(20),
    `porte` VARCHAR(20),
    `sexo` VARCHAR(20),
    `data_encontrado` DATE NOT NULL,
    `data_perdido` DATE,
    `foto_animal` VARCHAR(500),
    `status` VARCHAR(70) NOT NULL,
    `descricao` VARCHAR(500),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_endereco) REFERENCES Endereco(id_endereco)
);
```

### Tabela Contato:

```bash 
CREATE TABLE `Contato` (
    `id_contato` INT PRIMARY KEY AUTO_INCREMENT,
    `id_redes` INT NOT NULL,
    `telefone_residencial` VARCHAR(15),
    `telefone_celular` VARCHAR(15),
    `email` VARCHAR(100)
);
```

### Tabela Endereço:

```bash 
CREATE TABLE `Endereco` (
    `id_endereco` INT PRIMARY KEY AUTO_INCREMENT,
    `tipo_logradouro` ENUM('RUA','AVENIDA','ALAMEDA','TRAVESSA','VIELA','ESTRADA','RODOVIA') NOT NULL,
    `logradouro` VARCHAR(50) NOT NULL,
    `numero` VARCHAR(5) NOT NULL,
    `complemento` VARCHAR(255),
    `cep` VARCHAR(10) NOT NULL,
    `bairro` VARCHAR(30) NOT NULL
);
```

### Tabela Redes Sociais:

```bash 
CREATE TABLE `RedeSociais` (
    `id_redes` INT PRIMARY KEY AUTO_INCREMENT,
    `tipo_redes` VARCHAR(30) NOT NULL,
    `identificador` VARCHAR(100) NOT NULL
);
```

## CHAVES PRIMÁRIAS E ÍNDICES

```bash
```

```bash
```

```bash
```

```bash
```

## CHAVES ESTRANGEIRAS

```bash
```

```bash
```

```bash
```

```bash
```

---

## Seções 

- Home
- Encontre seu Pet
- Como Funciona
- Login/Cadastrar-se
- Revise e confirme sua reserva
- Contato

---

### "Diagrama do Banco de dados"
![](Front-and/img/Diagrama-Banco.png)
### ""
![](src/public/img/.png)
### ""
![](src/public/img/.png)
### ""
![](src/public/img/.png)
### ""
![](src/public/img/.png)
### ""
![](src/public/img/.png)

![GitHub License](https://img.shields.io/github/license/nathanfreire/PetNaLeste)

## Autores
Carlos Antonio,
Gabriel Lima,
Lucas Henrique,
Nathan Freire

---

## Status do Projeto

- Em Desenvolvimento

  ---

