const menu = document.getElementById("menu_selector")
const started = document.getElementById("section_started")
const startButton = document.getElementById("start_button")
const container = document.getElementById("container")

let questions = []
let opcion

class Question {
    constructor(question, answers, img) {
        this.question = question
        this.answers = answers.sort((a,b) => Math.random() - 0.5)
        this.img = img
    }
}

let question1 = new Question("¿Este juego funciona en Mac, Windows o Linux?", ["Todos los anteriores", "Mac", "Windows", "Linux"], "./assets/c06612750.png")

questions.push(question1)

questions.forEach((Question) => {
    opcion = `
        <div class="imageContainer">
            <img src=${Question.img} alt="un pc" width="300px" height="200px">
        </div>

        <div class="question">
            <h2>${Question.question}</h2>
        </div> 

        <div class="answers">
            <input type="radio" name="pregunta" id="pregunta1">
            <label for="pregunta1">
                <p>${Question.answers[0]}</p>
            </label>

            <input type="radio" name="pregunta" id="pregunta2">
            <label for="pregunta2">
                <p>${Question.answers[1]}</p>
            </label>

            <input type="radio" name="pregunta" id="pregunta3">
            <label for="pregunta3">
                <p>${Question.answers[2]}</p>
            </label>

            <input type="radio" name="pregunta" id="pregunta4">
            <label for="pregunta4">
                <p>${Question.answers[3]}</p>
            </label>
        </div>
    `
    container.innerHTML = opcion
})
startButton.addEventListener("click", ()=> {

    menu.style.display = "none"
    started.style.display = "block"
})