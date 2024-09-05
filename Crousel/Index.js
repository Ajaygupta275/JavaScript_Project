document.addEventListener('DOMContentLoaded',()=>{
    const prevButton=document.querySelector('.prev');
    const nextButtton=document.querySelector('.next');
    const carouselItems=document.querySelector('.carousel-items');
    const items=document.querySelectorAll('.carousel-item');


    let currentIndex=0;

    function showItem(index){
        carouselItems.computedStyleMap.transform='translateX(-${index*100}%)';


    }
    prevButton.addEventListener('click',()=>{
        currentIndex=(currentIndex>0)?currentIndex-1:items.length-1;
        showItem(currentIndex);
    });
    nextButtton.addEventListener('click',()=>{
        currentIndex=(currentIndex<items.length-1)?currentIndex + 1 :0;
        showItem(currentIndex);
    });

    setInterval(()=>{
        nextButtton.click();
    },3000
)
})