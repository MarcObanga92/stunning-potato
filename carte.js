const product = [
    {
        id: 0,
        image: 'image/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: 'image/hh-2.jpg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: 'image/ee-3.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        title: 'Head Phones',
        price: 100,
    }
];

let cart = [];
let i = 0;

function addtocart(id) {
    const item = product.find((productItem) => productItem.id === id);
    cart.push({ ...item, quantity: 1 });
    displaycart();
}

function incrementQuantity(id) {
    const item = cart.find((cartItem) => cartItem.id === id);
    if (item) {
        item.quantity++;
    }
    displaycart();
}

function decrementQuantity(id) {
    const item = cart.find((cartItem) => cartItem.id === id);
    if (item && item.quantity > 1) {
        item.quantity--;
    } else {
        cart = cart.filter((cartItem) => cartItem.id !== id);
    }
    displaycart();
}

function likeItem(id) {
    const likeIcon = document.getElementById(`like${id}`);
    likeIcon.classList.toggle('liked'); // Ajoute/retire la classe 'liked' pour changer la couleur du cœur
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item) => {
            total += item.price * item.quantity;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${item.image}'>
                    </div>
                    <p style='font-size:12px;'>${item.title}</p>
                    <h2 style='font-size: 15px;'>$ ${item.price}.00</h2>
                    <button onclick='incrementQuantity(${item.id})'>+</button>
                    <span>${item.quantity}</span>
                    <button onclick='decrementQuantity(${item.id})'>-</button>
                </div>`
            );
        }).join('');
    }
}

document.getElementById('root').innerHTML = product.map((item) => {
    var { id, image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src='${image}'></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>
                <button onclick='addtocart(${id})'>Add to cart</button>
                <button onclick='likeItem(${id})'><i class='fa-solid fa-heart' id='like${id}'></i></button>
            </div>
        </div>`
    );
}).join('');
