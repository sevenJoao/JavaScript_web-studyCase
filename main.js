/* código para selecionar o elemento individualmente

function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
} */

/* Esse o querySelectorAll seleciona a lista ou a classe toda exemplo ''tecla'' */



// o simbolo de = é para dizer que está dentro da ''clase'' 

// 1- o idELementAudio é para diferenciar da ''tag'' tocaSom é uma especie de classe para determinar a funcionalide de play

function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }

    else{
        console.log('Elemento não encontrado ou seletor não enviado');
    } // else = se não


}


/* A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída */

//2- Nessa etapa a const pega a lista de telclas da classe tecla - do html - e seleciona ela toda ou fala que ela existe para o js

const listaDeTeclas = document.querySelectorAll('.tecla');

// let é uma variavel, let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada.

// 3- aqui está falando que esse valor é 0 para saber o que é ele foi nomeado como contador. isso ocorreu para que quando for feita a funcao - calculo - ele poder executar 

// let contador = 0;

//while = enquanto //length = tamanho


/* 4- Aqui é onde ocorre toda a operação, usando os dados que estão acima , isso quer que:
 quando o a operação for maior que 0 e até 9 que é a quantide de conteudo da classe .tecla é para ele acessar os audios.  */

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    // usar a crase ` nessa etapa o nome é template string
    const idAudio = `#som_${instrumento}`;

    //* console.log(idAudio);

    // aqui é a funcao de clique do elemento 

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }



}


   // contador = contador + 1;
   //console.log(contador)
