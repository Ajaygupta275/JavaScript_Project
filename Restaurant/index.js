const menuItems = [
    {
        name: "Margherita Pizza",
        description: "Classic pizza with tomatoes, mozzarella cheese, and fresh basil.",
        price: "$10.99"
    },
    {
        name: "Caesar Salad",
        description: "Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing.",
        price: "$8.99"
    },
    {
        name: "Spaghetti Bolognese",
        description: "Spaghetti with a rich and savory meat sauce.",
        price: "$12.99"
    },
    {
        name: "Grilled Chicken Sandwich",
        description: "Grilled chicken breast with lettuce, tomato, and mayo on a toasted bun.",
        price: "$9.99"
    }
];


function createMenuItem(item){

    const menuItem=document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemName=document.createElement('h2');
    itemName.textContent=item.name;

    const itemDescription=document.createElement('p');
    itemDescription.textContent=item.description;

    const itemPrice=document.createElement('p');
    itemPrice.textContent = item.price;
    
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemPrice)

    return menuItem
}


function displayMenu(items){
    const menuContainer=document.getElementById('menu');
    items.forEach(item=>{
        const menuItem=createMenuItem(item);
        menuContainer.appendChild(menuItem);
    });
}

document.addEventListener('DOMContentLoaded',()=>{
    displayMenu(menuItems);
})

