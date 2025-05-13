function Somar() {
    let text = document.getElementById('spanText');
    let valor1 = 0;
    let valor2 = 0;
    valor1 = Number(prompt("Valor 1:"));
    valor2 = Number(prompt("Valor 2:"));
    let result = valor1 + valor2;

    text.textContent = `Resultado: ${result}`;
}

function Diminuir() {
    let text = document.getElementById('spanText');
    let valor1 = 0;
    let valor2 = 0;
    valor1 = Number(prompt("Valor 1:"));
    valor2 = Number(prompt("Valor 2:"));
    let result = valor1 - valor2;

    text.textContent = `Resultado: ${result}`;
}

function Dividir() {
    let text = document.getElementById('spanText');
    let valor1 = 0;
    let valor2 = 0;
    valor1 = Number(prompt("Valor 1:"));
    valor2 = Number(prompt("Valor 2:"));
    let result = valor1 / valor2;

    text.textContent = `Resultado: ${result}`;
}

function Multiplicar() {
    let text = document.getElementById('spanText');
    let valor1 = 0;
    let valor2 = 0;
    valor1 = Number(prompt("Valor 1:"));
    valor2 = Number(prompt("Valor 2:"));
    let result = valor1 * valor2;

    text.textContent = `Resultado: ${result}`;
}

function Media() {
    let text = document.getElementById('spanText');
    let valor1 = 0;
    let valor2 = 0;
    valor1 = Number(prompt("Valor 1:"));
    valor2 = Number(prompt("Valor 2:"));
    let result = (valor1 + valor2) / 2;

    text.textContent = `Resultado: ${result}`;

}

function Misterio() {
    let text = document.getElementById('mistery');
    let valor1 = prompt("Digite a palavra misteriosa:")
    if (valor1 == "JavaScript" || valor1 == "HTML" || valor1 == "CSS") {
        window.alert("Você descobriu a palavra secreta!");
        text.style.display = "none";
    }
    else {
        window.alert("Você errou a palavra");
    }
}

function numero(n1) {
    n1 = Number(n1);

    if (isNaN(n1) == true) {
        window.alert("O valor digitado NÃO é um número!");
        return;
    }

    if (n1 > 1 && n1 < 10) {
        window.alert("Seu número está entre 1 e 10");
    } else {
        window.alert("Seu número NÃO está entre 1 e 10");
    }

    if (n1 % 2 == 0) {
        window.alert("O número digitado é par!")
    }

    else {
        window.alert("O número digitado NÃO é par!")
    }

    if (n1 % n1 == 0) {
        window.alert("O número digitado é primo!")
    }

    else {
        window.alert("O número digitado NÃO é primo!")
    }
}