function somar()
{
    var num1  = document.getElementById("num01").valueAsNumber;
    var num2 =  document.getElementById("num02").valueAsNumber;
    var resultado = num1 + num2;
    document.getElementById("resultadoSoma").textContent = resultado;
}

function subtrair()
{
    var num1  = document.getElementById("num03").valueAsNumber;
    var num2 =  document.getElementById("num04").valueAsNumber;
    var resultado = num1 - num2;
    document.getElementById("resultadoSub").textContent = resultado;
}

function multiplicar()
{
    var num1  = document.getElementById("num05").valueAsNumber;
    var num2 =  document.getElementById("num06").valueAsNumber;
    var resultado = num1 * num2;
    document.getElementById("resultadoMult").textContent = resultado;
}

function dividir()
{
    var num1  = document.getElementById("num07").valueAsNumber;
    var num2 =  document.getElementById("num08").valueAsNumber;
    var resultado = num1 / num2;
    document.getElementById("resultadoDiv").textContent = resultado;
}

function media()
{
    var num1  = document.getElementById("num09").valueAsNumber;
    var num2 =  document.getElementById("num10").valueAsNumber;
    var resultado = (num1 + num2) / 2;
    document.getElementById("resultadoMed").textContent = resultado;
}