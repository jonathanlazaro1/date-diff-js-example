/* 
O require é uma método de importação de módulos que funciona apenas em ambiente NodeJS.
 Neste caso, quando só tem o JavaScript "puro" do navegador, ele não funciona, e nem é necessário, pra dizer a verdade.
 Basta importar o script lá no final do body do HTML, como você fez, que já deve funcionar. 
*/
// require("dateFns");

var computerDate = new Date();
/*
var jonathanlazaro1 = document.createElement('script');
jonathanlazaro1.src = "jonathanlazaro1.js";
document.head.appendChild(jonathanlazaro1);
*/

/* 
Vi que você não está utilizando esta função, porém, se precisar,
o date-fns tem a função "isLeapYear", que justamente verifica se é um ano bissexto e retorna true ou false 
*/
// Veja mais em: https://date-fns.org/v1.30.1/docs/isLeapYear
function bisesto(ano) {
  let calc = ano + "-";
  calc = calc.substring(0, calc.length - 1);
  if (calc.includes(".")) {
    return false;
  } else {
    if ((ano / 100 + "").includes(".")) {
      return true;
    }
  }
}

function nrepeat(start, func, times) {
  let fo = start;
  while (fo < times) {
    fo++;
    func(fo);
  }
}

/* 
Tudo certo aqui, mas eu sugiro que você sempre dê nomes intuitivos às tuas variáveis.
"data" pode ser muitas coisas: um valor de data, um botão, um input, etc...
Ex.: se a variável é a referência de um input de data de nascimento, 
coloque inputDataNasc, ou inpDataNascimento, ou iptBirthDate, como você achar melhor.
O importante é deixar claro do que se trata a variável, tanto para outras pessoas que forem olhar seu código,
quanto para "você mesmo do futuro", que pode acabar esquecendo o que as variáveis são.
*/
var inputDataNasc = document.getElementById("inputDataNasc");
// var btn = document.getElementById("go");

// date-fns tem uma função, "getDaysInMonth", para pegar o maior dia do mês em uma data.
// Veja mais em : https://date-fns.org/v1.30.1/docs/getDaysInMonth
var dnm = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Tem nove ícones e oito nomes. Era pra ser isso mesmo?
// Além disso, aqui seria um bom lugar pra usar objetos. Dados que fazem sentido juntos, lembra? 😉
var icons = ["☀️", "❤️", "😂", "💰", "🕰️", "🚗", "✋", "☕", "❌"];
var names = [
  "Auspicioso",
  "O Amor esta no ar",
  "Diversão",
  "Prosperidade",
  "Progresso",
  "Lazer",
  "Obstáculos",
  "Desfavoráveis",
];
var lista = [1, 2, 3, 4, 2, 4, 5, 6, 7, 8, 9];
var len = lista.length + 1;

function getDay(dia) {
  // Comentei as variáveis "date" e "agora", porque não estavam sendo utilizadas na função.
  //   let date = new Date();
  //   let agora = [
  //     date.getFullYear() * 1,
  //     date.getMonth() * 1 + 1,
  //     date.getDay() * 1,
  //   ];
  let dias = dnm[dia[1] - 1] * 1;
  return dias;
}

/*
A mesma coisa do nome das variáveis se aplica às funções.
O que a função "click" faz? Se ela tivesse um nome como "getFengShuiMoodAccordingToDate",
seria mais fácil entender, logo de cara, que ela calcula a situação do dia da pessoa no Feng Shui, de acordo com a data.
*/
function getFengShuiMoodAccordingToDate() {
  /* 
Você está atribuindo o valor do resultado de differenceInDays para a variável "daysDiff",
depois está atribuindo novamente à variável "to". Como você não está usando as duas, "to" poderia ser eliminada... 
*/
  //   let to = (daysDiff = dateFns.differenceInDays(computerDate, data.value));

  /* 
date-fns trabalha quase que o tempo todo com dados do tipo "Date".
Experimente dar um console.log(new Date()) no seu navegador para ver o que aparece
Experimente também, selecionar uma data e dar um console.log(inputDataNasc.value), para ver o que o value do input armazena.
Percebeu a diferença? Os objetos do tipo Date armazenam um monte de coisas,
enquanto o value de um "input type date" armazena apenas uma string, no formato "aaaa-MM-dd".
É necessário converter o value de string para Date antes de passar para o date-fns.
Por sorte, o próprio date-fns tem uma função para essa conversão. Ela se chama "parse"
Outra coisa muito importante é tratar dados de entrada inválidos, como datas em branco.
*/
  if (!inputDataNasc.value || inputDataNasc.value === "") {
    alert("Você não informou uma data!");
    return;
  }
  let daysDiff = dateFns.differenceInDays(
    computerDate,
    dateFns.parse(inputDataNasc.value)
  );
  let h = 1;

  nrepeat(
    0,
    function (i) {
      h++;
      if (h == len) {
        h = 1;
      }
    },
    daysDiff
  );
  /*
Aqui ocorreu um pequeno erro de grafia. Você queria pegar uma posição do array "names", e escreveu "name".
Nada demais, fazemos isso o tempo todo.
*/
  //   window.alert(name[h - 1]);
  window.alert(names[h - 1]);
}

/* 
Esta chamada para a função click, desta forma, está fazendo com que ela seja executada
logo no carregamento do script, e não apenas ao pressionar o botão. Não sei se era isso mesmo que você queria... 
*/
// click();
