let studentScore = document.querySelectorAll(".main-scoreboard__table table tbody tr")
let studentBanner = document.querySelector(".student-score-profile")
let bannerOverlay = document.querySelector(".banner-overlay")

studentScore.forEach(element => {
    element.addEventListener("click", async evt => {

        console.log()

        const root_url = window.location.protocol + '//' + window.location.host
        const api_url = root_url + '/GetScoreboardInfo/' + evt.target.closest("[dat-id]").getAttribute('dat-id')
        console.log(api_url)


        const opt = {
            method: "post",
            headers: {
                "content-type": "application/json",
            }
        }

        const data = (await fetch(api_url, opt).then(it => it.json()))[0]//.then(it => console.log(it))
        console.log(data)

        var myImg = '../imgs/user.svg'

        const res = await fetch(root_url + '/imgs/' + data.student_info.id + '.jpg')

        if (res.status === 200) {
            myImg = root_url + '/imgs/' + data.student_info.id + '.jpg'
        }

        const streaksHTML = data.streaks
            .map((it, obj) => {
                return `
        <div class="student-score-profile__details__detailbox">
              <div class="student-score-profile__details__detailbox__icon"><i class="fa-solid fa-fire"></i></div>
              <div class="student-score-profile__details__detailbox__titlebox">
                <div class="student-score-profile__details__detailbox__titlebox__title">${it.streak_name}</div>
                <div class="student-score-profile__details__detailbox__titlebox__number">${it.duration}</div>
                <div class="student-score-profile__details__detailbox__titlebox__number">${it.score} points</div>
              </div>
        </div>
        `}, {});

        const cardHTML = ` <div class="student-score-profile__banner">
        <div class="student-score-profile__banner__img">
          <img src="${myImg}">
        </div>

        <div class="student-score-profile__banner__titlebox">
          <div class="student-score-profile__banner__titlebox__title">${data.student_info.name}</div>
          <div class="student-score-profile__banner__titlebox__id">${data.student_info.id}</div>
        </div>

        <div class="student-score-profile__banner__points">
          <div class="student-score-profile__banner__points__number">${data.total_score}</div>
          <div class="student-score-profile__banner__points__point">points</div>
        </div>

      </div>

      <div class="student-score-profile__details">
        ${streaksHTML}
      </div> `

        document.querySelector(".student-score-profile").innerHTML = cardHTML

        evt.stopPropagation()
        studentBanner.classList.add("student-score-profile--active")
        bannerOverlay.classList.add("banner-overlay--active")
    })
})

studentBanner.addEventListener("click", evt => {
    evt.stopPropagation()
})

bannerOverlay.addEventListener("click", evt => {
    evt.stopPropagation()
    studentBanner.classList.remove("student-score-profile--active")
    bannerOverlay.classList.remove("banner-overlay--active")
})
