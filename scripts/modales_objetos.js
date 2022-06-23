const modalImagen=document.getElementById("modal-imagen");


//Aquí va la información que se inserta en cada modal.
const descripciones=[
    {
        id:"1",
        titulo:"Chaqueta Puerquito",
        descripcion:" Descripción breve del objeto como técnica usada y los sentimientos que representa.",
        lugar:"Se entregó en un lugar de la Mancha de cuyo nombre no quiero acordarme."
    },
    {
        id:"2",
        titulo:"Dios Indígena",
        descripcion:"Descripción breve del objeto como técnica usada y los sentimientos que representa.",
        lugar:"Se entregó en un lugar de la Mancha de cuyo nombre no quiero acordarme."
    },
    {
        id:"3",
        titulo:"Zapatos Únicos",
        descripcion:" Descripción breve del objeto como técnica usada y los sentimientos que representa.",
        lugar:"Se entregó en un lugar de la Mancha de cuyo nombre no quiero acordarme."

    },
    {
        id:"4",
        titulo:"Campesinos en Madera",
        descripcion:"Descripción breve del objeto como técnica usada y los sentimientos que representa.",
        lugar:"Se entregó en un lugar de la Mancha de cuyo nombre no quiero acordarme."

    },
    {
        id:"5",
        titulo:"Piedra del Amor",
        descripcion:" Descripción breve del objeto como técnica usada y los sentimientos que representa.",
        lugar:"Se entregó en un lugar de la Mancha de cuyo nombre no quiero acordarme."

    },
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
           imagen.src=`../img/collage-2/${id}.jpg`;
           imagen.classList.add("img-fluid","w-50-personalizado");
           imagen.alt="Imagen Galería";

           const $div=document.createElement("div");
           $div.classList.add("p-5","w-50-personalizado");

           const $h1=document.createElement("h1");
           console.log(id);
           $h1.textContent=`${descripciones[Number(id)-1].titulo}`;

           const $p1=document.createElement("p"),
                $p3=document.createElement("p");
            $p1.textContent=`${descripciones[Number(id)-1].descripcion}`;
            $p3.textContent=`${descripciones[Number(id)-1].lugar}`;

            //Agrego toda la descripción dentro del div

            $div.appendChild($h1);
            $div.appendChild($p1);
            $div.appendChild($p3);
            

           modalImagen.querySelector(".modal-body").appendChild(imagen);
           modalImagen.querySelector(".modal-body").appendChild($div);
           
          
       });
       
       // Cuando se cierra el modal tengo que eliminar la imagen que quedó previamente.
       
       modalImagen.addEventListener("hidden.bs.modal",e=>{ //El evento es cuando se esconde el modal
           modalImagen.querySelector(".modal-body").innerHTML="";
       });
}