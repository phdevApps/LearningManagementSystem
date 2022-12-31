let settingsBtn = document.querySelectorAll(".settings-container li button")
let menu, icon
let currentElement

settingsBtn.forEach(btn => {

    btn.addEventListener("click", (el) => {
        menu = el.target.nextElementSibling
        icon = el.target.querySelector("i")

        if (menu.style.maxHeight) {

            menu.style.maxHeight = null
            menu.style.border = "none"

            icon.classList.remove("rotate-360")
        } else {
            icon.classList.add("rotate-360")
            menu.style.border = "2px solid var(--clr-primary-100)"
            menu.style.maxHeight = menu.scrollHeight + "px"
        }
    })
})
