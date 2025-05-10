let products = null;
// get datas from file json
fetch('/products.json')
  .then(response => response.json())
  .then(data => {
      products = data;
      addDataToHTML();
})

function addDataToHTML(){
// remove datas default from HTML
let listProductHTML = document.querySelector('.listProduct');

// add new datas
if(products != null) // if has data
{
  products.forEach(product => {
      let newProduct = document.createElement('a');
      newProduct.href = '/Html/detail.html?id=' + product.id;
      newProduct.classList.add('item');
      newProduct.innerHTML = 
      `<img src="${product.image}" alt="">
      <h2>${product.name}</h2>
      <div class="price">$${product.price}</div>      `;
      
      listProductHTML.appendChild(newProduct);

  });
}
}
