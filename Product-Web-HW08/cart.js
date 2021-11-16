import { products } from './products.js';
import { getAllCookie , getKey , getValue , deleteData } from './cookie.js';

export const numqty = document.querySelector('#numqty');
export const totalprice = document.querySelector('#totolprice');
export const cartIcon = document.querySelector('#cart');

export let cart = { items: [], totalPrice: 0, itemIdIncart: [], totalQty: 0 };

export const buttonclear = document.querySelector('#clear');

oldCart();

buttonclear.addEventListener('click', () => {
    cart.itemIdIncart = [];
    cart.items = [];
    cart.totalPrice = 0;
    cart.totalQty = 0;
    numqty.textContent = "0";
    totalprice.textContent = "Price : 0";
    deleteData();
})

cartIcon.addEventListener('click', () => {
    alert(showItemInCart());
})

export default function showItemInCart() {
    let string = ""
    for (let i of cart.items) {
        string += `${i.product} Price : ${i.price} Baht Qty : ${i.qty}\n`
    }
    string += `\n Total Qty : ${cart.totalQty} `;
    string += `\n Total Price : ${cart.totalPrice} Baht`;
    return string;
}

export function oldCart(){
    for(let i =0; i < getAllCookie().length; i++){
        cart.itemIdIncart.push(getKey(i));
    }
    if(!(cart.itemIdIncart.length === 1)){
    for(let i =0; i< getAllCookie().length; i++){
        cart.items.push({
            product: products.find((pd) => {
                return pd.id == getKey(i);
            }).name,
            productId: getKey(i),
            qty: parseInt(getValue(getKey(i))),
            price: products.find((pd) => {
                return pd.id == getKey(i);
            }).price
        })
    }
    }
    cart.items.forEach((pc) => {
        cart.totalPrice += pc.price * pc.qty;
        cart.totalQty += pc.qty
    })
    numqty.textContent = cart.totalQty;
    totalprice.textContent = cart.totalPrice + " Baht";
}
