var sidemenubar=document.querySelector(".side-menu-bar")

function show(){
    sidemenubar.style.left="0%"
}


function closee(){
    sidemenubar.style.left="-60%"
}


var search=document.getElementById("search")
var product=document.querySelector(".product")
var elements=product.querySelectorAll("div")

search.addEventListener("keyup",function(e){

    var enteredvalue=event.target.value.toUpperCase()

    for(i=0;i<elements.length;i++){
        var productname=elements[i].querySelector("h5").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            elements[i].style.display="none"
        }
        else{
             elements[i].style.display="block"
        }
    }
   

})
