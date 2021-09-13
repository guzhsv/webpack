export default function getCartHtml(item){
    return `<div class="cart-item">
        ${getMediaHtml(item)}
        <h3 class="header_cart">${item.headerCart}</h3>
    </div>`;
}

function getMediaHtml(item){
    if (item.type == "img"){
            return `<img src="${item.media}" class="image_cart">`;
    }
    else if(item.type == "audio"){
        return  `<audio src="${item.media}" class="image_cart" controls="controls"></audio>`;
    }
    else {
       return `<video src="${item.media}" class="image_cart" controls="controls"></video>`;
    }
}
