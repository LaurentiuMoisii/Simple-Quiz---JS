const correctAnswers = ['A','A','A','A']
const quizForm = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

quizForm.addEventListener('submit', (e) => {
    //prevent refresh page
    e.preventDefault()
    //scroll to top on submit
    scrollTo(0, 0)
    //user answers
    const userAnswers = [
        quizForm.q1.value,
        quizForm.q2.value,
        quizForm.q3.value,
        quizForm.q4.value,
    ]
    //set score
    let score = 0
    //go trough each of the answer
    userAnswers.forEach((element, index) => {
        if(element === correctAnswers[index])
        score += 25
    })
    //display the score 
    //result.querySelector('span').innerHTML = `${score}`
    //make visible the score
    result.classList.remove('d-none')
    //animate the score
    let output = 0
    const timer = setInterval(() =>{
        result.querySelector('span').innerHTML = `${output}`
        if(output === score) {
            clearInterval(timer)
        } else {
            output++
        }
    }, 10)
})















































// const correctAnswers = ['A', 'A', 'A', 'A']
// const quizForm = document.querySelector('.quiz-form')
// const result = document.querySelector('.result')

// quizForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const userAnswers = [
//         quizForm.q1.value,
//         quizForm.q2.value,
//         quizForm.q3.value,
//         quizForm.q4.value
//     ]
//     let score = 0;
//     userAnswers.forEach((element, index) => {
//         if(element === correctAnswers[index]) { 
//             score +=25
//         }
//     })
//     scrollTo(0, 0)
//     result.classList.remove('d-none')
//     result.querySelector('span').innerText = `${score}`
//     //animate
//     let output = 0
//     const timer = setInterval(() => {
//        result.querySelector('span').innerText = `${output}`
//        if ( output === score) {
//            clearInterval(timer)
//        } else {
//            output++
//        }
//     }, 10);
  
// })





































// const createAnswers = ['A', 'A', 'A', 'A']
// const quiz = document.querySelector('.quiz-form')
// const result = document.querySelector('.result')

// quiz.addEventListener('submit', (e) => {
//     e.preventDefault()
//     // create value for the user
//     let score = 0
//     // match answers
//     const userAnswers = [
//         quiz.q1.value,
//         quiz.q2.value,
//         quiz.q3.value,
//         quiz.q4.value
//     ]
//     // check answers
//     userAnswers.forEach((element, number) => {
//         if(element === createAnswers[number]) {
//             score += 25
//         }
//     })
//     // display the score 
//     result.querySelector('span').textContent = `${score}%`
//     result.classList.remove('d-none')
//     // jump to top
//     window.scrollTo(0, 0)
//     // animate the output
//     let output = 0;
//     const timer = setInterval(() => {
//     result.querySelector('span').textContent = `${output}`
//         if(output === score) {
//             clearInterval(timer)
//         } else {
//             output++
//         }
//     }, 10);
// })