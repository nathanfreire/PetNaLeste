//-------- codigo front, carregar animais --------//

function carregar_animal() {

    let idpet = window.location.search.split('=');

    idpet = dt.id_animal;
    const div_animal = document.getElementById("animais");
    fetch(`http://127.0.0.1:5000/api/v1/animal/listarporid/${idpet}`)
        .then((res) => res.json())
        .then((dt) => {
            console.log(dt)
            
            let div_img = document.createElement("div");
            div_img.setAttribute("id", "div_img");
            let div_capa = document.createElement("div");
            div_capa.setAttribute("id", "div_capa");
            let img_capa = document.createElement("img");
            img_capa.src = dt[0].foto_animal;

            //adicionar a imagem da capa a div capa
            div_capa.appendChild(img_capa)

            //adicionar a div capa a div imagem
            div_img.appendChild(div_capa)



            let div_miniatura = document.createElement("div");
            div_miniatura.setAttribute("id", "div_miniatura");
            let img_miniatura1 = document.createElement("img");
            let img_miniatura2 = document.createElement("img");
            let img_miniatura3 = document.createElement("img");
            img_miniatura1.src = dt[0].foto1;
            img_miniatura2.src = dt[0].foto2;
            img_miniatura3.src = dt[0].foto3;

            //Colocar as fotos de miniatura dentro da div miniatura
            div_miniatura.appendChild(img_miniatura1);
            div_miniatura.appendChild(img_miniatura2);
            div_miniatura.appendChild(img_miniatura3);

            img_miniatura1.addEventListener("click", () => img_capa.src = dt[0].foto1);
            img_miniatura2.addEventListener("click", () => img_capa.src = dt[0].foto2);
            img_miniatura3.addEventListener("click", () => img_capa.src = dt[0].foto3);

            //Colocar a div miniatura dentro da div imagem
            div_img.appendChild(div_miniatura);

            //Colocar a div de imagens dentro da div animais
            div_animal.appendChild(div_img)

            let div_titulo_descricao = document.createElement("div");
            div_titulo_descricao.setAttribute("id", "div_titulo_descricao");

            let h3_titulo = document.createElement("h3");
            h3_titulo.innerHTML = dt[0].nome;

            let p_descricao = document.createElement("p");
            p_descricao.innerHTML = dt[0].descricao;

            //adicionar o titulo e a descricao dentro da div titulo descricao
            div_titulo_descricao.appendChild(h3_titulo);
            div_titulo_descricao.appendChild(p_descricao);

            div_animal.appendChild(div_titulo_descricao);

        })

}




//-------- FIM - codigo front, carregar animais --------//



