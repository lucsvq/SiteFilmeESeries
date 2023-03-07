let filme = {
    filme1 : {
        titulo : 'The Last of US',
        descricao : 'Vinte anos após a queda da civilização, Joel é contratado pra tirar Ellie de uma zona de quarentena perigosa. O que começa como um pequeno trabalho, logo se transforma em uma jornada brutal pela sobrevivência.',
        imagem : {url:'the-last-of-us-baner2.webp' }
    },
    filme2 : {
        titulo : 'Breaking Bad',
        descricao : 'Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.',
        imagem : {url:'bbBaner.jpg' }
    },
    filme3 : {
        titulo : 'Gato de Botas 2',
        descricao : 'O Gato de Botas finalmente compreende que sua inclinação pelo perigo pode ter severas consequências. Após queimar oito de suas nove vidas, ele embarca na sua mais importante aventura em busca do tempo perdido.',
        imagem : {url:'gato.webp' }
    },
    filme4 : {
        titulo : 'Homem Aranha',
        descricao : 'Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando um feitiço para reverter o evento não sai como o esperado, o Homem-Aranha e seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso.',
        imagem : {url:'homem-aranha-banner.jpg' }
    },
    filme5 : {
        titulo : 'The Batman',
        descricao : 'Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.',
        imagem : {url:'batmanBaner.jpg' }
    },
}

let filmes = filme

function filmeOne(filmes) {
    
    let title = document.querySelector('#title-desc');
    let descrition = document.querySelector('#descricaoFilme');
    let image = document.querySelector('#main');

    title.innerHTML = filme.filme1.titulo;
    descrition.innerHTML = filme.filme1.descricao;
    image.style.backgroundImage = `url(${filme.filme1.imagem.url})`;
}


function filmeTwo(filmes) {
    let title2 = document.querySelector('#title-desc');
    let descrition2 = document.querySelector('#descricaoFilme');
    let image2 = document.querySelector('#main');

    title2.innerHTML = filme.filme2.titulo;
    descrition2.innerHTML = filme.filme2.descricao;
    image2.style.backgroundImage = `url(${filme.filme2.imagem.url})`;
}


function filmeTre(filmes) {
    let title3 = document.querySelector('#title-desc');
    let descrition3 = document.querySelector('#descricaoFilme');
    let image3 = document.querySelector('#main');

    title3.innerHTML = filme.filme3.titulo;
    descrition3.innerHTML = filme.filme3.descricao;
    image3.style.backgroundImage = `url(${filme.filme3.imagem.url})`;
}


function filmeFor(filmes) {
    let title4 = document.querySelector('#title-desc');
    let descrition4 = document.querySelector('#descricaoFilme');
    let image4 = document.querySelector('#main');

    title4.innerHTML = filme.filme4.titulo;
    descrition4.innerHTML = filme.filme4.descricao;
    image4.style.backgroundImage = `url(${filme.filme4.imagem.url})`;
}


function filmeFive(filmes) {
    let title5 = document.querySelector('#title-desc');
    let descrition5 = document.querySelector('#descricaoFilme');
    let image5 = document.querySelector('#main');

    title5.innerHTML = filme.filme5.titulo;
    descrition5.innerHTML = filme.filme5.descricao;
    image5.style.backgroundImage = `url(${filme.filme5.imagem.url})`;
}

function navBar() {
    let options = document.querySelector('#list');
    options.style.display = 'flex' 
}
function closeModal() {
    let option = document.querySelector('#list');
    option.style.display = 'none' 
}

