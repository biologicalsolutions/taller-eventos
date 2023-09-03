function funcionSaludo(){
    alert ("Hola!");
}
let btn = document.getElementById("btn");
let miDiv = document.getElementById('miDiv');

miDiv.addEventListener("click", function() {
    alert("Hola! Soy el div");
});

/*Lo que hago con este método es evitar que el alert del div
se dispare dos veces*/
btn.addEventListener("click", function(event) {
    event.stopPropagation(); 
});