var form = document.getElementById("form-numeros");
var reset = document.getElementById("btn-reset");

function compara(primeiro, segundo) {
    if (primeiro > segundo) {
        var mensagem = "INVALIDO! Número A é maior que o número B";
    } else if (primeiro < segundo) {
        var mensagem = "Número B é maior que o número A";
    } else {
        var mensagem = "Ambos são iguais";
    }
    return mensagem;
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    let primeiroNumero = document.getElementById('primeiro-numero');
    let segundoNumero = document.getElementById('segundo-numero');
    const mensagemResultado = document.querySelector('.mensagem-resultado');
    mensagemResultado.innerHTML = compara(primeiroNumero.value, segundoNumero.value);
    });
    






