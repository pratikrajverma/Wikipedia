const gratersymbol1 = document.querySelector( ".grater-symbol1" );
const discriptionsublist1 = document.querySelector(".discription-sublist1");
discriptionsublist1.classList.add( "sublist-active");
gratersymbol1.addEventListener("click", ()=>{
     discriptionsublist1.classList.toggle("sublist-active");

     if(gratersymbol1.style.border==""){
         gratersymbol1.style.border="2px solid blue";
         gratersymbol1.style.transform="rotate(90deg)";
         
        }else{
            gratersymbol1.style.border="";
            gratersymbol1.style.transform="rotate(-0deg)";
     }
})
gratersymbol1.classList.add("rotate-transition");


const gratersymbol2 = document.querySelector( ".grater-symbol2" );
const discriptionsublist2 = document.querySelector(".discription-sublist2");
discriptionsublist2.classList.add( "sublist-active");

gratersymbol2.addEventListener("click", ()=>{
    discriptionsublist2.classList.toggle("sublist-active");
    if(gratersymbol2.style.border=="")
    {
        gratersymbol2.style.border="2px solid blue";
        gratersymbol2.style.transform="rotate(90deg)";
    }else{
        gratersymbol2.style.border="";
        gratersymbol2.style.transform="rotate(-0deg)";
    }
})
gratersymbol2.classList.add("rotate-transition");