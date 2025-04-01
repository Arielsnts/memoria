const cartas_lista = [
    { nome: "batata", image: "image/batata.jpg" },
    { nome: "burguer", image: "image/burguer.jpg" },
    { nome: "cookie", image: "image/cookie.jpg" },
    { nome: "hotdog", image: "image/hotdog.jpg" },
    { nome: "pizza", image: "image/pizza.jpg" },
    { nome: "sorvete", image: "image/sorvete.jpg" },
    { nome: "batata", image: "image/batata.jpg" },
    { nome: "burguer", image: "image/burguer.jpg" },
    { nome: "cookie", image: "image/cookie.jpg" },
    { nome: "hotdog", image: "image/hotdog.jpg" },
    { nome: "pizza", image: "image/pizza.jpg" },
    { nome: "sorvete", image: "image/sorvete.jpg" }
];

cartas_lista.sort(() => 0.5 - Math.random());

const jogo = document.querySelector('.jogo');
const resultado = document.querySelector('#resultado');
const escolha = [];
const IDescolha = [];
const acerto = [];

const criarJogo = (index = 0) => {
    if (index >= cartas_lista.length) return;

    const carta = document.createElement('img');
    carta.setAttribute('src', 'image/naipe.jpg');
    carta.setAttribute('data-id', index);
    carta.addEventListener('click', virar);
    jogo.appendChild(carta);

    criarJogo(index + 1);
};

const checagem = () => {
    const cartas = document.querySelectorAll('img');
    const IDopcao1 = IDescolha[0];
    const IDopcao2 = IDescolha[1];

    if (escolha[0] === escolha[1]) {
        alert("ENCONTROU!");
        cartas[IDopcao1].style.visibility = "hidden";
        cartas[IDopcao2].style.visibility = "hidden";
        acerto.push(escolha[0]);
    } else {
        cartas[IDopcao1].setAttribute('src', 'image/naipe.jpg');
        cartas[IDopcao2].setAttribute('src', 'image/naipe.jpg');
        alert("Errado. Tente novamente");
    }

    escolha.length = 0; 
    IDescolha.length = 0; 
    resultado.textContent = acerto.length;

    if (acerto.length === cartas_lista.length / 2) {
        resultado.textContent = 'Parabéns! Você venceu!';
    }
};

function virar() {
    const IDcarta = this.getAttribute('data-id');
    escolha.push(cartas_lista[IDcarta].nome);
    IDescolha.push(IDcarta);
    this.setAttribute('src', cartas_lista[IDcarta].image);
    
    if (escolha.length === 2) {
        setTimeout(checagem, 500)
    }
}

criarJogo();
