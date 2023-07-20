
const selectedIngredients = [];








document.addEventListener('DOMContentLoaded', function() {
    const ingredientsInput = document.getElementById("ingredients");
    const ingredientsList = document.getElementById("ingredientsList");
    const selectedIngredients = [];
    const searchBut = document.getElementById("searchbut");

    ingredientsInput.addEventListener("change", (event) => {
        const selectedOption = event.target.value;
        const options = Array.from(ingredientsList.options).map(option => option.value);
        ingredientsInput.value = "";
        if (options.includes(selectedOption) && 
            !selectedIngredients.includes(selectedOption) ) {
            selectedIngredients.push(selectedOption);
            displayIngre(selectedIngredients);
           
        }
      });
      function capitalizeFirstLetter(string) {
        if (string.length === 0) {
          return "";
        }
        
        let words = string.split(" ");
        for (let i = 0; i < words.length; i++) {
          let word = words[i];
          words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        
        return words.join(" ");
      }
    
    function displayIngre(selectedIngredients) {
        var ingreDiv = document.getElementById("result");
        ingreDiv.innerHTML = "";
        selectedIngredients.forEach(function (ingredient) {
            var itemDiv = document.createElement("div");
            itemDiv.setAttribute("class","itemDiv");
            // itemDiv.style.backgroundColor="red"
            // itemDiv.style.display = "flex"; 
            // var txt = document.createElement("p");
            // txt.textContent = ingredient;
            // txt.style.marginRight = "10px"; // Add this line
            // txt.style.display = "inline"; // Add this line
            // itemDiv.appendChild(txt);
            var button = document.createElement("button");
            button.textContent=ingredient + "-"
            // button.setAttribute("class", "btn-sm");
            button.addEventListener("click", function () {
                // document.body.style.backgroundColor = "pink";
                const index = selectedIngredients.indexOf(ingredient);
                if (index > -1) {
                    selectedIngredients.splice(index, 1);
                }
    
                ingreDiv.removeChild(itemDiv); 
                
            });
            itemDiv.appendChild(button);
            ingreDiv.appendChild(itemDiv);
        });
    };
    
    function showRecipes(recipe,number){
        const recipesDiv = document.getElementById("recipes");
        var itemDiv = document.createElement("div");
        itemDiv.setAttribute("data-details",number)
        itemDiv.setAttribute("class","col-md-3 col-sm-6 col-xs-12");
        var atag= document.createElement("a");
        atag.setAttribute("href", "details.html?number=" + number);
        atag.setAttribute('target', '_blank');
        var tileDive = document.createElement("div");
        tileDive.setAttribute("class","recipe-tile"); 
        var img =  document.createElement("img");
        img.setAttribute("class","img-fluid");
        img.setAttribute("src",recipe.pictures[0]);
        var span = document.createElement("span");
        span.textContent = recipe.name;
        tileDive.appendChild(img);
        tileDive.appendChild(span);
        atag.appendChild(tileDive);
        itemDiv.appendChild(atag);
        recipesDiv.appendChild(itemDiv);
    };
    



      function getRecipe(){
        const diet= capitalizeFirstLetter(document.getElementById("diet").value);
        const cuisine= capitalizeFirstLetter(document.getElementById("cuisine").value);
        const meals= capitalizeFirstLetter(document.getElementById("meals").value);
        const cookTime= document.getElementById("cookTime").value;
        const condition= document.getElementById("condition").value;
    
      
          const recipes = data.recipes;
            var showRecipe;
            var index = 0;
            var number =0;
          recipes.forEach(recipe => {
    
            showRecipe = true;
            if(diet !="" && !recipe.diet.includes(diet)){
               showRecipe = false;
            //    document.body.style.backgroundColor = "red";
            }
            // var txt = document.createElement("p");
            // txt.textContent = selectedIngredients.length;
            // const recipesDiv = document.getElementById("recipes");
            // recipesDiv.appendChild(txt);
            selectedIngredients.forEach(function (ingredient) {
                if(!recipe.ingredients.includes(ingredient)){
                    showRecipe = false;
                }
            });
    
            if(cuisine!="" && !recipe.cuisine.includes(cuisine)){
                showRecipe = false;
                // document.body.style.backgroundColor = "red";
            }
    
            if(meals!="" && !recipe.mealKind.includes(meals)){
                showRecipe = false;
                // document.body.style.backgroundColor = "red";
            }
            if(cookTime != "cookTime" && recipe.cookingTime> cookTime){
                showRecipe = false;
                // document.body.style.backgroundColor = "red";
            }
            if(condition=="Diabetes" && recipe.isOKDiabets==false){
                showRecipe = false;
                // var txt = document.createElement("p");
                // txt.textContent = recipe.name;
                // const recipesDiv = document.getElementById("recipes");
                // recipesDiv.appendChild(txt);
                // document.body.style.backgroundColor = "red";
            }
            if(condition=="HighBloodPressure" && recipe.isOKHighPre==false){
                showRecipe = false;
                // document.body.style.backgroundColor = "red";
            }
            if(condition=="HighCholesterol" && recipe.isOKHighCol==false){
                showRecipe = false;
                // document.body.style.backgroundColor = "red";
            }
           
      
            if(showRecipe==true){
                // document.body.style.backgroundColor = "green";
                showRecipes(recipe,number);
                index+=1;
            }
            number+=1;
        });
        if( index == 0){
            var txt = document.createElement("p");
            txt.textContent = "No result found. Please try again";
            const recipesDiv = document.getElementById("recipes");
            recipesDiv.appendChild(txt);
        }
    
    };


searchBut.addEventListener("click",function(){
    const recipes = document.getElementById("recipes");
    recipes.innerHTML="";
    // document.body.style.backgroundColor = "pink";
    getRecipe();
});
});