//váriaveis Globais
const titulo = document.querySelector('.apresentacao h1')
const subtitulo = document.querySelector(".apresentacao h2")


//Funções
function typeWriter(elemento, callback){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    textoArray.forEach((letra, index) => {
        setTimeout(()=>{
            elemento.innerHTML += letra
        }, 75 * index)
    });
    setTimeout(callback, 75 * textoArray.length);
}

function typeWritersub(elemento){
    const textoArray = elemento.innerHTML.split(''); 
    elemento.innerHTML = ''
    textoArray.forEach((letra, index) => {
        setTimeout(()=>{
            elemento.style.display = 'block'; 
            elemento.innerHTML += letra
        }, 75 * index)
    });
}

typeWriter(titulo, function() {
    typeWritersub(subtitulo);
});


let animate = document.querySelectorAll("[data-anime]")
let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('animate')
        } else{
            entry.target.classList.remove('animate')
        }
    })
})
animate.forEach((el)=>{
    observer.observe(el)
})
