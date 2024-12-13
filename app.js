async function renderProductsSlider(){
    let response = await fetch("https://fakestoreapi.com/products");
    let products = await response.json();

    if(Array.isArray(products)){
        console.log(products)
        if(products.length>0){
            let w_p_slider = document.createElement('div');
            let slider_html = '';
            w_p_slider.classList.add('products-w-slider');
            
            for(let product of products){
                slider_html += `
                    <div>
                        <div class="w-product">
                            <a href="#" class="w-image"><img src="${product.image}" width="200" height="200" alt="${product.title}"></a>
                            <a class="w-title" href="#">${product.title}</a>
                            <div class="w-price">$${product.price}</div>
                        </div>
                    </div>
                `;
            }
            w_p_slider.innerHTML = slider_html;
            await document.querySelector('.sample-container').appendChild(w_p_slider);
            var slider = tns({
                container: '.products-w-slider',
                fixedWidth: 150,
                items: 2,
                slideBy: 1,
                autoplay: false,
                gutter: 5,
                mouseDrag: true,
                controlsText: ["",""],
                loop: false
            });
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    renderProductsSlider();
});
