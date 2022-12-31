// :::::::::::: Desktop :::::::::::
// let header__boxBtns = document.querySelectorAll(".header__box button")
// let header__box__streaks__menu = document.querySelector(".header__box__streaks__menu")
// let header__box__profile__menu = document.querySelector(".header__box__profile__menu")
// let header__box__notification__menu = document.querySelector(".header__box__notification__menu")

// let header__box__streaks = document.querySelector(".header__box__streaks")
// let header__box__profile = document.querySelector(".header__box__profile")
// let header__box__notification = document.querySelector(".header__box__notification")

// :::::::::::: Mobile ::::::::::::
// let toggles = document.querySelectorAll(".header-toggle")
// let menus = document.querySelectorAll(".header-menu")
// let mobileMenus = document.querySelector(".mobile-menus")

// let header_sidebarToggle = document.querySelector(".sidebar-toggle")
// let header_sidebarMenu = document.querySelector(".sidebar-menu")

// let header_navbarToggle = document.querySelector(".navbar-toggle")
// let header_navbarMenu = document.querySelector(".navbar-menu")

let activityCenter = document.querySelector(".activity-center")
// let mobile_activityCenter = document.querySelector(".activity-center-mobile")
// let mobile_activityCenterUploadBtn = document.querySelector(".mobile-content__uploaded-btn")
// let list;

// ------------------------------

// sidebar__body__sub-menu--opened

// mobile_activityCenter.addEventListener("click", evt => {
//     evt.stopPropagation()
//     header_navbarMenu.classList.remove("navbar-menu--opened")
//     header_sidebarMenu.classList.remove("sidebar-menu--opened")
//     mobile_activityCenter.classList.add("activity-center-mobile--active")
// })

// mobile_activityCenterUploadBtn.addEventListener('click', () => {
//     list = document.querySelector(".mobile-content__uploaded-files")
//     list.style.maxHeight ? list.style.maxHeight = null : list.style.maxHeight = list.scrollHeight + "px"

// });

activityCenter.addEventListener("click", evt => {
    evt.stopPropagation()
    // header_navbarMenu.classList.remove("navbar-menu--opened")
    // header_sidebarMenu.classList.remove("sidebar-menu--opened")
    activityCenter.classList.add("activity-center--active")
})

// header_navbarMenu.addEventListener("click", evt => {
//     evt.stopPropagation()
// })

// header_sidebarMenu.addEventListener("click", evt => {
//     evt.stopPropagation()
// })

// header_sidebarToggle.addEventListener("click", evt => {
//     evt.stopPropagation()
//     activityCenter.classList.remove("activity-center--active")
//     header_navbarMenu.classList.remove("navbar-menu--opened")
//     header_sidebarMenu.classList.add("sidebar-menu--opened")
// })

// header_navbarToggle.addEventListener("click", evt => {
//     evt.stopPropagation()
//     activityCenter.classList.remove("activity-center--active")
//     header_sidebarMenu.classList.remove("sidebar-menu--opened")
//     header_navbarMenu.classList.add("navbar-menu--opened")
// })


document.addEventListener("click", evt => {
    evt.stopPropagation()

//     if (evt.target != header_navbarMenu && evt.target != header_navbarToggle) {
//         header_navbarMenu.classList.contains("navbar-menu--opened") ? header_navbarMenu.classList.remove("navbar-menu--opened") : ""
//     }

    if (evt.target != activityCenter) {
        activityCenter.classList.remove("activity-center--active")
        // fileUploadedBody.classList.remove("active")
    }

//     if (evt.target != mobile_activityCenter) {
//         mobile_activityCenter.classList.remove("activity-center-mobile--active")
//         list.style.maxHeight = null
//         // fileUploadedBody.classList.remove("active")
//     }

//     if (evt.target != header_sidebarMenu && evt.target != header_sidebarToggle) {
//         header_sidebarMenu.classList.contains("sidebar-menu--opened") ? header_sidebarMenu.classList.remove("sidebar-menu--opened") : ""
//     }
})



// toggles.forEach(toggle => {
//     toggle.addEventListener("click", () => {
//         menus.forEach(menu => {
//             // console.log(toggle)
//             // console.log(menu)
//             let header_sidebarMenu = "sidebar-menu";
//             let header_sidebarToggle = "sidebar-toggle";
//             let header_navbarMenu = "navbar-menu";
//             let header_navbarToggle = "navbar-toggle";


//             if (toggle.classList.contains(header_sidebarToggle)) {
//                 menu.classList.toggle(header_sidebarMenu + "--opened")
//             }
//             if (toggle.classList.contains(header_navbarToggle)) {
//                 menu.classList.toggle(header_navbarMenu + "--opened")
//             }

//         })
//     })
// })


// header__box__notification__menu.addEventListener("click", (evt) => {
//     evt.stopPropagation()
// })

// header__box__streaks__menu.addEventListener("click", (evt) => {
//     // evt.stopPropagation()
// })

// header__box__profile__menu.addEventListener("click", (evt) => {
//     // evt.stopPropagation()
// })


// header__boxBtns.forEach(boxBtn => {

//     boxBtn.addEventListener("click", evt => {
//         evt.stopPropagation()

//         if (evt.target.classList.contains("header__box__profile")) {
//             header__box__streaks__menu.classList.remove("header__box__streaks__menu--opened")
//             header__box__notification__menu.classList.remove("header__box__notification__menu--opened")
//             header__box__profile__menu.classList.toggle("header__box__profile__menu--opened")
//         }

//         if (evt.target.classList.contains("header__box__streaks")) {
//             header__box__profile__menu.classList.remove("header__box__profile__menu--opened")
//             header__box__notification__menu.classList.remove("header__box__notification__menu--opened")
//             header__box__streaks__menu.classList.toggle("header__box__streaks__menu--opened")
//         }

//         if (evt.target.classList.contains("header__box__notification")) {
//             header__box__profile__menu.classList.remove("header__box__profile__menu--opened")
//             header__box__streaks__menu.classList.remove("header__box__streaks__menu--opened")
//             header__box__notification__menu.classList.toggle("header__box__notification__menu--opened")
//         }
//     })
// })