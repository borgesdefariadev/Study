const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar",
    "Quantas pessoas ajudei hoje?",
    "O que me deixou feliz hoje?",
]

const ask = ( index = 0 ) => {
    return process.stdout.write(questions[index] + "\n\n\n")
}

ask()

const answers = [
    
]

process.stdin.on("data", data => {
    process.stdout.write(data.toString().trim())
    if (answers.length < questions.lenght) {
        ask(answers.lenght)
    } else {
        console.log(answers)
        process.exit()
    }
    process.exit()
})