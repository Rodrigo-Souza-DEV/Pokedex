let cont = 0;
function inicio() {

    ap();
    setInterval(() => {
        cont += 1;
        document.querySelector('#barra').style.width = cont + '%';
        if (cont > 100) {
            document.querySelector('.container2').style.display = 'none';
             document.querySelector('.pokedex').style.display = 'flex';  
             document.querySelector('.placa-esquerda').style.display = 'block';
             document.querySelector('.placa-direita').style.display = 'flex';
             document.querySelector('.sup-lateral1').style.display = 'block';
             document.querySelector('.caixa').style.backgroundColor = '#f8ee5f';  
            let cont2 = 0;
            let time2 = setInterval(() => {
                cont2 += 1;
                if (cont2 > 80) {
                    clearInterval(time2);
                }
            }, 100);
            
        }
    }, 50);

}



let nome = document.querySelector(".pesquisa");
let nomecampo = document.querySelector(".quad");
let Tela = document.querySelector(".tela3");
let numeroPok = document.querySelector(".pt1-display");
let numImg = 001;
let n = 1;
let api = [];
let apiImg = [];
let resulImg = [];
let resul = [];
let idPok = [];
let namePok = [];

function pesquisar() {
    nome.value = nome.value.toLowerCase()
    if (namePok.indexOf(nome.value) < 0) {
        alert("não tem")
    } else {
        nomecampo.innerHTML = nome.value;
        numeroPok.innerHTML = "Nº " + ((namePok.indexOf(nome.value)) + 1);
        Tela.style.backgroundImage = `url(${img[namePok.indexOf(nome.value) + 1]})`;
        n = namePok.indexOf(nome.value)
        numImg = namePok.indexOf(nome.value) + 1;
    }
}

function left() {
    if (n > 1) {
        n -= 1;
        numImg--;
        nomecampo.innerHTML = namePok[n - 1];
        numeroPok.innerHTML = "Nº " + (idPok[n]);
        Tela.style.backgroundImage = `url(${img[n]})`;
        console.log(n);
    }
}

function right() {
    if (n <= 150) {
        numImg++;
        n++;
        nomecampo.innerHTML = namePok[n - 1];
        numeroPok.innerHTML = "Nº " + (idPok[n]);
        Tela.style.backgroundImage = `url(${img[n]})`;
        console.log(n)

    }
}

let img = [];
let a = 1;
async function ap() {
    for (let i = 1; i <= 151; i++) {
        img[i] = 'https://pokeres.bastionbot.org/images/pokemon/' + i + '.png';
    }
    let i = document.querySelector('.caixa');
    Tela.style.backgroundImage = `url(${img[1]})`;
    apiInfo();
}

async function apiInfo() {
    for (let i = 1; i <= 151; i++) {
        api[i] = await fetch('https://pokeapi.co/api/v2/pokemon/' + i);
        resul[i] = await api[i].json();

    }
    infoPok();
}

function infoPok() {
    for (let i = 1; i <= 151; i++) {
        namePok.push(resul[i].name);
        idPok[i] = resul[i].id;
    }
    console.log(namePok.length)
}

