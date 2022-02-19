/* eslint-disable no-plusplus */

import { setLocalStorage, getLocalStorage } from "./index";

/* eslint-disable import/prefer-default-export */
let cart = [];
if (localStorage.getItem("cart")) {
    cart = getLocalStorage("cart");
}
export const addToCart = (newProduct, next) => {
    const exitsProduct = cart.find((item) => item.id === newProduct.id);

    if (!exitsProduct) {
        cart.push(newProduct);
    } else {
        exitsProduct.quantity += newProduct.quantity;
    }
    setLocalStorage("cart", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const increaseQuantityFromCart = (id, next) => {
    cart.find((item) => item.id === +id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const decreaseQuantityFromCart = (id, next) => {
    const currentProduct = cart.find((item) => item.id === +id);
    currentProduct.quantity--;
    if (currentProduct.quantity < 1) {
        const confirm = window.confirm("bạn có chắc chắn muốn xóa sản phẩm không?");
        if (confirm) {
            cart = cart.filter((item) => item.id !== +id);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const removeItemFromCart = (id, next) => {
    const confirm = window.confirm("bạn có chắc muốn xóa sản phẩm?");
    if (confirm) {
        cart = cart.filter((item) => item.id !== +id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
// export const getTotalPrice = () => {

// };