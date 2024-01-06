const pole_tovar = ["Jemná Hnedá Harmonia", "Čokoládový Zvrat", "Luxusná Tmavá Poézia", "Karamelový Delight", "Horká Čokoláda Zázrak", "Čokoládový Slávnostný Únik", "Exotický Príliv Čokolády", "Hladká Mliečna Melódia", "Čokoládová Nostalgia Noir"]
const ceny = [120, 85, 150, 110, 95, 130, 140, 75, 2.62]
const pocty = [0,0,0,0,0,0,0,0,0]

function generuj() {
    var str = '<ul class="row">';
    for (var i = 0; (i < pole_tovar.length) && (i < ceny.length); i++) {
        str += '<li class="product col-md-6 col-lg-4 col-xl-3 pb-5 text-center"><h4>' + pole_tovar[i] + '</h4> <img src="https://placehold.co/250"> <p class="price text-success fw-bold" data-price="' + ceny[i] + '">' + ceny[i] + ' &euro;</p> <button type="button" class="text-dark bg-white btn btn-outlineprimary btn-block" onclick="addToCart(' + i + ')" >pridaj do kosika</button></li> ' ;
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

function updateCartTotal() {
    const cartTotalElement = document.getElementById('cart-total');
    let newTotal = 0;

    for (let i = 0; i < pocty.length; i++) {
        newTotal += pocty[i] * ceny[i];
    }

    newTotal = newTotal.toFixed(2);
    cartTotalElement.textContent = newTotal;
}

function clearCart() {
    for (let i = 0; i < pocty.length; i++) {
        pocty[i] = 0;
    }
    
    updateCartItems();
    updateCartTotal();
}