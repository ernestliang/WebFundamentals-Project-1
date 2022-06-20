function getPrdFrmCat(category) {
    var products = ProductsArray.filter (x => x.categID == category);

    debugger;
    var img1 = document.getElementById("prdImg1");
    var img2 = document.getElementById("prdImg2");
    

    img1.src = products[0].img;
    img2.src = products[1].img;

    var ele1 = document.getElementById("href1");
    var ele2 = document.getElementById("href2");

    ele1.href = 'ProductPage.html?id=' + products[0].ID;
    ele2.href = 'ProductPage.html?id=' + products[1].ID;

    // --> Giving Categories BG Color

    // Obtaining related DOM elements
    var select0 = document.getElementById("cat0");
    var select1 = document.getElementById("cat1");
    var select2 = document.getElementById("cat2");
    var select3 = document.getElementById("cat3");

    // Resetting to Defaults
    select0.classList.remove('activeCat');
    select1.classList.remove('activeCat');
    select2.classList.remove('activeCat');
    select3.classList.remove('activeCat');

    // Finding the selected Category
    if(category == 0) {
        select0.classList.add('activeCat');
    }
    else if(category == 1) {
        select1.classList.add('activeCat');
    }
    else if(category == 2) {
        select2.classList.add('activeCat');
    }
    else if(category == 3) {
        select3.classList.add('activeCat');
    }
}

function getNewArrivalProducts() {

    var newProducts = ProductsArray.filter(x => x.type == 1);
    // Solving the Href's
    document.getElementById("newHref1").href = "ProductPage.html?id=" + newProducts[0].ID;
    document.getElementById("newHref2").href = "ProductPage.html?id=" + newProducts[1].ID;
    document.getElementById("newHref3").href = "ProductPage.html?id=" + newProducts[2].ID;

    // Solving the Prices
    document.getElementById("newImg1").src = newProducts[0].img;
    document.getElementById("newImg2").src = newProducts[1].img;
    document.getElementById("newImg3").src = newProducts[2].img;

    // Solving the Image Source
    document.getElementById("newPrice1").innerHTML = "Now going for " + newProducts[0].price + "$";
    document.getElementById("newPrice2").innerHTML = "Now going for " + newProducts[1].price + "$";
    document.getElementById("newPrice3").innerHTML = "Now going for " + newProducts[2].price + "$";
}

function getDiscountProducts() {

    var discProducts = ProductsArray.filter(x => x.type == 2);

    debugger;
    // Solving the Href's
    document.getElementById("discHref1").href = "ProductPage.html?id=" + discProducts[0].ID;
    document.getElementById("discHref2").href = "ProductPage.html?id=" + discProducts[1].ID;
    document.getElementById("discHref3").href = "ProductPage.html?id=" + discProducts[2].ID;

    // Solving the Prices
    document.getElementById("discImg1").src = discProducts[0].img;
    document.getElementById("discImg2").src = discProducts[1].img;
    document.getElementById("discImg3").src = discProducts[2].img;

    // Solving the Image Source
    document.getElementById("discPrice1").innerHTML = "Now going for " + discProducts[0].price + "$";
    document.getElementById("discPrice2").innerHTML = "Now going for " + discProducts[1].price + "$";
    document.getElementById("discPrice3").innerHTML = "Now going for " + discProducts[2].price + "$";
}

// CART OBJECTS AND ARRAYS

var grabArray;
var pushArray;

const ShopCart = {
    totalPrice: 0,
    productList: [],


    totalQuantity: function() {
        debugger;
        var totQty = 0;
        for (var i=0; i<this.productList.length; i++){
            totQty += this.productList[i].qty;
            
        }
        return totQty;
    },
    totalPrice: function (){
        var totPrice = 0;
        for (var i=0; i<this.productList.length; i++){
            totPrice += this.productList[i].price*this.productList[i].qty;
            
        }
        return totPrice;
    },
    addProducts: function(product) {
        debugger;
        var existProduct = this.productList.find (x => x.ID == product.ID);
        if (!existProduct) {
            product.qty += 1;
            this.productList.push(product);
            grabArray = window.sessionStorage.getItem("pullMe", this.productList);
            pushArray = window.sessionStorage.setItem("pullMe", this.productList);
        }
        else {
            existProduct.qty += 1;
            storageArray = window.sessionStorage.setItem("pullMe", JSON.stringify(this.productList));
        }
    },
    removeProducts: function(y){
        debugger;
        var rmvIndex = this.productList.findIndex(x => x.ID == y);

        if(rmvIndex >= 0){
            this.productList.splice(rmvIndex, 1);
            storageArray = window.sessionStorage.setItem("pullMe", JSON.stringify(this.productList));
        }
    },
    clearProducts: function() {
        this.productList = [];
    }
};