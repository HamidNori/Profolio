let products = null;

fetch ('/products.json')
.then(response => response.json())
.then(data => {
    products = data
    console.log(products);
    addDataToHTML();
})

let listProduct = document.querySelector('.listProduct');
function addDataToHTML() {
  listProduct.innerHTML = ''; // Clear any previous products

  products.forEach(product => {
    let newProduct = document.createElement('a');
    newProduct.href = '/detail.html?id=' + product.id;
    newProduct.classList.add('item');
    newProduct.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>$${product.price}</p>
    `;

    listProduct.appendChild(newProduct);
  });
}
