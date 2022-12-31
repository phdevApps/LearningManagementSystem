let uploadFilesBtn = document.querySelector("[data-uploadFilesBtn]")
let uploadFilesContainer = document.querySelector("[data-uploadFilesContainer]")

let activiyCenterContainer = document.querySelector(".activity-center")
let activityIsActive = activiyCenterContainer.classList.contains("activity-center--active")

let uploadedFilesCount = document.querySelector("[data-uploadedFilesCount]")
let isMobile = window.innerWidth <= 700;

let uploadBtn = document.querySelector("[data-uploadBtn]")
let hiddenBtn = document.querySelector("[data-hiddenBtn]")

let deleteFilesBtns
let clickedQuestion

let defaultLabel = "No file(s) uploaded yet"
let filesListArray = []
let filesList = []

uploadFilesBtn.addEventListener("click", () => {
    uploadFilesBtn.classList.toggle("mobile-content__uploaded-btn--active") //Active State
    updateHeight()
})

uploadBtn.addEventListener("click", () => {
    hiddenBtn.click()
})

hiddenBtn.addEventListener("change", () => {

    updateFeed()

    deleteFilesBtns.forEach(btn => {
        btn.addEventListener("click", evt => {
            clickedQuestion = evt.target.previousElementSibling.innerHTML
            filesListArray.pop(clickedQuestion)
            evt.target.parentElement.remove()

            uploadedFilesCount.innerHTML = filesListArray.length + " File(s) uploaded"

            updateHeight()
        })
    })
})

function updateHeight() {
    if (activityIsActive && isMobile) {

        activiyCenterContainer.style.maxHeight = 165 + uploadFilesContainer.scrollHeight + "px"

        if (uploadFilesContainer.style.maxHeight) {
            uploadFilesContainer.style.maxHeight = null
            activiyCenterContainer.style.maxHeight = 165 + "px"
        } else {
            uploadFilesContainer.style.maxHeight = uploadFilesContainer.scrollHeight + "px"
        }
    }
}

function updateFeed() {
    filesList = Array.from(hiddenBtn.files).map(fileElement => { return fileElement.name })
    filesList.forEach(file => (!filesListArray.includes(file)) ? filesListArray.push(file) : "")

    uploadFilesContainer.innerHTML = ""
    console.log(filesListArray)

    filesListArray.forEach((file) => {
        uploadFilesContainer.innerHTML += `
            <li>
                <span class="uploaded-file-name">${file}</span>
                <i class="fa-solid fa-close" data-deleteFileBtn=""></i>
            </li>
            `
    })

    deleteFilesBtns = document.querySelectorAll("[data-deleteFileBtn]")
    uploadedFilesCount.innerHTML = filesListArray.length + " File(s) uploaded"
}
