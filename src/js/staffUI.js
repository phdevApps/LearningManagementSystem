let uploadFilesPopup = document.querySelector("[data-uploadFilesPopup]")
let uploadFilesPopupBtn = document.querySelector("[data-openPopupBtn]")
let uploadBtn = document.querySelector("[data-uploadBtn]")

let notificationContainer = document.querySelector("[data-toastsContainer]")
let notification

let uploadedFilesCount = document.querySelector("[data-uploadedFilesCount]")
let uploadedFilesContainer = document.querySelector("[data-uploadedFilesContainer]")

let browseFilesBtn = document.querySelector('[data-filesBtn="browse"]')
let activityCenterFilesBtn = document.querySelector('[data-filesBtn="activity-center"]')

let browseFilesHiddenBtn = document.querySelector('[data-filesBtn="browse"]').querySelector('input[type="file"')
let activityCenterFilesHiddenBtn = document.querySelector('[data-filesBtn="activity-center"]').querySelector('input[type="file"')

let all_filesArray = []
let activityCenter_filesArray = []
let browse_filesArray = []
let uploaded_files = []


uploadFilesPopupBtn.addEventListener("click", () => {
    uploadFilesPopup.classList.add("pop-active")
})

uploadBtn.addEventListener("click", () => {
    uploadFilesPopup.classList.remove("pop-active")
    createToasts()
})

function createToasts(message = "File Uploaded") {
    notification = document.createElement('div')
    notification.classList.add("toast-notification")
    notification.innerHTML = message
    notificationContainer.appendChild(notification)

    setTimeout(() => notification.remove(), 1500)
}

browseFilesBtn.addEventListener("click", () => {
    browseFilesHiddenBtn.click()
})

activityCenterFilesBtn.addEventListener("click", () => {
    activityCenterFilesHiddenBtn.click()

})

browseFilesHiddenBtn.addEventListener("change", evt => {
    uploaded_files = (Array.from(browseFilesHiddenBtn.files)).map(file => { return file.name })
    uploaded_files.forEach(file => { !all_filesArray.includes(file) ? all_filesArray.push(file) : "" })
    uploaded_files.forEach(file => { !browse_filesArray.includes(file) ? browse_filesArray.push(file) : "" })
    update_feed()
})

activityCenterFilesHiddenBtn.addEventListener("change", evt => {
    uploaded_files = (Array.from(activityCenterFilesHiddenBtn.files)).map(file => { return file.name })
    uploaded_files.forEach(file => { !all_filesArray.includes(file) ? all_filesArray.push(file) : "" })
    uploaded_files.forEach(file => { !activityCenter_filesArray.includes(file) ? activityCenter_filesArray.push(file) : "" })
    update_feed()
})

function update_feed() {
    let files_count = all_filesArray.length
    let files_elements = uploadedFilesContainer.querySelectorAll(".file-name")
    let files_elements_list = (Array.from(files_elements)).map(el => { return el.innerHTML })

    uploadedFilesCount.innerHTML = `<strong>${files_count}</strong> File(s)`

    uploadedFilesContainer.innerHTML = ""
    all_filesArray.forEach((file, index) => {
        uploadedFilesContainer.innerHTML += `
        <li class="upload-file-pop__files-container__file">
            <span>${index + 1}</span>
            <span class="file-name">${file}</span>
            <span class="ation-btns">
                <div class="icon delete">
                    <i class="fa-solid fa-trash"></i>
                </div>
                <div class="icon view">
                    <i class="fa-solid fa-eye"></i>
                </div>
                <div class="icon move">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </span>
        </li>
        `
    })
}

document.addEventListener('DOMContentLoaded', () => {
    document.head.insertAdjacentHTML('beforeEnd', `
    <style>
        .main {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
    `)
})