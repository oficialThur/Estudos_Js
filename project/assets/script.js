// Componente de lista de carros
// exemplo importante pra entender o uso de componentes e como eles podem ser reutilizados

let listaCarros = [
    {
        "nome" : "BMW Série 3",
        "img" : "assets/img/car1.jpg",
        "discricao" : "O carro na imagem é um BMW Série 3 (E30), produzido entre 1981 e 1994. Este modelo é conhecido por suas versões esportivas, incluindo o M3, que foi o primeiro modelo desenvolvido pela divisão esportiva da BMW. O M3 E30 se tornou um dos carros de turismo mais bem-sucedidos de todos os tempos, com várias vitórias em corridas como as 24 horas de Nürburgring e Spa-Francorchamps."
    },

    {
        "nome" : "Golf MK4",
        "img" : "assets/img/car2.jpg",
        "discricao" : "O carro na imagem é um Volkswagen Golf Mk4, também conhecido como Golf Sapão no Brasil. Este modelo foi produzido entre 1997 e 2004 na Europa, mas no Brasil, ele continuou sendo fabricado com algumas mudanças até 2014. O Golf Mk4 é popular por sua qualidade e design, sendo considerado por muitos como um dos melhores da linha Golf."
    },

    {
        "nome" : "BMW Série 3 (E30) Touring",
        "img" : "assets/img/car3.jpg",
        "discricao" : "O carro na imagem é um BMW Série 3 (E30) Touring, especificamente um modelo da segunda geração da Série 3 da BMW, produzido entre 1982 e 1994. O E30 é conhecido por suas diversas versões, incluindo sedã, cupê, conversível e a versão perua (Touring) mostrada na imagem. A versão M3 do E30 é um dos esportivos mais cultuados da marca."
    },

    {
        "nome" : "Nissan Silvia S14 ou 240SX", 
        "img" : "assets/img/car4.jpg",
        "discricao" : "O carro na imagem é um Nissan Silvia S14, um cupê esportivo que foi produzido entre 1993 e 1998. Ele também é conhecido como 240SX na América do Norte e 200SX em alguns mercados europeus e australianos. O S14 é uma das gerações mais populares do Silvia, especialmente entre os entusiastas de drift."
    }
];

// Renderizando os cards de carros na página

listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += 
    `   <div class="col mb-4 d-flex justify-content-center">
            <div class="card" style="width: 18rem">
                <img src="${carro.img}" class="card-img-top" style="width: 100%; height: 150px; object-fit: cover;" alt="..." />
                <div class="card-body">
                <h5 class="card-title">${carro.nome}</h5>
                <a href="#" class="btn btn-secondary" onclick="zoomImg('${posicao}')"> <i class="bi bi-zoom-in"></i> </a>
                </div>
            </div>
        </div>
    `
});

// Função para exibir o modal com a imagem ampliada do carro selecionado

function zoomImg(posicao){
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeDoCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.discricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();
}

// dark mode

function alterThemePage(){
    let Theme = document.querySelector("html").getAttribute("data-bs-theme");
    if(Theme === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterThemePage").innerHTML = `<i class="bi bi-moon"></i>`
    }else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterThemePage").innerHTML = `<i class="bi bi-brightness-high"></i>`

    }
}