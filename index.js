let numVitorias = getNumVitorias(150, 50)
let nivel = nivelHeroi(numVitorias)

function getNumVitorias(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias
}

function nivelHeroi(saldoVitorias) {
    if (saldoVitorias < 10) {
        return "Ferro"
    } else if (saldoVitorias < 21) {
        return "Bronze"
    } else if (saldoVitorias < 51) {
        return "Prata"
    } else if (saldoVitorias < 81) {
        return "Ouro"
    } else if (saldoVitorias < 91) {
        return "Diamante"
    } else if (saldoVitorias < 101) {
        return "Lendário"
    } else {
        return "Imortal"
    }
}

console.log(`O Herói tem saldo de ${numVitorias} e está no nível de ${nivel}`)
