var sidenav = document.getElementById("sidenav")
var menubar = document.getElementById("menubar")
menubar.addEventListener("click", function () {
    sidenav.style.right = 0
})
var closenav = document.getElementById("closenav")
closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})
