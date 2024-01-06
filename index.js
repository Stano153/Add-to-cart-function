const pole_tovar = ["Jemná Hnedá Harmonia", "Čokoládový Zvrat", "Luxusná Tmavá Poézia", "Karamelový Delight", "Horká Čokoláda Zázrak", "Čokoládový Slávnostný Únik", "Exotický Príliv Čokolády", "Hladká Mliečna Melódia", "Čokoládová Nostalgia Noir"]
const ceny = [120, 85, 150, 110, 95, 130, 140, 75, 2.62]
const pocty = [0,0,0,0,0,0,0,0,0]

function generuj() {
    var str = '<ul class="row">';
    for (var i = 0; (i < pole_tovar.length) && (i < ceny.length); i++) {
        str += '<li class="col-md-6 col-lg-4 col-xl-3"><h4>' + pole_tovar[i] + '</h4> <p class="price" data-price="' + ceny[i] + '">' + ceny[i] + ' &euro;</p> <button onclick="addToCart(' + i + ')" >pridaj do kosika</button></li> ' ;
    }
    str += '</ul>';
    document.getElementById('products').innerHTML += str;
}

function addToCart(index) {
    const selectedPrice = ceny[index];
    pocty[index]++;
    
    updateCartItems();

    updateCartTotal(selectedPrice);
}

function updateCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    for (let i = 0; i < pole_tovar.length; i++) {
        if (pocty[i] > 0) {
            const listItem = document.createElement('li');
            listItem.textContent = `${pole_tovar[i]} (${pocty[i]} ks)`;
            cartItems.appendChild(listItem);
        }
    }
}

function updateCartTotal(price) {
    const cartTotalElement = document.getElementById('cart-total');
    const currentTotal = parseFloat(cartTotalElement.textContent);
    const newTotal = (currentTotal + price).toFixed(2);
    cartTotalElement.textContent = newTotal;
}

