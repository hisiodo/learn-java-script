// Escopo global

var variavelGlobal = 'valor global'

console.log(variavelGlobal)

//Tentando mudar a variavel

var variavelGlobal = 1

console.log('Acima retornará um erro de compilação')

//Variaveis globais são acessadas em todo o escopo do arquivo/modulo.

//Exemplo do acesso de uma variavel global dentro de uma function

function acessarVarGlobal(){
    console.log(variavelGlobal, 'acesso dentro da função')
}

acessarVarGlobal()
//acesso dentro de um condicional

if(1===1){
    console.log(variavelGlobal, 'acesso dentro do scopo do condicional')
}

/* Não é recomendado o uso de variáveis globais, ddesde que
seja estritamente necessária ou em sistemas legados onde as 
 versões mais novas do ecmascript não suportam  */

 /*Escopo local ou de bloco, o usdo da keyword 'let' permite a modificação do valor associado a variável,
  deferente do 'var' ou 'const'.*/ 

function acessoEscopoLocal(parametroLocal= '123'){

    let variavelLocal = 'valor local';

    console.log(variavelLocal, parametroLocal, 'variaveis de acesso estríto no escopo da função')

}

acessoEscopoLocal()

//tratando exceções, para que a execução prosiga
try{
//Erro ao tentar acessar variaveis de escopo local
console.log(variavelLocal)
}catch(error){
    console.log(error.message)
}

//Uso do const. Variável de valor imutável(na teoria, não na prática), escopo local 

const variavelConst = 'valor constante'

console.log(variavelConst);

function acessarConst(){
    const variavelConst = 'tentar alterar valor const'
    console.log(variavelConst)
}

acessarConst()

/* Mesmo que na teoria a constante advinda de const em java script, no exemplo 
acima é possível ver que tal variável pode ser alterada, assim a definição por const
é mais conceitual e de legibiliade do que válida na prática*/

/* De modo geral o uso do let é recomendado 
pois no contexto de variaveis a própria declaração vem "daquilo que varia e tem valor variante",
salvo algumas exeções ou definições explícitas para atribuições únicas e/ou
 constantes(sendo usado com algun linting).*/


