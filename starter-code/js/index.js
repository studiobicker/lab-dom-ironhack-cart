function deleteItem(e){
  const currTarget = e.currentTarget;
  const currProduct = currTarget.parentNode;//parent of "target"
  currProduct.remove();
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
 const arrayProducts = document.getElementsByClassName("product-row");
 let sum = 0;

  for (let i = 0; i < arrayProducts.length; i++) {
    const product = arrayProducts[i];
    const price = product.querySelector(".pprice").innerHTML;
    const quantity = product.querySelector(".pqty").value;
    const total = product.querySelector(".ptotal");
    total.innerHTML = (price * quantity).toFixed(2);

    sum += price * quantity;
  }
  const carttotal = document.querySelector(".carttotal");
  carttotal.innerHTML = sum.toFixed(2); 

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  const productContainer = document.getElementById('product-rows');
  const productRow = document.createElement('div');
  productRow.setAttribute('class', 'product-row');
  productRow.innerHTML = `
  <div><span class="pname">${itemName}</span></div>
  <div>$<span class="pprice">${itemUnitPrice}</span></div>
  <div><label>QTY</label><input type="text" class="pqty" value="0" /></div>
  <div>$<span class="ptotal">0.00</span></div>
  <button class="btn btn-delete">delete</button>`;
  productContainer.appendChild(productRow);
  const btnDelete = productRow.lastChild;
  btnDelete.onclick = deleteItem;

  document.getElementById('newProduct').value ="";
  document.getElementById('newProductPrice').value = "";
}

function createNewItem(){
  const newName = document.getElementById('newProduct').value;
  const newPrice = document.getElementById('newProductPrice').value;

  if(newName && newPrice) {
    createNewItemRow(newName,newPrice);
  } else {
    const errorMsg = document.getElementById('error');
    errorMsg.innerHTML = 'Please fill in a product name and price.';
  }
  
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
