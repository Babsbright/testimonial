const customerImage = document.querySelector('#customer-img');
const customerText = document.querySelector('#customer-text');
const customerName = document.querySelector('#customer-name');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let index = 0;
const customers = [];


//Create a customer constructor
function Customer(img, name, text) {
    this.img = img;
    this.name = name;
    this.text = text;
}

//Create new customer with the customer constructor
function createCustomer(img, name, text) {
     let fullImg = `img/customer-${img}.jpg`;
     let customer = new Customer(fullImg, name, text)
     customers.push(customer)
}


createCustomer(0, 'Rosemary', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, accusantium eum! Quisquam, corrupti sit eum repellat temporain corporis ducimus dicta necessitatibus asperiores.")
createCustomer(1, 'Sandra', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellat temporain corporis ducimus dicta necessitatibus asperiores.")
createCustomer(2, 'Nancy', "Lorem ipsum dolo Ab, accusantium eum! Quisquam, corrupti sit eum repellat temporain corporis ducimus dicta necessitatibus asperiores.")
createCustomer(3, 'John', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, accusantium eum! Quisquam, corrupti sit eum repellat temporain corporis ducimus dicta necessitatibus asperiores.")
createCustomer(4, 'Peter', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, accusantium eum! Quisquam.")
createCustomer(5, 'Kemi', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, accusantium eum! Quisquam, coritatibus asperiores.")


prev.addEventListener('click', function(){
    if (index ==0) {
        index= customers.length-1;
    }
    index--

    customerImage.src = customers[index].img
    customerName.textContent = customers[index].name
    customerText.textContent = customers[index].text
})


next.addEventListener('click', function(){
    if (index == customers.length-1) {
        index= 0;
    }
    index++;

    customerImage.src = customers[index].img
    customerName.textContent = customers[index].name
    customerText.textContent = customers[index].text
})