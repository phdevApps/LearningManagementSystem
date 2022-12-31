// Definitions
let questionsCount = document.querySelector("[data-allQuestions]")
let questionsNavContianer = document.querySelector("[data-questionsNavigation]")
let quesiotnsContainer = document.querySelector("[data-quesiotnsContainer]")
let answeredQuestionsPlacdeHolder = document.querySelector("[data-answeredQuestions]")
let navFilters = document.querySelectorAll("[data-nav_filter]")

// popup model
let popupModel = document.querySelector("[data-popupModel]")
let popupModelOverlay = document.querySelector("span.overlay")

let totalScore = document.querySelector("[data-totalScore]")
let rightCount = document.querySelector("[data-rightCount]")
let wrongCount = document.querySelector("[data-wrongCount]")
let flaggedCount = document.querySelector("[data-flaggedCount]")


let updateFeedBtn = document.querySelector("[data-updateFeedBtn]")
let submitBtn = document.querySelector("[data-submitBtn]")

let questionFlages
let questionID

let answeredQuestions = []
let falggedQuestions = []
let restQuestions = []
let allQuestions = []

let score = {
    corrAnsCount: 0,
    wrongAnsCount: 0
}

addEventListener("click", function (evt) {
    updateCurrentQuestion()
    evt.stopPropagation()
    questionID = evt.target.closest("[data-question]").getAttribute("data-id") - 1

    if (evt.target.tagName == "LABEL" || evt.target.tagName == "INPUT") {

        let QuestionID = evt.target.closest("[data-question]").getAttribute("data-id");
        if (!answeredQuestions.includes(QuestionID)) {
            answeredQuestions.push(QuestionID);
        }
        answeredQuestions = answeredQuestions.sort()
        questionsNavContianer.querySelectorAll("span")[questionID].classList.add("answered")
        allQuestions[questionID].isAnswered = true

        updateFeed()
        loadNavContainer()
        isDone()
    }
})

updateFeedBtn.addEventListener("click", () => {
    updateFeed()
})


// Functions
// Loading Quesitons from database (Json File)
function loadQuestions() {
    const ques_req = new XMLHttpRequest();

    ques_req.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questionObject = (JSON.parse(this.responseText)).questions
            // console.log(questionObject.questions)
            allQuestions = [...questionObject]

            // Initializing the Bullets 
            loadNavigationBullets(questionObject.length)

            // Loading the questions
            loadToQuestionsContainer(questionObject)

            // loading Elements
            questionFlages = document.querySelectorAll("i.fa-flag")

            questionTaggingEvent(questionFlages)

            updateCurrentQuestion()
        }
    };

    // const opts = {
    //     640b0c13622236ec2d38119c-19191
    // }
    ques_req.open("post", window.location.href, true);
    ques_req.send();
}

// Loading Navgations Bullets 
function loadNavigationBullets(num) {
    questionsCount.innerHTML = num

    for (let i = 1; i <= num; i++) {
        // Loading navigation bullets
        let bullet = document.createElement("span")
        bullet.innerHTML = i
        questionsNavContianer.appendChild(bullet)
    }
}

// Question Tagging Event Handler
function questionTaggingEvent(arr) {

    arr.forEach(arrElemnt => {
        arrElemnt.addEventListener("click", (clickedElemnt) => {
            clickedElemnt.target.closest("[data-question]").classList.toggle("flagged");
            questionID = clickedElemnt.target.closest("[data-question]").getAttribute("data-id") - 1

            if (clickedElemnt.target.closest("[data-question]").classList.contains("flagged")) {
                clickedElemnt.target.closest(".flag").classList.add("flagged");
                falggedQuestions.push(clickedElemnt.target.closest("[data-question]").getAttribute("data-id"))
                questionsNavContianer.querySelectorAll("span")[questionID].classList.add("flagged")
                allQuestions[questionID].isFlagged = true
            } else {
                questionsNavContianer.querySelectorAll("span")[questionID].classList.remove("flagged")
                clickedElemnt.target.closest(".flag").classList.remove("flagged");
                allQuestions[questionID].isFlagged = false
                falggedQuestions.pop()
            }

            falggedQuestions = falggedQuestions.sort()

        })
    })

}

// loading Questions into its container
function loadToQuestionsContainer(quesObj, option = null) {

    quesObj.forEach((question, index) => {

        let theIndex = index + 1
        let questionTitle = question.title

        let id_1 = generateUniqueId()
        let id_2 = generateUniqueId()
        let id_3 = generateUniqueId()
        let id_4 = generateUniqueId()

        let answerGroup = generateUniqueId()

        let questionAnswer01 = question.answers[0]
        let questionAnswer02 = question.answers[1]
        let questionAnswer03 = question.answers[2]
        let questionAnswer04 = question.answers[3]

        quesiotnsContainer.innerHTML += `
            <div class="quiz-wrapper__quesion-section__question" data-id="${theIndex}" data-question="">

                <div class="quiz-wrapper__quesion-section__question__number">
                    Question
                    <span>${theIndex}</span>
                    <span class="flag">
                        <i class="fa-solid fa-flag"></i>
                    </span>
                </div>

                <div class="quiz-wrapper__quesion-section__question__title">${questionTitle}</div>

                <ul class="quiz-wrapper__quesion-section__question__answers">

                    <li class="quiz-wrapper__quesion-section__question__answers__answer">
                        <input type="radio" id="${id_1}" name="${answerGroup}">
                        <label for="${id_1}">${questionAnswer01}</label>
                    </li>

                    <li class="quiz-wrapper__quesion-section__question__answers__answer">
                        <input type="radio" id="${id_2}" name="${answerGroup}">
                        <label for="${id_2}">${questionAnswer02}</label>
                    </li>

                    <li class="quiz-wrapper__quesion-section__question__answers__answer">
                        <input type="radio" id="${id_3}" name="${answerGroup}">
                        <label for="${id_3}">${questionAnswer03}</label>
                    </li>

                    <li class="quiz-wrapper__quesion-section__question__answers__answer">
                        <input type="radio" id="${id_4}" name="${answerGroup}">
                        <label for="${id_4}">${questionAnswer04}</label>
                    </li>
               
                </ul>

            </div>
        `
    })

}

// update the feed with the corresponding response
function updateFeed() {

    let selectedFilter = (Array.from(navFilters)).filter(el => el.classList.contains("selected"))[0].innerHTML.toLowerCase()

    switch (selectedFilter) {
        case "all":
            quesiotnsContainer.querySelectorAll("[data-question]").forEach(element => {
                element.style.display = "flex"
            })
            break
        case "tagged":
            quesiotnsContainer.querySelectorAll("[data-question]").forEach(element => {
                element.style.display = "none"
            })

            quesiotnsContainer.querySelectorAll("[data-question]").forEach(element => {
                let elementID = element.getAttribute("data-id")
                falggedQuestions.forEach(falggedQuestions => {
                    if (falggedQuestions.id == elementID) {
                        element.style.display = "flex"
                    }
                })
            })
            break

        case "unanswered":
            quesiotnsContainer.querySelectorAll("[data-question]").forEach(element => {
                element.style.display = "none"
            })

            quesiotnsContainer.querySelectorAll("[data-question]").forEach(element => {
                let elementID = element.getAttribute("data-id")
                restQuestions.forEach(restQuestion => {
                    if (restQuestion.id == elementID) {
                        element.style.display = "flex"
                    }
                })
            })
            break
    }
}

// Updating the Current Question
function updateCurrentQuestion() {
    answeredQuestionsPlacdeHolder.innerHTML = answeredQuestions.length
}

// Generating a Random number
function generateUniqueId() {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substr(2, 5);
    return timestamp + randomStr;
}

function loadNavContainer() {
    navFilters.forEach(filterElement => {
        filterElement.addEventListener("click", (currentFilter) => {
            navFilters.forEach(filterElement => {
                filterElement.classList.remove("selected")
            })

            currentFilter.target.classList.add("selected")
            let currentFilterContent = currentFilter.target.getAttribute("data-nav_filter")

            switch (currentFilterContent) {
                case "all":
                    questionsNavContianer.innerHTML = ""

                    allQuestions.forEach((ques, index) => {
                        let bullet = document.createElement("span")
                        bullet.innerHTML = index + 1
                        questionsNavContianer.appendChild(bullet)

                        ques.isAnswered ? bullet.classList.add("answered") : ""
                        ques.isFlagged ? bullet.classList.add("flagged") : bullet.classList.remove("flagged")
                    })
                    break

                case "tagged":
                    questionsNavContianer.innerHTML = ""
                    falggedQuestions = allQuestions.filter(falggedQuestion => falggedQuestion.isFlagged)
                    falggedQuestions.forEach(question => {
                        let bullet = document.createElement("span")
                        bullet.innerHTML = question.id
                        bullet.classList = "flagged"
                        question.isAnswered ? bullet.classList.add("answered") : ""
                        questionsNavContianer.appendChild(bullet)
                    })

                    break
                case "unanswered":
                    questionsNavContianer.innerHTML = ""

                    restQuestions = allQuestions.filter(rest => !rest.isAnswered)
                    restQuestions.forEach(question => {
                        let bullet = document.createElement("span")
                        bullet.innerHTML = question.id
                        bullet.classList = ""
                        question.isFlagged ? bullet.classList.add("flagged") : bullet.classList.remove("flagged")
                        questionsNavContianer.appendChild(bullet)
                    })
                    break
            }

        })
    })

}

function isDone() {
    if (answeredQuestions.length == allQuestions.length && allQuestions.length != 0) {
        submitBtn.setAttribute("data-allowed", true)
        submitBtn.addEventListener("click", () => {
            checkResult()
            updatePopupModelUI()
            popupModel.classList.add("visible")
            popupModelOverlay.classList.add("visible")
        })
    }
}


function updatePopupModelUI() {
    let numerator = score.wrongAnsCount
    let denominator = score.corrAnsCount

    totalScore.innerHTML = (parseFloat((numerator / denominator)) * 100).toFixed(2) + " %"
    rightCount.innerHTML = score.corrAnsCount
    wrongCount.innerHTML = score.wrongAnsCount
    flaggedCount.innerHTML = falggedQuestions.length

}

function checkResult() {
    quesiotnsContainer.querySelectorAll("[data-question]").forEach(element => {
        choices = element.querySelector("ul").querySelectorAll('input[type="radio"]')
        choices.forEach(choice => {
            if (choice.checked) {
                let selectedChoice = choice.nextElementSibling.innerHTML
                let questionID = element.getAttribute("data-id")
                let right_answer = allQuestions[questionID - 1].right_answer

                if (selectedChoice.toLowerCase() === right_answer.toLowerCase()) {
                    score.corrAnsCount++
                } else {
                    score.wrongAnsCount++
                }

            }
        })

    })

}

// Funcitons calling 
isDone();
loadQuestions();
loadNavContainer();