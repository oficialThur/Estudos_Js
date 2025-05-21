//  se(condiçao verdadeira){
//      execute esse codigo
//  } seNao{
//      execute esse codigo
//  }


// se = if

// seNao = else

let nota = prompt("Sua nota: ")
let nota2 = prompt("Sua nota 2: ")

let resultado = (parseInt(nota) + parseInt(nota2)) / 2

if(resultado >= 5){
    alert("Voce foi aprovado !!! Meu Parabens")
}else{
    alert("Voce foi reprovado ta recuperacao")
}