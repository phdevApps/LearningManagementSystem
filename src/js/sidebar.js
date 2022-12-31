let sidebar = document.querySelector(".sidebar")

let subMenu = document.querySelectorAll(".sidebar__body__sub-menu")
let subMenu_btn = document.querySelectorAll(".sidebar__body__menu__btn")
let subMenu_elearning = document.querySelectorAll(".elearning-sub-menu")
let subMenu_semesterwork = document.querySelectorAll(".semesterwork-sub-menu")

// let header_sidebar_semesterwork_subMenu = document.querySelector(".semesterwork-sub-menu--mobile")
// let header_sidebar_semesterwork_subMenuBtn = document.querySelector(".semesterwork-sub-menu--mobile-btn")

// let header_sidebar_elearning_subMenu = document.querySelector(".elearning-sub-menu--mobile")
// let header_sidebar_elearning_subMenuBtn = document.querySelector(".elearning-sub-menu--mobile-btn")


let sidebarToggle = document.querySelector(".sidebar__header__toggle")

// -------------------------------

sidebarToggle.addEventListener("click", collapse)

// header_sidebar_elearning_subMenuBtn.addEventListener("click", (evt) => {
//     header_sidebar_elearning_subMenu.classList.toggle("sidebar__body__sub-menu--opened")
// })

// header_sidebar_semesterwork_subMenuBtn.addEventListener("click", (evt) => {
//     header_sidebar_semesterwork_subMenu.classList.toggle("sidebar__body__sub-menu--opened")
// })


subMenu_btn.forEach(subMenu => {
    subMenu.addEventListener("click", () => {

        // E-Learning Sub Menu
        if (subMenu.classList.contains("sidebar__body__menu__elearning-btn")) {
            // desktop
            subMenu_semesterwork.forEach(it=>it.classList.remove("sidebar__body__sub-menu--opened"))
            subMenu_elearning.forEach(it=>it.classList.toggle("sidebar__body__sub-menu--opened"))
            // header_sidebar_elearning_subMenu.classList.toggle("sidebar__body__sub-menu--opened")

            // mobile
            // subMenu_semesterwork.classList.remove("sidebar__body__sub-menu--opened")
            // subMenu_elearning.classList.toggle("sidebar__body__sub-menu--opened")
            // // subMenu_elearning_mobile.classList.toggle("sidebar__body__sub-menu--mobile--opened")

        }

        // Semester Work Sub Menu
        if (subMenu.classList.contains("sidebar__body__menu__semesterwork-btn")) {
            // Desktop
            subMenu_elearning.forEach(it=>it.classList.remove("sidebar__body__sub-menu--opened"))
            subMenu_semesterwork.forEach(it=>it.classList.toggle("sidebar__body__sub-menu--opened"))

            // Mobile
            // subMenu_elearning.classList.remove("sidebar__body__sub-menu--opened")
            // subMenu_semesterwork.classList.toggle("sidebar__body__sub-menu--opened")
        }

        // fix Me Please :)
        // subMenu.querySelectorAll("i.fa-solid")[1].classList.toggle("rotate")

    })
})

function collapse(evt) {
    sidebar.classList.toggle("collapsed")
    sidebarToggle.classList.toggle("rotate")

    subMenu.forEach(subMenu => {
        subMenu.classList.remove("sidebar__body__sub-menu--opened")
    })
}
