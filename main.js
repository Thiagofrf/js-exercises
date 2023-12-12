// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
    alert('Hello World')



// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
    let numberOne = Number(prompt('Digite um número'));
    let numberTwo = Number(prompt('Digite outro número'));
    alert(numberOne + numberTwo)



// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

    let userPrompt = prompt('Digite um texto ou um número')

    if(Number(userPrompt)) {
        alert('É um número')
    } else {
        alert('Não é um número')
    }



    
    
// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

    let randomData = '1'

    if(typeof(randomData) === 'string') {
        alert('é uma string')
    } else { 
        alert('não é uma string')
    }




// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

    let randomDataTwo = 'a'

    if(typeof(randomDataTwo) === 'boolean') {
        alert('é um booleano')
    } else { 
        alert('não é um booleano')
    }



// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

    let numberOneMinus = Number(prompt('Digite um número'));
    let numberTwoMinus = Number(prompt('Digite outro número'));
    alert(numberOneMinus - numberTwoMinus)



// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
    
    let numberOneTimes = Number(prompt('Digite um número'));
    let numberTwoTimes = Number(prompt('Digite outro número'));
    alert(numberOneTimes * numberTwoTimes)




// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
    let numberOneDiv = Number(prompt('Digite um número'));
    let numberTwoDiv = Number(prompt('Digite outro número'));
    alert(numberOneDiv / numberTwoDiv)



// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

    let numberOneEven = Number(prompt('Digite um número'));

    if(numberOneEven % 2 === 0) {
        alert('é um numero par')
    } else {
        alert('não é um numero par')
    }




// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".


    let numberOneOdd = Number(prompt('Digite um número'));

    if(numberOneOdd % 2 !== 0) {
        alert('é um numero ímpar')
    } else {
        alert('não é um numero ímpar')
    }