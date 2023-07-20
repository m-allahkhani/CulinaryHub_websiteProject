document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchHeader');
    const searchIcon = document.getElementById('search-headerIcon');


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
    
  
    searchInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        showRecipes();
      }
    });
  
    searchIcon.addEventListener('click', function() {
        showRecipes();
    });


    function calculateSimilarPercentage(str1, str2) {
      const longerString = str1.length >= str2.length ? str1 : str2;
      const shorterString = str1.length < str2.length ? str1 : str2;
      
      const longerLength = longerString.length;
      const shorterLength = shorterString.length;
      
      let matchingCharacters = 0;
      
      
      for (let i = 0; i < shorterLength; i++) {
        if (longerString[i] === shorterString[i]) {
          matchingCharacters++;
        }
      }
      
      return matchingCharacters / longerLength;
    };
    
  
    function checkSimilarity(str1, str2) {
        const similarityThreshold = 0.7;
        if (str1.includes(str2)) {
          return true  }
        const similarityPercentage = calculateSimilarPercentage(str1, str2);
        if (similarityPercentage >= similarityThreshold) {
          return true;
        }
        return false;
      };

    function showRecipes(){
        const searchTerm = capitalizeFirstLetter(searchInput.value);
        const recipes = data.recipes;
        var number = 0;
        var find = false;
        recipes.forEach(recipe => {
            if(recipe.name == searchTerm){
                find = true;
                var url = "details.html?number=" + number;
                window.location.href = url;
            }
            number+=1;
        });
        if(find === false){
            number = 0;
            for(number=0; number<recipes.length && !find;number++){
                if(checkSimilarity(recipes[number].name,searchTerm) == true){
                                    find = true;
                                    var url = "details.html?number=" + number;
                                    window.location.href = url;
                                }
            }
            
        }
        searchInput.value=""
    };
});