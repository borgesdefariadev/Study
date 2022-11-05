console.log("bem vindo à minha pagina");
//  console para escrever mensagens no devtools
// assim se adiciona comentario em linha para o código

/* comentário em bloco
    
*/

// console.log({
  /*  name:"ric",
    age:"29",
    andar: function() {

        console.log('andar')

    }
})*/

// Object

const person = {

        age: 30,
        name: 'John',
        weight: 88.6,
        IsAdmin: true
}

//Array
const animals = [
    'Lion',
    'Zebra',
    'Elephant',
    'Hiena'


]


/* Function constructor 
 * expressão 'new 
 * criar um novo objeto
 * keyword 'this'
 */

function Person(name){
    this.name = name
    this.walk = function() {
        return 'andando'
    }
}

function escreverPoema(){
    const poema = "rosas são vermelhas"

} 

const ric = new Person("ric")
const mayk = new Person("mayk")
console.log('ric')
console.log('mayk')




// Manipulando array

let techs = ["js", "html", "css"]
// adicionar um item no fim
techs.push("nodejs")
//adicionar um item no começo
techs.unshift("php")
//remover do fim
techs.pop()
//remover do começo
techs.shift()
//pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
//remover 1 ou mais itens do array
techs.splice(2)
//encontrar a posição do elemento de array
let index = techs.indexOf('css')


