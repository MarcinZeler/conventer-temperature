// uruchomienie funkcji po załadowaniu HTML-a
document.addEventListener("DOMContentLoaded", function(){
    let isFahrenheit = false 
    function fillLabels() {
        if (isFahrenheit===true) {
                document.querySelector("label[for=from]").innerHTML="Fahrenheit"
                document.querySelector("label[for=to]").innerHTML="Celsius"
         } else {
                document.querySelector("label[for=from]").innerHTML="Celsius"
                document.querySelector("label[for=to]").innerHTML="Fahrenheit"
            }
    }
    function calculate() {
        if (isFahrenheit===true) {
            let from = document.getElementById ("from").value
            let resultCelsius = ((from - 32)/1.8)
            document.getElementById ("to").value = resultCelsius
        } else {
        let from = document.getElementById ("from").value
        let resultFahrenheit = ((from * 1.8)+32)
        document.getElementById ("to").value = resultFahrenheit
        }
    }
    document.getElementById ("from").addEventListener("change", calculate);
    document.getElementById ("to").addEventListener("change", calculate);
    document.getElementById ("changeSide").addEventListener("click", swap);

function swap() {
    if (isFahrenheit===true) {
        isFahrenheit=false
    } else {
        isFahrenheit=true 
    }
    calculate()
    fillLabels()
    /*
    let Celsius = document.getElementById ("from").value
    let Fahrenheit = document.getElementById ("to").value
    let resultCelsius = ((Fahrenheit - 32)/1.8)
    document.getElementById ("from").value = resultCelsius */
}})