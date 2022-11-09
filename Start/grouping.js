/* // De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= % = */

// controle de fluxo de aplicação 
// caso o 'if' for usado a primeira linha é ignorada

 
// usando a forma if ou else 

let temperature = 35
if(temperature>=37.5){ 
    console.log('febre alta')

} else if(temperature <37.5 && temperature >=37){ console.log('febre moderada')

} else {
    console.log('saudável')
}
