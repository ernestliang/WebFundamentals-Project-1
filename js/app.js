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
        debugger;
        var totPrice = 0;
        for (var i=0; i<this.productList.length; i++){
            totPrice += this.productList[i].price*this.productList[i].qty;
            
        }
        return totPrice;

        // Alternate Method using "Reduce"
        // const total = items.reduce((currentTotal, item) => {
        //     return item.price + currentTotal
        // }, 0 );
    },
    addProducts: function(product) {

        debugger;
        // Step 1: Check whether the S.Storage exists
        var sessionProductArray = window.sessionStorage.getItem("pullme");
        // Step 1.a: If the S.Storage does exist:
        // IMPORTANT: REPLACE CURRENT PRODUCT LIST WITH THE LATEST ONE FROM STORAGE
        if (sessionProductArray != null){
            this.productList = JSON.parse(sessionProductArray);
        }

        // Checking whether a copy exists
        var existProduct = this.productList.find(x => x.ID == product.ID);
        if (!existProduct) {
            product.qty += 1;
            this.productList.push(product);
        }
        else {
            existProduct.qty += 1;
        }

        window.sessionStorage.setItem("pullme", JSON.stringify(this.productList));
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

function populateCheckout () {
    // clear div content before redrawing
    var divProductList = document.getElementById("productDisplay").innerHTML = "";

    // Pull the array from Storage
    var checkoutPull = window.sessionStorage.getItem("pullme");

    // Parse it to make it an interpretable array
    var checkoutArray = JSON.parse(checkoutPull);
    ShopCart.productList = checkoutArray;

    // Get the DOM element to place the stuff from the cart in
    var elemDisplayProduct = document.getElementById('productDisplay');

    // Loop to add the rows and their contents
    if(checkoutArray) {
        for (var i=0; i<checkoutArray.length; i++) {
            // This creates a new row
            const newrow = document.createElement("div");
            newrow.classList.add("row");
    
            // This creates a new col to put within he row
            const descCol = document.createElement("div");
            descCol.classList.add("col-12", "col-md-7", "col-lg-7", "p-4", "border");
    
            // This creates a special image row
            const imgCol = document.createElement("div");
            imgCol.classList.add("col-5", "border", "text-center", "d-none", "d-sm-block", "d-sm-none", "d-md-block");
    
            var firstProduct = checkoutArray[i];
            debugger;
    
            // Looking though and checking the name
            var objName = document.createElement("h5");
            objName.innerHTML = "Product: " + firstProduct.productName;
            descCol.appendChild(objName);
    
            // Looking through and checking the price
            var objPrice = document.createElement("h6");
            objPrice.innerHTML = "Price: " + firstProduct.price;
            descCol.appendChild(objPrice);
    
            // Looking through and checking the quantity
            var objQty = document.createElement("h6");
            objQty.innerHTML = "Quantity: " + firstProduct.qty;
            descCol.appendChild(objQty);
    
            // Looking through and checking the Total price
            var objTotalPrice = document.createElement("h6");
            objTotalPrice.innerHTML = "Total Price: " + ((firstProduct.price)*(firstProduct.qty));
            descCol.appendChild(objTotalPrice);
    
            // Looking through and creating the delete button
            var delButton = document.createElement("button");
            delButton.innerHTML = "Remove Product";
            delButton.setAttribute('onclick', "removeProduct(" + firstProduct.ID + ")")
            descCol.appendChild(delButton);

            // Looking through and checking the image
            var objImg = document.createElement("img");
            objImg.src = firstProduct.img;
            objImg.classList.add("cartImg");
            imgCol.appendChild(objImg);
    

            // Appending everything so they show up in the page
            newrow.appendChild(descCol);
            newrow.appendChild(imgCol);
            elemDisplayProduct.append(newrow);
    
        }
    
        var finalPrice = document.getElementById("totalPrice");
        finalPrice.innerHTML = "Total Price: " + ShopCart.totalPrice() + "$";
        var finalQty = document.getElementById("totalQty");
        finalQty.innerHTML = "Total Quantity: " + ShopCart.totalQuantity();
    }
};

function removeProduct(productId) {
    var productList = JSON.parse(window.sessionStorage.getItem("pullme"));
    debugger;
    var indexToDelete = productList.findIndex(x => x.ID == productId);
    if(indexToDelete >= 0) {
        productList.splice(indexToDelete, 1);
        window.sessionStorage.setItem("pullme", JSON.stringify(productList));   
        populateCheckout(); 
    }
}

// This function is to clear the cart and the page`
function clearCart() {
        window.sessionStorage.removeItem("pullme");
        document.getElementById("productDisplay").innerHTML = "";
        var finalPrice = document.getElementById("totalPrice");
        finalPrice.innerHTML = "Total Price: 0$";
        var finalQty = document.getElementById("totalQty");
        finalQty.innerHTML = "Total Quantity: 0";

};