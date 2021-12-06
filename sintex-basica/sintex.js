/**
 * O Javascript possuiu uma sintex bem familiar com outras linguagens de programacao como C/C++ Java Python entre outras, a familidade com a liguagem Java está apenas no nome.
 * 
 */

//DECLARAÇÃO DE VARIAVEIS

var nomeVariavelVar // variavel visivel em todo o escopo do arquivo
let nomeVariavelLet // Variavel visivel de escopo local
const nomeVariavelConst = 'VARIVEL_CONSTANTE' // declara uma constante  de escopo de bloco, apenas para leitura


//VARIAVEIS
/**Variaveis são espacos de memoria representados por nomes simbolicos,os nomes de variaveis tambem conhecidos como indentificadores obedecem determinadas regras
 *  cada linguagem possuiu suas regras, algumas linguagem compartilham regras parecidas entre si. Segue as regras para o Javascript:
 * 
 */
var podeSerNomeDeUmaVariavel
var _podeSerNomeDeUmaVariavel
var $podeSerNomeDeUmaVariavel
    //var 1NaoPodeSerNomeDeVariavel

//Podemos declarar variavies das seguintes formas

var variavelDeclarada = "valor que vai na variavel"

variavelGlobal = "variavel de escopo global"
let variavelUsandoLet = 'Variavel usando let, variavel de menor escopo'

console.log(variavelDeclarada)
console.log(variavelGlobal)
console.log(variavelUsandoLet)

//CLASSIFICANDO VARIAVEIS

/**Variaveis declaras sem especificacao  tem o valor inicial undefined */

var variavelSemEspecificacao;
console.log(variavelSemEspecificacao)


//Tentativa de acessar uma variavel que nao existe será lancado uma excessao ReferenceError
//console.log('Variavel nao declarada ' + essaVariavelNaoExiste)

/**Podemos usar undefined para determinar se uma variavel tem algum valor*/

let valorInput = "cod return"
if (valorInput !== undefined) {
    console.log('Valor foi recebido no input')
} else {
    console.log('Valor nao foi recebido no input')
}

//undefinde pode se comportar como  falso no contexto booleano por examplo:
var myArrayValues = []
var retorno = (myArrayValues) ? 'Executa uma funcao' : 'Nao executa uma funcao'
console.log(retorno)

//O valor undefinde pode ser convertido para NanN quando usado no contexto numerico

var count
console.log(count++)
console.log(count++)

//Quando voce avalia uma variavel nula, o valor nulo pode se comportar como 0 em contextos numericos e como falso em contextos booleanos
var n = null
console.log(n * 32)

//ESCOPO DE VARIAVEL

/** quando voce declara uma variavel fora de uma funcao, essa variavel é de escopo global, e comun declarar a variavel global como var */


const number = 15

function numberTest() {
    if ((number % 2) == 0) {
        console.log('valor par')
    } else {
        console.log('Valor impar')
    }
}
numberTest()

/** Esse comportamento é alterado quando utilizando o let*/
function numberTest2() {
    let number = 2
    if ((number % 2) == 0) {
        console.log('Numero Par')
    }
}
numberTest2()


//VARIAVEIS DE ELEVAÇÃO - hoisting

/**Examplo 1 */

console.log(x === undefined)
var x = 3


//VARIAVEIS GLOBAIS

/**Variaveis Globais sao propriedade de objtos globais, em paginas web o objeto global é o window*/

//CONSTANTES

/**Voce pode criar  uma constante apenas de leitura por meio da palavra chave const */

const PI = 3.14
    /*
    function f() {}
    const f = 5
    */

/*function f() {
    const g = 5;
    var g;

    //declarações
}*/


//Estrutura de dados e tipos

/**O padrão ECMAScrip define 7 tipos de dados
 * 
 * 
 * Seis tipo sao chamados de tipos primitivos
 *  Boolean
 *  null
 *  undefined
 *  Number
 *  String
 *  Symbol
 *  Objtect
 */




//Conversão de tipos de dados

/**Javascript é uma linguagem dinamicamente tipada, Isso significa que voce nao precisa especificar o tipo
 * de dados de uma variavel quando declará-la, e tipos de dados sao convertido automaticamente conforme  a
 * necessidade durante a execucao de script. Entao por examplo, voce pode definir uma variaval da segunte forma
 */
var retornoFunnction = 45
var retornoFunnction = "Pode ser amarzanado tambem uma String"

var x = 'Valores somados ' + (12 + 3)
console.log(x)

//Convertendo strings para números

/**No caso de um valor que representa um número está armazenado na memória como uma string, existem métodos para a conversão. */

console.log(parseInt('25'))

console.log(parseFloat('45.25'))

//Controle de Fluxo e Manipulação de Erro

{
    //...declaracao de bloco em javascript

}


//Declarações condicionais

/**IF ELSE */

var condicao

if (condicao) {
    console.log('Executa alguma coisa')
} else {
    console.log('Executa outra coisa')
}
//Valores avaliados como falsos
/**
 * false
 * undefined
 * null
 * 0
 * NaN
 * String vazia ("")
 */
//Declaração switch

tipofruta = "Banana"

switch (tipofruta) {
    case "Laranja":
        console.log("O quilo da laranja está R$0,59.<br>");
        break;
    case "Maçã":
        console.log("O quilo da maçã está R$0,32.<br>");
        break;
    case "Banana":
        console.log("O quilo da banana está R$0,48.<br>");
        break;
    case "Cereja":
        console.log("O quilo da cereja está R$3,00.<br>");
        break;
    case "Manga":
        console.log("O quilo da manga está R$0,56.<br>");
        break;
    case "Mamão":
        console.log("O quilo do mamão está R$2,23.<br>");
        break;
    default:
        console.log("Desculpe, não temos " + tipofruta + ".<br>");
}
console.log("Gostaria de mais alguma coisa?<br>");


//Declarações de Manipulação de Error

//Declaração throw

/*Use uma declaracao throw para lancar uma execao, quando voce lanca uma excecao voce especifica a expressao contendo  o valor a ser lancado */


//Objeto do tipo UserException
/*function UserException(mensagem) {
    this.mensagem = mensagem
    this.nome = "UserException"
}*/

// Realiza a conversão da exceção para uma string adequada quando usada como uma string.
// (ex. pelo console de erro)
/*
UserException.prototype.toString = function() {
    return this.nome + ': ""' + this.mensagem + '"'
}

throw new UserException("valor muito alto")*/


function getMonthName(mo) {
    mo = mo - 1
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    if (months[mo]) {
        return months[mo]
    } else {
        throw "InvalidMonthNo"
    }
}

try {
    monthName = getMonthName(13)
} catch (e) {
    monthName = "unknown"
    logMyErrors(e)
}