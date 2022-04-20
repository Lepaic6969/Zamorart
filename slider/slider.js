(function(){
    const sliders=[...document.querySelectorAll(".slider_body")]; //Convierto la lista de Nodos en un Array.
    const arrowNext=document.getElementById("after");
    const arrowBefore=document.getElementById("before");
    let value;

    //Slider automático
  
    let automatico= setInterval(() => {
        value=Number(document.querySelector(".slider_body--show").dataset.id);
        value++;
        value=validarId(value);
        if(value>=2){
            sliders[value-2].classList.toggle("slider_body--show");
            sliders[value-1].classList.toggle("slider_body--show");
        }else{
            sliders[sliders.length-1].classList.toggle("slider_body--show");
            sliders[value-1].classList.toggle("slider_body--show");
        }
        

    }, 10000);

    //Slider Manual

    arrowNext.addEventListener("click",()=>changePosition(1));
    arrowBefore.addEventListener("click",()=>changePosition(-1));

    const validarId=(value)=>{
        if(value===0 || value===sliders.length+1){
            value=(value===0) ? sliders.length:1;
        }
        return value;
    }

    function changePosition(change){
        //Apago el slider automático.
        clearInterval(automatico);
        const currentElement=Number(document.querySelector(".slider_body--show").dataset.id);
        value=currentElement;
        value+=change;
        value=validarId(value);
      
       sliders[currentElement-1].classList.toggle("slider_body--show");
       sliders[value-1].classList.toggle("slider_body--show");
       
       //Enciendo el Slider Automático
       automatico=setInterval(() => {
        value=Number(document.querySelector(".slider_body--show").dataset.id);
        value++;
        value=validarId(value);
        if(value>=2){
            sliders[value-2].classList.toggle("slider_body--show");
            sliders[value-1].classList.toggle("slider_body--show");
        }else{
            sliders[sliders.length-1].classList.toggle("slider_body--show");
            sliders[value-1].classList.toggle("slider_body--show");
        }
        

    }, 10000);
    
    }


  
})();