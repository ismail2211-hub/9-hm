const products = [
    { name: "Mars rug", price: 100  , image: "img/img1.png" },
    { name: "Keyboard sticker", price: 40, image: "img/img12.png" },
    { name: "Smart watch", price: 899, image: "img/img2.png" },
    { name: "Wireless keyboard", price: 399, image: "img/img11.png" },
    { name: "Mouse", price: 359, image: "img/img3.png" },
    { name: "AirPods", price: 499, image: "img/img4.png" },
    { name: "Powerbank", price: 899, image: "img/img5.png" },
    { name: "USB flash drive", price: 299, image: "img/img9.png" },
    { name: "Smartphone", price: 3999, image: "img/img8.png" },
    { name: "Playstation 5", price: 7499, image: "img/img7.png" },
    { name: "Yandex Station", price: 3999, image: "img/img10.png" },
    { name: "Planshet Samsung", price: 4999, image: "img/img6.png" }
];


let mainCard = document.getElementById('mainCard');
let input = document.getElementById('input');

function renderList(items) {
    mainCard.innerHTML = "";
    items.forEach(product => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card bg-base-100 w-[290px] h-[290px] shadow-sm flex flex-col items-center">
                <figure>
                    <img src="${product.image}" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${product.name}</h2>
                    <h2 class="card-title text-center text-[#000000AB]"><img src="img/Coin 1 (1).png" alt=""> ${product.price} coins</h2>
                </div>
            </div>
        `;
        mainCard.appendChild(div);
    });
}

renderList(products);

input.addEventListener('input', () => {
    const inputValue = input.value.toLowerCase();
    const filterProduct = products.filter(productFilter =>
        productFilter.name.toLowerCase().includes(inputValue)
    );
    renderList(filterProduct);
});
