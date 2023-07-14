const ingredientsInput = document.getElementById("ingredients");
const ingredientsList = document.getElementById("ingredientsList");
const selectedIngredients = [];
var ingreDiv = document.getElementById("ingredients");


function displayIngre(){
    ingreDiv.innerHTML="";
    selectedIngredients.forEach(function(ingredient){
        var itemDiv = document.createElement("div");
        var txt = document.createElement("p");


    });


};
document.addEventListener('DOMContentLoaded', function() {
    ingredientsInput.addEventListener("change", (event) => {
        const selectedOption = event.target.value;
        if (selectedOption !== "") {
            selectedIngredients.push(selectedOption);
            ingredientsInput.value = "";
            displayIngre();
            document.styleSheets.backgroundcolor= "red";
        }
      });







});