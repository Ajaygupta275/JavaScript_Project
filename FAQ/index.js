document.addEventListener('DOMContentLoaded',function(){
    const faqQuestion=document.querySelectorAll('.faq-question');

    faqQuestion.forEach(question=>{
        question.addEventListener('click',function(){
            const answer=this.nextElementSibling;

            if(answer.style.display==='none' || !answer.style.display){
                answer.style.display='block';

            }else{
                answer.style.display='none'
            }
        });
    });
});