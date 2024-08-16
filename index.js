var randomNumber1;
var randomNumber2;

// function reinicio(){
    randomNumber1 = Math.trunc((Math.random() * 6) + 1);
    randomNumber2 = Math.trunc((Math.random() * 6) + 1);

    document.getElementById(1).setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    document.getElementById(2).setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "🚩Jogador 1 ganhou";
        console.log("Numero 1 é o vencedor");
    } else if (randomNumber2 > randomNumber1){
        document.querySelector("h1").textContent = "Jogador 2 ganhou🚩";
        console.log("Numero 2 é o vencedor");
    } else {
        document.querySelector("h1").textContent = "🚩Empate🚩";
        console.log("Empate");
    }
// }