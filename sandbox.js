const correctAnswers = ['A', 'A', 'A', 'A']
const quizForm = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

quizForm.addEventListener('submit', (e) => {
    e.preventDefault()
    scrollTo(0, 0)
    const userAnswers = [
        quizForm.q1.value,
        quizForm.q2.value,
        quizForm.q3.value,
        quizForm.q4.value
    ]
    let score = 0
    userAnswers.forEach((element, index) =>{
        if(element === correctAnswers[index]) {
            score +=25
        }
    })
    result.classList.remove('d-none')
    let output = 0
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}`
        if( output === score ) {
            clearInterval(timer)
        } else {
            output++
        }
    }, 20)
})