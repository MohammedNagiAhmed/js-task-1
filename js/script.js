var allProducts = document.querySelectorAll(".all-products .custom-product");

var output = document.querySelector("#output");

var showPriceBtn = document.querySelector("#showPrice");
var totalPrice = 0;
var invoice = document.querySelector("body .invoice");

allProducts.forEach(function (item) {
  item.querySelector(
    ".custom-product .card-body .product__price button"
  ).onclick = function () {
    var p__price = item
      .querySelector(".custom-product .card-body .product__price")
      .getAttribute("price");
    var p__name = item.querySelector(
      ".custom-product .card-body h5"
    ).textContent;

    totalPrice += +p__price;
    output.innerHTML += "<p>" + p__name + "<p/>";

    if (output.innerHTML != "") {
      showPriceBtn.style.display = "block";
      showPriceBtn.style.width = "200px";
      showPriceBtn.style.height = "45px";
      showPriceBtn.style.backgroundColor = "blue";
      showPriceBtn.style.color = "white";
      showPriceBtn.style.fontSize = "23px";
    }
  };
});

showPriceBtn.onclick = function () {
  invoice.innerHTML = "<p>$" + totalPrice + "<p/>";
};
