import dataInput from "readline-sync";

const questions = [
    { id: 1, question: 'Quando aconteceu o atentado as Torres Gêmeas?', answer: '2001' },
    { id: 2, question: 'Em que ano foi detectado o primeiro paciente com coronavírus?', answer: '2019' },
    { id: 3, question: 'Em que ano Steve Jobs apresentou o primeiro iPhone sem botão físico?', answer: '2007' },
    { id: 4, question: 'Qual o ano da morte de Stan Lee?', answer: '2018' },
    { id: 5, question: 'Qual ano o Brasil tornou-se tetracampeão mundial de futebol?', answer: '1994' },
    { id: 6, question: 'O primeiro lançamento de foguete da SpaceX ocorreu em?', answer: '2017' },
    { id: 7, question: 'Em que ano foi apresentado o primeiro computador eletrônico?', answer: '1946' },
    { id: 8, question: 'Em que ano ocorreu a Revolução Francesa?', answer: '1789' },
    { id: 9, question: 'Em que ano começou a Primeira Guerra Mundial?', answer: '1914' },
    { id: 10, question: 'Em que ano terminou a Segunda Guerra Mundial?', answer: '1945' },
    { id: 11, question: 'O muro de Berlim foi derrubado em qual ano?', answer: '1989' },
    { id: 12, question: 'Qual o ano que o Titanic afundou?', answer: '1912'  },
    { id: 13, question: 'Qual o ano de lançamento do primeiro PlayStation?', answer: '1994' },
    { id: 14, question: 'Em que ano a Declaração Universal dos Direitos Humanos foi assinada?', answer: '1948' },
    { id: 15, question: 'Em que ano a World Wide Web (WWW) foi criada por Tim Berners-Lee?', answer: '1990' },
    { id: 16, question: 'Em que ano o Euro foi introduzido como moeda única na Europa?', answer: '1999' },
    { id: 17, question: 'Em que ano foi abolido a escravidão no Brasil?', answer: '1888' },
    { id: 18, question: 'Qual ano foi instaurado o regime militar no Brasil?', answer: '1964' },
    { id: 19, question: 'Em que ano o Brasil proclamou a República?', answer: '1889' },
    { id: 20, question: 'Em qual ano ocorreu a Revolta da Vacina no Rio de Janeiro?', answer: '1904' },
    { id: 21, question: 'Em que ano o Brasil sediou a Copa do Mundo pela primeira vez?', answer: '1950' },
    { id: 22, question: 'Em que ano foi adotado o Acordo de Paris sobre mudanças climáticas?', answer: '2015' },
    { id: 23, question: 'Em qual ano ocorreu a guerra das Malvinas?', answer: '1982' },
    { id: 24, question: 'Qual foi o ano em que Martin Luther King realizou o discurso "Eu Tenho um Sonho"?', answer: '1963' },
    { id: 25, question: 'Em que ano a União Europeia (UE) foi estabelecida?', answer: '1993' },
    { id: 26, question: 'Em que ano a Guerra Civil Espanhola começou?', answer: '1936' },
    { id: 27, question: 'Em que ano Nelson Mandela foi libertado da prisão?', answer: '1990' },
    { id: 28, question: 'Em que ano a Alemanha foi reunificada após a Guerra Fria?', answer: '1990' },
    { id: 29, question: 'Qual foi o ano do acidente nuclear em Chernobyl?', answer: '1986' },
    { id: 30, question: 'Em que ano o homem pisou na Lua pela primeira vez?', answer: '1969' }
  ];

  /*** Functions of the application ***/


function selectQuestions(questions, questionsQuantity) { /*** Função que retorna 10 perguntas aleatorias ***/
  const randomQuestions = questions.sort(() => Math.random() - 0.5); /*** Embaralha as perguntas do array questoes ***/
  return randomQuestions.slice(0, questionsQuantity); /*** retorna um novo array com 10 perguntas aleatórias selecionadas ***/
}

function showQuestion(question, index) { /*** Função que exibe a pergunta e retornar a answer do usuário ***/
  console.log(`\n${index + 1}: ${question.question}`);
  const userAnswer = dataInput.question('write the answer (year): ');
  return userAnswer;
}

function ValidateUserAnswer(userAnswer, question) { /*** Função que valida a answer do usuário ***/
  return userAnswer === question.answer;
}

function showResults(finalPontuation, playerName) { /*** Função que retornar uma mensagem com base na pontuação do jogador ***/
  let message = '';

  if (finalPontuation <= 3) {
    message = 'OH No! You are not intelligent enough. In fact it seems you are a dumb person :).';
  } else if (finalPontuation <= 6) {
    message = 'It is just OK. you need to study more.';
  } else if (finalPontuation <= 9) {
    message = 'Very good! YOu got the majority of the questions';
  } else {
    message = 'Excelent! You are very smart :)';
  }
  console.log(message);
}


/*** Interface da aplicação ***/

function beginQuiz() {
  console.log('--------QHistorical Facts Quiz--------\n');
  console.log('Welcome Player!');
  let name_player = dataInput.question("Please write your name: " );
  console.log(name_player);
  console.log("This is a anwer question game. You need to answer a question ");
  console.log("by only entering numbers. The number is only the year that the event happened");

console.log("You need only to answer 10 questions. Here are the questions:");

  const playerName = dataInput.question('Write your name:  ');
  const questionsQuantity = 10;

  const selectedQuestions = selectQuestions(questions, questionsQuantity);   /*** Armazena as 10 perguntas aleatórias ***/

  let finalPontuation = 0;

  selectedQuestions.forEach((question, index) => {
    const answerUser = showQuestion(question, index);
    const resultValidation = ValidateUserAnswer(answerUser, question);

    if (resultValidation) {
      console.log('Right Answer!');
      finalPontuation++;
    } else {
      console.log('Wrong Answer!');
    }
  });
  showResults(finalPontuation, playerName);
}

beginQuiz(); /***  Inicia o Quiz ***/

/*** console.log("Welcome to the Game!");
let name_player = dataInput.question("Please write your name: " );
console.log(name_player);
console.log("This is a anwer question game. You need to answer a question ");
console.log("by only entering numbers. The number is only the year that the event happened");

console.log("You need only to answer 10 questions. Here are the questions:"); ***/