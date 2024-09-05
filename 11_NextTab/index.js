document.addEventListener('DOMContentLoaded',()=>{

    const tabs=document.querySelectorAll('.tab-button');
    const contents=document.querySelectorAll('.tab-content');


    function showTab(tabId){
        contents.forEach(content=>{
            content.classList.remove('active');
            if(content.id===tabId){
                content.classList.add('active');
            }
        });


        tabs.forEach(tab=>{
            tab.classList.remove('active');
            if(tab.getAttribute('data-tab')===tabId){
                tab.classList.add('active');
            }
        });
    }
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            showTab(tabId);
        });
    });

    // Display the first tab by default
    if (tabs.length > 0) {
        showTab(tabs[0].getAttribute('data-tab'));
    }
})