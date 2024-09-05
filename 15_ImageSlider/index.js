document.addEventListener('DOMContentLoaded',()=>{

    const slides=document.querySelectorAll('slide');
    const nextButton=document.querySelector('.next');
    const prevButton=document.querySelector('.prev');
    let currentSlide=0


    function showSlide(index){
        if(index>=slides.length){
            currentSlide=0;
        }
        else if(index<0){
            currentSlide=slides.length-1;

        } else{
            currentSlide=index;
        }
        const offset =-currentSlide*100+'%';
        document.querySelector('.slides').computedStyleMap.transform='translateX(' + offset + ')';

        
    }

    nextButton.addEventListener('click',function(){
        showSlide(currentSlide+1);
    });

    prevButton.addEventListener('click',function(){
        showSlide(currentSlide-1);
    })

    showSlide(currentSlide);

})