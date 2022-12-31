let editModeBtn = document.querySelector(".edit-mode-btn")
let main_grid = document.querySelector(".main__grid")

editModeBtn.addEventListener("click", function () {
    let widgets = [...main_grid.children]
    main_grid.classList.toggle("edit-mode")


    if (main_grid.classList.contains("edit-mode")) {
        // this.children[0].innerText = "Edit"
        // this.innerHTML = ' <i class="fa-solid fa-grip"></i>'

        widgets.forEach(widget => {
            // widget.append(handle)
            widget.classList.add("main__grid__widget--editing")
        })
    }
    if (!main_grid.classList.contains("edit-mode")) {
        // this.innerHTML = ''
        // let handle = document.createElement("div")
        // handle.classList = "handle";
        widgets.forEach(widget => {
            widget.classList.remove("main__grid__widget--editing")
        })

    }
})

// document.addEventListener('DOMContentLoaded', (evt) => {
//     if (main_grid.classList.contains("edit-mode")) {
//         widgets.forEach(widget => {
//             widget.classList.add("editing")
//         })
//     }
// })

new Sortable(main_grid, {
    handle: '.handle',
    animation: 150,
    ghostClass: 'ghost'
});

// let preloaderOverlay = document.querySelector(".preloader-overlay")

// // Preloader
// window.addEventListener("load", () => {
//     setTimeout(() => {
//         // preloaderOverlay.style.display = "none"
//         preloaderOverlay.remove()
//     }, 2000)
// })
