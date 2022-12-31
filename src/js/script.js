document.addEventListener('DOMContentLoaded', (e) => {
    try {

        document.querySelector('.btn-container').addEventListener('click', () => window.location.replace('/home'))
    } catch (error) {
    }


    document.querySelectorAll('.main__materials__subject__text').forEach(it => it.addEventListener('click', (e) => {
        if (window.location.href.includes('subject')) {
            if (window.location.href.includes('quizzes')) {
                window.location.replace('/elearning/quizzes/quiz_system/' + e.target.closest("[dat-id]").getAttribute('dat-id'))

            } else {
                window.location.replace('/upload/' + e.target.closest("[dat-id]").getAttribute('dat-id'))
            }

        } else {

            window.location.replace(

                window.location.href +
                '/subject/' + e.target.closest("[dat-id]").getAttribute('dat-id'))

        }
    }))

})

// import('./components')
import('./sidebar')
// import('./vendors')

if (window.location.href.includes('scoreboard')) {
    import('./scoreboard')
} else if (window.location.href.includes('home')) {
    import('./grid')
} else if (window.location.href.includes('quiz_system')) {

    // import('./normal-quiz')


} else if (window.location.href.includes('settings')) {

    import('./settingsUI')





} else if (window.location.href.includes('epal')) {

    import('./epal')
}



import('./staffUI')


import('./header')    
