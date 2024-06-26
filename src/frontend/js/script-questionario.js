//Cria array para armazenar as respostas
var answers = {};

//Recebe valor das respostas
var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');


//Armazena as respostas no array answers
function storeAnswer(question_number, event) {
    if (event.target.type === 'radio') {
        console.log(event.target.value);
        answers['question' + question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}

question_one.addEventListener('click', function (event) {
    storeAnswer(1, event)
})
question_two.addEventListener('click', function (event) {
    storeAnswer(2, event)
})
question_three.addEventListener('click', function (event) {
    storeAnswer(3, event)
})
question_four.addEventListener('click', function (event) {
    storeAnswer(4, event)
})
question_five.addEventListener('click', function (event) {
    storeAnswer(5, event)
})



function totalScore() {
    var total_score =
        answers.question1 +
        answers.question2 +
        answers.question3 +
        answers.question4 +
        answers.question5;


    return total_score;
}


function getInfoBaseOnAnswers() {

    if(answers.question1 + answers.question2 + answers.question3 + answers.question4 + answers.question5 === 0){
        return'Sua relação é saudável. Mediante as situações apresentadas, sua relação não apresenta características marcantes de violência. No entanto, não se descuide e conheça mais a respeito para estar atenta(o).'
    } else{

        var texto = 'Você foi ou está sendo vítima do(s) tipo(s) de violência:';

        let arrAswers = [5];

        if (answers.question1 === 1) {
            arrAswers[0] = ' física,';
            texto = texto + arrAswers[0];
        }

        if (answers.question2 === 1) {
            arrAswers[1] = ' moral,';
            texto = texto + arrAswers[1];
        }

        if (answers.question3 === 1) {
            arrAswers[2] = ' patrimonial,';
            texto = texto + arrAswers[2];
        }

        if (answers.question4 === 1) {
            arrAswers[3] = ' psicológica,';
            texto = texto + arrAswers[3];
        }

        if (answers.question5 === 1) {
            arrAswers[4] = ' sexual';
            texto = texto + arrAswers[4];
        }
        texto = texto + '.'
        
        return texto;

    }    

        
        //return 'Você foi ou está sendo vítima do(s) típo(s) de violência:\n' 
          // + arrAswers[0] + arrAswers[1] + arrAswers[2] + arrAswers[3] + arrAswers[4] + '.';


    
       
    
}

/*function getInfoBasedOnScore(){
    if(totalScore() < 7){
        var score_info = "Você precisa tomar mais cuidado com a segurança!";
    } else if(totalScore() >= 7){
        var score_info = "Parabéns! Você está bem de segurança!"
    }

    return score_info;

}*/




var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');


function nextQuestion(question_number) {
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-' + question_number);
    var el2 = document.getElementById('question-' + current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}

submit1.addEventListener('click', function () {
    nextQuestion(2);
    growProgressBar('40%');
})
submit2.addEventListener('click', function () {
    nextQuestion(3);
    growProgressBar('60%');
})
submit3.addEventListener('click', function () {
    nextQuestion(4);
    growProgressBar('80%');
})
submit4.addEventListener('click', function () {
    nextQuestion(5);
    growProgressBar('100%');
})
submit5.addEventListener('click', function () {
    nextQuestion(6);
})



submit5.addEventListener('click', function () {
    //document.getElementById("printtotalscore").innerHTML = totalScore();
    //document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
    document.getElementById("printscoreinfo").innerHTML = getInfoBaseOnAnswers();
})

function growProgressBar(percentage_width) {
    var bar = document.getElementById("progress-bar");
    bar.style.width = percentage_width;
}