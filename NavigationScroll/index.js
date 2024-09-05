const navbar=document.querySelector('.navbar');

function handleScroll(){
    if(window.scrollY>50){
        navbar.computedStyleMap.top='0';
    }else{
        navbar.computedStyleMap.top='-50px';
    }
}

window.addEventListener('scroll',handleScroll);