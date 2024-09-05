document.addEventListener('DOMContentLoaded',()=>{
   
    const form=document.getElementById('grocery-form');
    const itemInput=document.getElementById('item-input');
    const groceryList=document.getElementById('grocery-list')

     function addItem(e){
        e.preventDefault();

        const itemText=itemInput.value.trim();

        if(itemText!==''){
            const listItem=document.createElement('li');
            listItem.textContent=itemText;

            const deleteButton=document.createElement('button');
              deleteButton.textContent='Delete';
              deleteButton.classList.add('delete');
              deleteButton.addEventListener('click',()=>{
                groceryList.removeChild(listItem);
              });

              listItem.appendChild(deleteButton);
              groceryList.appendChild(listItem);
              itemInput.value='';
        }
     }


     form.addEventListener('submit',addItem);
})