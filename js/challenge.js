const counter = document.querySelector('#counter')
let count = 0
document.addEventListener('DOMContentLoaded', () => {


    setInterval(() => {
        count++
        counter.textContent = count

    }, 1000)
})

const minus = document.querySelector('#minus')
minus.addEventListener('click', () => {
    count--
    counter.textContent = count

})

const plus = document.querySelector('#plus')
plus.addEventListener('click', () => {
    count++
    counter.textContent = count
})

const pause = document.querySelector('#pause');

pause.addEventListener('click', () => {
    if (pause) {
        counter.disable = true
        pause.textContent = 'resume'
    }
});
function submitText() {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const input = document.querySelector('#comment-input')
        //const div = document.querySelector('div')
        //const li = document.createElement('li')
        const h3 = document.querySelector('h3')
        h3.innerText = input.value
        //div.appendChild(li)
        input.value = ''
    })
}
submitText()

const heart = document.querySelector('#heart')
heart.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = `${count} has been liked 1 time`
    heart.appendChild(li)
})