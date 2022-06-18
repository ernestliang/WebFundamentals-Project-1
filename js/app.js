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