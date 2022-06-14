function getPrdFrmCat(category) {
    var getImg = ProductsArray.filter (x => x.categID == category);

    debugger;
    var img1 = document.getElementById("prdImg1");
    var img2 = document.getElementById("prdImg2");
    

    img1.src = getImg[0].img;
    img2.src = getImg[1].img;
}