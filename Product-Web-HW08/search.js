import { showProduct } from "./product-list.js";
import { products } from './products.js';

const button = document.querySelector('#search');
const searchpanel = document.querySelector('#searchpanel');

let toggle = false; 
button.addEventListener("click", () => {
    toggle = !toggle;
    console.log(toggle);
    if (toggle) {
        const active = document.querySelector('#active');
        const searchValue = document.querySelector('#searchValue');
        active.setAttribute('style','display: block; ');
        searchValue.setAttribute('style','display: block;');
        active.addEventListener("click", () => {
            showProduct(item);
        })

        let item = [];
        searchValue.addEventListener('keyup', () => {
            let value = new RegExp(searchValue.value, 'i');
            let itemsearch = [];
            products.map((p) => {
                if (p.name.match(value) != null) {
                    itemsearch.push(p);
                }
            })
            item = itemsearch;
            let empty = '';
            if (empty.match(value) != null) {
                showProduct(products)
            }
        })
    }else{
        active.setAttribute('style','display: none;');
        searchValue.setAttribute('style','display: none;');
    }

})