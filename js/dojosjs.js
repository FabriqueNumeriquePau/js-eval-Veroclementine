console.log("Go Chuck !");



let chucky = document.querySelectorAll("div");
let ima = chucky[0];

ima.addEventListener("mouseover", function(){
    ima.style.borderRadius = "0%";
});

ima.addEventListener("mouseleave", function(){
    ima.style.borderRadius = "50%";

    }
);


// etape 2 ne marche pas
let article = document.querySelector("article");
let articledown = article.nextElementSibling;

function myFunction() {
    let x = document.getElementById("article").nextSibling.innerHTML; 
    document.getElementById("articledown").innerHTML = x;
  }