var nomeHeroi = "Natanzin"
var xpHeroi = 8002
var nivelHeroi = ""

if (xpHeroi < 1000) {
    nivelHeroi = "Ferro"
} else if (xpHeroi < 2001) {
    nivelHeroi = "Bronze"
} else if (xpHeroi < 5001) {
    nivelHeroi = "Prata"
} else if (xpHeroi < 7001) {
    nivelHeroi = "Ouro"
} else if (xpHeroi < 8001) {
    nivelHeroi = "Platina"
} else if (xpHeroi < 9001) {
    nivelHeroi = "Ascendente"
} else if (xpHeroi < 10001) {
    nivelHeroi = "Imortal"
} else {
    nivelHeroi = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi + "!")