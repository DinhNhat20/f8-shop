const products = [
    {
        name: "iPhone 14 Pro 128GB",
        oldPrice: "30.990.000đ",
        currentPrice: "23.990.000đ",
        image: "./assets/img/sun.png",
        sold: 88,
        brand: "Apple",
        origin: "USA",
        saleOff: "10%"
    },
    {
        name: "Samsung Galaxy S23",
        oldPrice: "27.990.000đ",
        currentPrice: "20.990.000đ",
        image: "./assets/img/sun.png",
        sold: 52,
        brand: "Samsung",
        origin: "Korea",
        saleOff: "15%"
    },
    {
        name: "Laptop ASUS TUF Gaming",
        oldPrice: "27.990.000đ",
        currentPrice: "24.990.000đ",
        image: "./assets/img/sun.png",
        sold: 35,
        brand: "ASUS",
        origin: "Taiwan",
        saleOff: "12%"
    },
];

const container = document.getElementById("product-container");

products.forEach(product => {
    const item = document.createElement("div");
    item.className = "grid__column-2-4";
    item.innerHTML = `
        <div class="home-product">
            <div class="grid__row">
                <!-- Product - item -->
                <div class="">
                    <a class="home-product-item" href="">
                        <div class="home-product-item__img" style="background-image: url('${product.image}')"></div>
                        <h4 class="home-product-item__name">${product.name}</h4>
                        <div class="home-product-item__price">
                            <span class="home-product-item__price-old">${product.oldPrice}</span>
                            <span class="home-product-item__price-current">${product.currentPrice}</span>
                        </div>
                        <div class="home-product-item__action">
                            <span class="home-product-item__like home-product-item__liked">
                                <i class="home-product-item__like-icon-fill fa-solid fa-heart"></i>
                                <i class="home-product-item__like-icon-empty fa-regular fa-heart"></i>
                            </span>
                            <div class="home-product-item__rating">
                                <i class="home-product-item__star--gold fa-solid fa-star"></i>
                                <i class="home-product-item__star--gold fa-solid fa-star"></i>
                                <i class="home-product-item__star--gold fa-solid fa-star"></i>
                                <i class="home-product-item__star--gold fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <span class="home-product-item__sold">${product.sold} đã bán</span>
                        </div>

                        <div class="home-product-item__origin">
                            <span class="home-product-item__brand">${product.brand}</span>
                            <span class="home-product-item__origin-name">${product.origin}</span>
                        </div>

                        <div class="home-product-item__favourite">
                            <i class="fa-solid fa-check"></i>
                            <span>Yêu thích</span>
                        </div>

                        <div class="home-product-item__sale-off">
                            <span class="home-product-item__sale-off-percent">${product.saleOff}</span>
                            <span class="home-product-item__sale-off-label">GIẢM</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    `;
    container.appendChild(item);
});