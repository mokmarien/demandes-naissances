console.log("Chargement du script...");

function gestionDuFormulaire(event) {
    event.preventDefault();
    console.log(event);

    const firstNumberValue = 1 * document.getElementById("firstNumber").value;
    const secondNumberValue = 1 * document.getElementById("secondNumber").value;
    const operation = document.getElementById("operation").value;

    let resultat = 0;
    if (operation === "1") {
        resultat = firstNumberValue + secondNumberValue;
    }
    if (operation === "2") {
        resultat = firstNumberValue * secondNumberValue;
    }
    console.log("==========================================");
    console.log(firstNumberValue, secondNumberValue, operation, typeof operation, resultat);
    console.log("==========================================");
    const operationLabel = operation === "1" ? "+" : "*";
    document.getElementById("resultat").innerHTML = `${firstNumberValue} ${operationLabel} ${secondNumberValue} = ${resultat}`
}

function gestionDuneOperation() {
    const firstNumberValue = 1 * document.getElementById("firstNumber").value;
    const secondNumberValue = 1 * document.getElementById("secondNumber").value;
    const operation = document.getElementById("operation").value;

    let resultat = 0;
    if (operation === "1") {
        resultat = firstNumberValue + secondNumberValue;
    }
    if (operation === "2") {
        resultat = firstNumberValue * secondNumberValue;
    }
    console.log("==========================================");
    console.log(firstNumberValue, secondNumberValue, operation, typeof operation, resultat);
    console.log("==========================================");
    const operationLabel = operation === "1" ? "+" : "*";
    document.getElementById("resultat").innerHTML = `${firstNumberValue} ${operationLabel} ${secondNumberValue} = ${resultat}`
}