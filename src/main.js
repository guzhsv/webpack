import "./main.scss";
import items from './items';
import getCartHtml from "./cart";

const cartElement = document.getElementById('cart');

cartElement.innerHTML=items.reduce((previousValue, item)=>previousValue + getCartHtml(item),"");

