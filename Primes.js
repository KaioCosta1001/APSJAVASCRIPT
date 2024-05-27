//Verifica se o numero é primo ou não!
function isPrime(num) {
    for (let i = 2; i <= num/2; i++) {
        if (num % i === 0) {
            return false;
        }
        return true;
    }

}
//Fornece os proximos 10 numeros primos a partir do numero colocado!

function proximosnumPrimos(nInicial) {
    const proximosPrimosEncontrados = [];
    let numeroAtual = nInicial + 1;

    while (proximosPrimosEncontrados.length < 10) {
        if (isPrime(numeroAtual)) {
            proximosPrimosEncontrados.push(numeroAtual);
        }
        numeroAtual++;
    }

    console.log(`Proximos numeros primos após ${nInicial} são:`);
    console.log(proximosPrimosEncontrados.join(', '));
}

// Compo para o usuario colocar o Numero!
const userInput = parseInt(prompt('Digite um número:'));
proximosnumPrimos(userInput);
isPrime(userInput);