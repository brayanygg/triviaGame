const menu = document.getElementById("menu_selector")
const started = document.getElementById("section_started")
const startButton = document.getElementById("start_button")
const container = document.getElementById("container")
const scores = document.querySelector(".scoreBoard")
let cantidad = document.querySelector(".amount")
const endGame = document.querySelector(".endGame")
const toStart = document.getElementById("backStart")
const puntajeFinal = document.getElementById("finalScore")

let questions = []
let template = []
let score;
let lives;
let pElements

let counter;

class Question {
    constructor(question, answers,trueAnswer, img) {
        this.question = question
        this.answers = answers.sort((a,b) => Math.random() - 0.5)
        this.trueAnswer = trueAnswer
        this.img = img
    }
}

let question1 = new Question("¿Este juego funciona en Mac, Windows o Linux?", ["Todos los anteriores", "Mac", "Windows", "Linux"],"Todos los anteriores", "./assets/c06612750.png")

let question2 = new Question("¿Cuál es el nombre del primer programa de inteligencia artificial que ganó un juego de ajedrez contra un campeón mundial?", ["Deep Blue", "Watson", "AlphaGo", "GPT-3"],"Deep Blue", "./assets/ajedrez.png")

let question3 = new Question("¿Cuál es el nombre del algoritmo de aprendizaje automático más utilizado en la actualidad?", ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"],"TensorFlow", "./assets/ia.png")

let question4 = new Question("¿Cuál es el nombre del modelo de lenguaje de inteligencia artificial más grande del mundo?", ["GPT-3", "LaMDA", "Meena", "Bard"],"GPT-3", "./assets/lenguajeIa.webp")

let question5 = new Question("¿Cuál es el nombre del sistema operativo más utilizado en los centros de datos?", ["Linux", "Windows Server", "Unix", "Oracle Solaris"],"Linux", "./assets/centroD.png")

let question6 = new Question("¿Cuál es el nombre del servicio de nube pública más utilizado?", ["AWS", "Azure", "Google Cloud", "IBM Cloud"],"AWS", "./assets/nube.png")

let question7 = new Question("¿Cuál es el nombre del lenguaje de programación más utilizado en la ciencia de datos?", ["Python", "R", "Java", "C++"],"Python", "./assets/programming.webp")

let question8 = new Question("¿Cuál es el nombre del framework de desarrollo de aplicaciones móviles más utilizado?", ["React Native", "Flutter", "Ionic", "Xamarin"],"React Native", "./assets/framework.png")

let question9 = new Question("¿Cuál es el nombre del sistema de gestión de bases de datos más utilizado?", ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],"MySQL", "./assets/bd.png")

let question10 = new Question("¿Cuál es el nombre del motor de búsqueda más utilizado en el mundo?", ["Google", "Bing", "Yahoo", "DuckDuckGo"],"Google", "./assets/motorB.png")



function start() {

    counter = 0
    questions = []
    template = []

    questions.push(question1,question2,question3,question4,question5,question6,question7,question8,question9,question10)

    questions.sort((a,b)=> Math.random() - 0.5)

    questions.forEach((Question) => {
        template.push(`
            <div class="imageContainer">
                <img src=${Question.img} alt="un pc" width="300px" height="200px">
            </div>

            <div class="question">
                <h2>${Question.question}</h2>
            </div> 

            <div class="answers">
                <input type="radio" name="pregunta" id="pregunta1">
                <label for="pregunta1">
                    <p id="first">${Question.answers[0]}</p>
                </label>

                <input type="radio" name="pregunta" id="pregunta2">
                <label for="pregunta2">
                    <p id="second">${Question.answers[1]}</p>
                </label>

                <input type="radio" name="pregunta" id="pregunta3">
                <label for="pregunta3">
                    <p id="third">${Question.answers[2]}</p>
                </label>

                <input type="radio" name="pregunta" id="pregunta4">
                <label for="pregunta4">
                    <p id="fourth">${Question.answers[3]}</p>
                </label>
            </div>
        `)

    })

    container.innerHTML = template[counter]

    pElements = document.querySelectorAll('p');
    iteracion();
}

    function end() {
        started.style.display = "none"
        endGame.style.display = "block"
        puntajeFinal.innerHTML = score
    }

    function iteracion() {
        if(lives <= 0){
            end()
        }

        pElements.forEach((pElement) => {
            pElement.addEventListener('click', () => {
                if(pElement.textContent == questions[counter].trueAnswer){
                    score+=100;
                    scores.innerHTML = score
                }else{
                    score-=50
                    lives--
                    scores.innerHTML = score
                    cantidad.innerHTML = lives
                }
                
                if(counter +1 <= questions.length){
                    counter++
                    container.innerHTML = template[counter]
                    pElements = document.querySelectorAll('p');
                    iteracion();
                }
                if(counter == questions.length){
                    end()
                }
            });
          });
    
    }

startButton.addEventListener("click", ()=> {

    score = 0
    lives = 3
    scores.innerHTML = score
    cantidad.innerHTML = lives

    start()
    menu.style.display = "none"
    started.style.display = "block"
})

toStart.addEventListener("click", ()=> {

    menu.style.display = "block"
    started.style.display = "none"
    endGame.style.display = "none"
})