const productDec = Array.from(document.querySelectorAll(".product__quantity-control_dec"))
const productInc = Array.from(document.querySelectorAll(".product__quantity-control_inc"))
const productValue = Array.from(document.querySelectorAll(".product__quantity-value"))
const productAdd = Array.from(document.querySelectorAll(".product__add"))
const cartProducts = document.querySelector(".cart__products")
const productImage = document.querySelectorAll(".product__image")

for (let i = 0; i < productInc.length; i++) {
	productInc[i].addEventListener("click", () => {
		productInc[i].previousElementSibling.innerText ++;
	});
};

for (let i = 0; i < productDec.length; i++) {
	productDec[i].addEventListener("click", () => {
		if(productDec[i].nextElementSibling.innerText == 1){
		}  else{
			productDec[i].nextElementSibling.innerText --;
		   }
	});
};

for (let i = 0; i < productAdd.length; i++) {
    productAdd[i].addEventListener("click", () => {
        let children = Array.from(cartProducts.children)
        let attr = productAdd[i].closest(".product").getAttribute("data-id")
        let src = productImage[i].getAttribute("src")
        let indx = children.findIndex(e => e.getAttribute("data-id") === attr)

        if (children !== [] && indx != -1) {
            const cartProductCount = Array.from(document.querySelectorAll(".cart__product-count"))

            cartProductCount[indx].textContent = parseInt(cartProductCount[indx].textContent) + parseInt(productValue[i].textContent)
        }
        else {
            cartProducts.insertAdjacentHTML('beforeEnd',
             `<div class="cart__product" data-id="${attr}">
            <img class="cart__product-image" src="${src}">
            <div class="cart__product-count">${productValue[i].textContent}</div></div>`
            );
        }
    })
};








