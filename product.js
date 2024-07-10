var sidenav = document.getElementById("sidenav")
var menubar = document.getElementById("menubar")
menubar.addEventListener("click", function () {
    sidenav.style.right = 0
})
var closenav = document.getElementById("closenav")
closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

//product searchbar
var productconatiner = document.getElementById("productcontainer")
var searchbar = document.getElementById("searchbar")
var productlist = document.querySelectorAll("div")
searchbar.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()
    for (count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("h1").textContent
        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block`"
        }
    }
})