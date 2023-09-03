function funcionSaludo(){
    alert ("Saludos Campeón");
}
let btn = document.getElementById("btn");
let miDiv = document.getElementById('miDiv');

miDiv.addEventListener("click", function() {
    alert("Creo que soy el div, pero no lo puedoa segurar");
});

/*Lo que hago con este método es evitar que el alert del div
se dispare dos veces*/
btn.addEventListener("click", function(event) {
    event.stopPropagation(); 
});
