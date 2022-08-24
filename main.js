//MENU OF EMAIL RIGHT SIDE
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//BURGER MENU LEFT SIDE
const burgerMenu = document.querySelector('.icon-burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
//SHOP CAR RIGHT SIDE
const shopcar = document.querySelector('.navbar-shopping-cart');
const shopCarMenu = document.querySelector('.product-detail');
//GET PRODUCTS
const cardsContainer = document.querySelector('.cards-container');

// CALLING OR INVOKING THE EVENT LISTENERS WITH THEIR FUNCTIONS
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shopcar.addEventListener('click', toggleShopCarMenu);

// STATING OR DECLARE THE FUNCTION OF EMAIL MENU
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    shopCarMenu.classList.add('inactive')
}
// STATING OR DECLARE THE FUNCTION OF BURGER MENU
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
    shopCarMenu.classList.add('inactive')
}
// STATING OR DECLARE THE FUNCTION OF SHOP CAR
function toggleShopCarMenu(){
    shopCarMenu.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
}

// CREATING CAROUSEL PRODUCTS WITH PURE JS, INSTEAD OF, DOING IT IN HTML 

const productList = [];
productList.push({
    name: 'ProductName',
    price: 100,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""',
});
productList.push({
    name: 'ProductName2',
    price: 200,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""',
});
productList.push({
    name: 'ProductName3',
    price: 300,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""',
});
productList.push({
    name: 'ProductName4',
    price: 1000,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""',
});
productList.push({
    name: 'ProductName5',
    price: 1500,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""',
});


function renderProducts(arr){
for (product of arr){
   //<div class="product-card">
   const productCard = document.createElement('div');
   productCard.classList.add('product-card');
   
   //<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">

   const productImage = document.createElement('img');
   productImage.setAttribute('src', product.img);
   
   //<div class="product-info">
   const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');
  
   
   //<div>
   const productEmptyDiv = document.createElement('div');

   //<p>PRICE</p>
   const productPrice = document.createElement('p');
   productPrice.innerText = '$' + product.price;
   
   //<p>PRODUCTNAME</p>
   const productName = document.createElement('p');
   productName.innerText = product.name;
   
   //<figure>
   const productFigure = document.createElement('figure');
   
   //<img src="./icons/bt_add_to_cart.svg" alt="">
   const productFigureImg = document.createElement('img');
   productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
   cardsContainer.appendChild(productCard);
   
   productCard.appendChild(productImage);
   productCard.appendChild(productInfo);
   
   productEmptyDiv.appendChild(productPrice);
   productEmptyDiv.appendChild(productName);

   
   productInfo.appendChild(productEmptyDiv);
   productInfo.appendChild(productFigure);
   productFigure.appendChild(productFigureImg);
   


//function resume:
//first i create the elements html (divs, p, imgs, figure, etc), then i assign them their 
//atributs (src, etc), and finally, i add them, how direct child's of the father container.    
    }
}

renderProducts(productList);

