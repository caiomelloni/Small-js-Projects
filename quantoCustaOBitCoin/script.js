// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const preco = document.querySelector('.preco');

function atualiza() {

    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(valores => {
        console.log( 'rodou')
        preco.classList.toggle('rodar');
        preco.innerText = valores.BRL.buy;
    })
}

atualiza();

setInterval(atualiza, 30000);