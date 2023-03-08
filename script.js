let filme = {
    filme1 : {
        titulo : 'The Last of US',
        descricao : 'Vinte anos após a queda da civilização, Joel é contratado pra tirar Ellie de uma zona de quarentena perigosa. O que começa como um pequeno trabalho, logo se transforma em uma jornada brutal pela sobrevivência.',
        imagem : {url:'the-last-of-us-baner2.webp' },
        trailer : 'https://www.youtube.com/watch?v=uLtkt8BonwM'
    },
    filme2 : {
        titulo : 'Breaking Bad',
        descricao : 'Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.',
        imagem : {url:'bbBaner.jpg' },
        trailer : 'https://www.youtube.com/watch?v=_Z-PTJhf0Po'
    },
    filme3 : {
        titulo : 'Gato de Botas 2',
        descricao : 'O Gato de Botas finalmente compreende que sua inclinação pelo perigo pode ter severas consequências. Após queimar oito de suas nove vidas, ele embarca na sua mais importante aventura em busca do tempo perdido.',
        imagem : {url:'gato.webp' },
        trailer : 'https://www.youtube.com/watch?v=sLk94T-hS78'
    },
    filme4 : {
        titulo : 'Homem Aranha',
        descricao : 'Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando um feitiço para reverter o evento não sai como o esperado, o Homem-Aranha e seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso.',
        imagem : {url:'homem-aranha-banner.jpg' },
        trailer : 'https://www.youtube.com/watch?v=FDNNHh7TRN0'
    },
    filme5 : {
        titulo : 'The Batman',
        descricao : 'Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.',
        imagem : {url:'batmanBaner.jpg' },
        trailer : 'https://www.youtube.com/watch?v=-FZ-pPFAjYY'
    },
}

let filmes = filme

function filmeOne(filmes) {
    
    let title = document.querySelector('#title-desc');
    let descrition = document.querySelector('#descricaoFilme');
    let image = document.querySelector('#main');
    let trailer = document.querySelector('#linkTrailer')

    title.innerHTML = filme.filme1.titulo;
    descrition.innerHTML = filme.filme1.descricao;
    image.style.backgroundImage = `url(${filme.filme1.imagem.url})`;
    trailer.innerHTML = `<a href="${filme.filme1.trailer}" target="_blank" id="linkTrailer"> <button id="btn-watch">Ver trailer</button> </a>`
}


function filmeTwo(filmes) {
    let title2 = document.querySelector('#title-desc');
    let descrition2 = document.querySelector('#descricaoFilme');
    let image2 = document.querySelector('#main');
    let trailer2 = document.querySelector('#linkTrailer')

    title2.innerHTML = filme.filme2.titulo;
    descrition2.innerHTML = filme.filme2.descricao;
    image2.style.backgroundImage = `url(${filme.filme2.imagem.url})`;
    trailer2.innerHTML = `<a href="${filme.filme2.trailer}" target="_blank" id="linkTrailer"> <button id="btn-watch">Ver trailer</button> </a>`
}


function filmeTre(filmes) {
    let title3 = document.querySelector('#title-desc');
    let descrition3 = document.querySelector('#descricaoFilme');
    let image3 = document.querySelector('#main');
    let trailer3 = document.querySelector('#linkTrailer')

    title3.innerHTML = filme.filme3.titulo;
    descrition3.innerHTML = filme.filme3.descricao;
    image3.style.backgroundImage = `url(${filme.filme3.imagem.url})`;
    trailer3.innerHTML = `<a href="${filme.filme3.trailer}" target="_blank" id="linkTrailer"> <button id="btn-watch">Ver trailer</button> </a>`
}


function filmeFor(filmes) {
    let title4 = document.querySelector('#title-desc');
    let descrition4 = document.querySelector('#descricaoFilme');
    let image4 = document.querySelector('#main');
    let trailer4 = document.querySelector('#linkTrailer')

    title4.innerHTML = filme.filme4.titulo;
    descrition4.innerHTML = filme.filme4.descricao;
    image4.style.backgroundImage = `url(${filme.filme4.imagem.url})`;
    trailer4.innerHTML = `<a href="${filme.filme4.trailer}" target="_blank" id="linkTrailer"> <button id="btn-watch">Ver trailer</button> </a>`
}


function filmeFive(filmes) {
    let title5 = document.querySelector('#title-desc');
    let descrition5 = document.querySelector('#descricaoFilme');
    let image5 = document.querySelector('#main');
    let trailer5 = document.querySelector('#linkTrailer')

    title5.innerHTML = filme.filme5.titulo;
    descrition5.innerHTML = filme.filme5.descricao;
    image5.style.backgroundImage = `url(${filme.filme5.imagem.url})`;
    trailer5.innerHTML = `<a href="${filme.filme5.trailer}" target="_blank" id="linkTrailer"> <button id="btn-watch">Ver trailer</button> </a>`
}

function navBar() {
    let options = document.querySelector('#list');
    options.style.display = 'flex' 
}
function closeModal() {
    let option = document.querySelector('#list');
    option.style.display = 'none' 
}

