function isProduct() {
  const product = JSON.parse(localStorage.getItem('product'));
  if (product) {
    return true;
  }
  return false;
}
function productData() {
  return JSON.parse(localStorage.getItem('product'));
}
function updateProductData(data) {
  localStorage.setItem('product', JSON.stringify(data));
}
function signOut() {
  localStorage.removeItem('product');
}
export default {
  isProduct,
  productData,
  updateProductData,
  signOut,
};
