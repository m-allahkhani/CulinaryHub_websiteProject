document.addEventListener('DOMContentLoaded', function() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const number = urlParams.get('number');
    // var txt = document.createElement("p");
    // txt.textContent = number;
    const main = document.getElementById("main");
    // recipesDiv.appendChild(txt);
    const recipe = data.recipes[number];
    var name = document.createElement("h3");
    name.style.fontWeight =  "bold";
    name.setAttribute("id","name");
    name.textContent = recipe.name; 
    main.appendChild(name); 
    var images = document.createElement("div");
    images.setAttribute("id","carouselExampleControls");
    images.setAttribute("class","carousel slide");
    images.setAttribute("data-bs-ride","carousel");
    var carousel = document.createElement("div");
    carousel.setAttribute("class","carousel-inner");

   
    for (var i = 0; i < recipe.pictures.length; i++) {
        var imgdiv = document.createElement("div");
        imgdiv.setAttribute("class", "image");
        if (i === 0) {
          imgdiv.setAttribute("class", "carousel-item active");
        } else {
          imgdiv.setAttribute("class", "carousel-item");
        }
      
        var img = document.createElement("img");
        img.setAttribute("src", recipe.pictures[i]);
        img.setAttribute("class", " img-custom"); 
        imgdiv.appendChild(img);
        carousel.appendChild(imgdiv);
      }

      images.appendChild(carousel);

      var buttonprev = document.createElement("button");
      buttonprev.setAttribute("class","carousel-control-prev");
      buttonprev.setAttribute("type","button");
      buttonprev.setAttribute("data-bs-target","#carouselExampleControls");
      buttonprev.setAttribute("data-bs-slide","prev");

      var buttonprevspan1 = document.createElement("span");
      buttonprevspan1.setAttribute("class","carousel-control-prev-icon");
      buttonprevspan1.setAttribute("aria-hidden","true");
      buttonprev.appendChild(buttonprevspan1);

      var buttonprevspan2 = document.createElement("span");
      buttonprevspan2.setAttribute("class","visually-hidden");
      buttonprevspan2.textContent = "Previous";
      buttonprev.appendChild(buttonprevspan2);

      images.appendChild(buttonprev);


      var buttonnext = document.createElement("button");
      buttonnext.setAttribute("class","carousel-control-next");
      buttonnext.setAttribute("type","button");
      buttonnext.setAttribute("data-bs-target","#carouselExampleControls");
      buttonnext.setAttribute("data-bs-slide","next");

      var buttonnextspan1 = document.createElement("span");
      buttonnextspan1.setAttribute("class","carousel-control-next-icon");
      buttonnextspan1.setAttribute("aria-hidden","true");
      buttonnext.appendChild(buttonnextspan1);

      var buttonnextspan2 = document.createElement("span");
      buttonnextspan2.setAttribute("class","visually-hidden");
      buttonnextspan2.textContent = "Next";
      buttonnext.appendChild(buttonnextspan2);

      images.appendChild(buttonnext);
      main.appendChild(images);

      var ingredients = document.createElement("b");
      ingredients.textContent="Ingredients : ";
      var ingreList =  document.createElement("span");
      var p = "";
      for(var i=0; i < recipe.ingredients.length ; i++){
        if(i == recipe.ingredients.length-1){
            p += recipe.ingredients[i] ;
        }
        else{
             p += recipe.ingredients[i] + ", ";
        }
       
      }
      ingreList.textContent = p;
      main.appendChild(ingredients);
      main.appendChild(ingreList);
      var br = document.createElement("br");
      main.appendChild(br);
      var instuction = document.createElement("b");
      instuction.textContent="Instruction : ";
      var ins =  document.createElement("span");
      ins.textContent = recipe.instructions;
      main.appendChild(instuction);
      main.appendChild(ins);
      main.appendChild(document.createElement("br"))

      if (recipe.tips.length != 0) {
        var tips = document.createElement("b");
        tips.textContent = "Tips: ";
        main.appendChild(tips);
      
        var list = document.createElement("ul");
        for (var i = 0; i < recipe.tips.length; i++) {
          var listItem = document.createElement("li");
          listItem.setAttribute("class","tips");
          listItem.textContent = recipe.tips[i];
          list.appendChild(listItem);
        }
        main.appendChild(list);
      }


      if (recipe.interstingFacts.length != 0) {
        var facts = document.createElement("b");
        facts.textContent = "Intersting facts: ";
        main.appendChild(facts);
      
        var listF = document.createElement("ul");
        for (var i = 0; i < recipe.interstingFacts.length; i++) {
          var listFact = document.createElement("li");
          listFact.setAttribute("class","tips");
          listFact.textContent = recipe.tips[i];
          listF.appendChild(listFact);
        }
        main.appendChild(listF);
      }
      
      
});