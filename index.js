let ham = document.querySelector(".ham")
let navbar = document.querySelector(".navbar")

ham.addEventListener('click', () => {
    if (ham.classList.contains('open')) {
        ham.classList.remove('open')
        navbar.classList.remove('mobnav')
        navbar.classList.add('hidden')
    }
    else {
        ham.classList.add('open')
        navbar.classList.remove('hidden')
        navbar.classList.add('mobnav')
    }
})

if (ham.classList.contains('open')) {
    navbar.classList.remove('hidden')

}
else {
    navbar.classList.remove('mobnav')
    navbar.classList.add('hidden')
}
