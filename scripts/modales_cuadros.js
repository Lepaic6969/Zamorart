const modalImagen=document.getElementById("modal-imagen");


//Aquí va la información que se inserta en cada modal.
const descripciones=[
    {
        id:"1",
        titulo:"Título Cuadro Frida Kahlo",
        descripcion:" Descripción breve del cuadro como técnica usada y los sentimientos que representa.",
        dimensiones:"Alto x Ancho, Marco en X Material.",
        lugar:"Se entregó en un lugar de la Mancha de cuyo nombre no quiero acordarme."
    },
    {
        id:"2",
        titulo:"Título Cuadro Perro Arrepentido",
        descripcion:" Descripción breve del cuadro como técnica usada y los sentimientos que representa.",
        dimensiones:"Alto x Ancho, Marco en X Material.",
        lugar:"Se entregó en un lugar de la Mancha de cuyo nombre no quiero acordarme."
    },
    {
        id:"3",
        titulo:"Título Cuadro Cocina",
        descripcion:" Descripción breve del cuadro como técnica usada y los sentimientos que representa.",
        dimensiones:"Alto x Ancho, Marco en X Material.",
        lugar:"Se entregó en un lugar de la Mancha de cuyo nombre no quiero acordarme."

    },
    {
        id:"4",
        titulo:"Título Cuadro Alce Multicolor",
        descripcion:" Descripción breve del cuadro como técnica usada y los sentimientos que representa.",
        dimensiones:"Alto x Ancho, Marco en X Material.",
        lugar:"Se entregó en un lugar de la Mancha de cuyo nombre no quiero acordarme."

    },
    {
        id:"5",
        titulo:"Título Cuadro Flores",
        descripcion:" Descripción breve del cuadro como técnica usada y los sentimientos que representa.",
        dimensiones:"Alto x Ancho, Marco en X Material.",
        lugar:"Se entregó en un lugar de la Mancha de cuyo nombre no quiero acordarme."

    },
    {
        id:"6",
        titulo:"Título Cuadro Diosito",
        descripcion:" Descripción breve del cuadro como técnica usada y los sentimientos que representa.",
        dimensiones:"Alto x Ancho, Marco en X Material.",
        lugar:"Se entregó en un lugar de la Mancha de cuyo nombre no quiero acordarme."

    },
    {
        id:"7",
        titulo:"Título Cuadro Virgen Santa",
        descripcion:" Descripción breve del cuadro como técnica usada y los sentimientos que representa.",
        dimensiones:"Alto x Ancho, Marco en X Material.",
        lugar:"Se entregó en un lugar de la Mancha de cuyo nombre no quiero acordarme."

    }
];


if(modalImagen){
    modalImagen.addEventListener("show.bs.modal",e=>{  //El evento es cuando se muestre el modal
        //console.log(e.relatedTarget); //Related target es a lo que le dí click
                                      //El e.target es el modal que se muestra
           const enlace=e.relatedTarget;
           const id=enlace.getAttribute("data-bs-imagen");
       

/*<img class="img-fluid w-50-personalizado"  src="../img/collage/1.1.jpeg" alt="Galeria 1">
<div class="p-5 w-50-personalizado border">
    <h1>Título del Cuadro</h1> 
    <p> Descripción breve del cuadro como técnica usada y los sentimientos que representa.</p>
    <p> Dimensiones y costo aproximado $######</p>
    <p>Lugar donde fue entregado</p>
</div> */
           const imagen=document.createElement("img");
           imagen.src=`../img/collage/${id}.jpg`;
           imagen.classList.add("img-fluid","w-50-personalizado");
           imagen.alt="Imagen Galería";

           const $div=document.createElement("div");
           $div.classList.add("p-5","w-50-personalizado");

           const $h1=document.createElement("h1");
           console.log(id);
           $h1.textContent=`${descripciones[Number(id)-1].titulo}`;

           const $p1=document.createElement("p"),
                $p2=document.createElement("p"),
                $p3=document.createElement("p");
            $p1.textContent=`${descripciones[Number(id)-1].descripcion}`;
            $p2.textContent=`${descripciones[Number(id)-1].dimensiones}`;
            $p3.textContent=`${descripciones[Number(id)-1].lugar}`;

            //Agrego toda la descripción dentro del div

            $div.appendChild($h1);
            $div.appendChild($p1);
            $div.appendChild($p2);
            $div.appendChild($p3);
            

           modalImagen.querySelector(".modal-body").appendChild(imagen);
           modalImagen.querySelector(".modal-body").appendChild($div);
           
          
       });
       
       // Cuando se cierra el modal tengo que eliminar la imagen que quedó previamente.
       
       modalImagen.addEventListener("hidden.bs.modal",e=>{ //El evento es cuando se esconde el modal
           modalImagen.querySelector(".modal-body").innerHTML="";
       });
}