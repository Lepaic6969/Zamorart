const $videosHistoria=document.querySelectorAll("#video-historia");

const cb=(entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.play();
        }else{
            entry.target.pause();
        }

        //Esto es para que cuando cambies de ventana el video también se pause.
        w.addEventListener("visibilitychange",e=>
            d.visibilityState==="visible"
                ? entry.target.play()
                :entry.target.pause());
        
    });
}
//Defino el observador.
const observer=new IntersectionObserver(cb,{threshold:0.5}); //50% del video visible para que se reproduzca.

//Asigno el observador a cada uno de los videos que quiero monitorear.
$videosHistoria.forEach(video=>{
    observer.observe(video);
});