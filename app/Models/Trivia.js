export class Trivia {

    constructor(data) {
        this.question = data.question
        this.correct = data.correct_answer
        this.answer1 = data.incorrect_answers[0]
        this.answer2 = data.incorrect_answers[1]
        this.answer3 = data.incorrect_answers[2]
    }



    get correctTemplate() {
        return /*html*/`
        <div class="col-6">
            <div class="card text-center p-2 my-2">${this.correct}</div>
        </div>`
    }
    get answer1Template() {
        return /*html*/`
        <div class="col-6">
            <div class="card text-center p-2 my-2">${this.answer1}</div>
        </div>`
    }
    get answer2Template() {
        return /*html*/`
        <div class="col-6">
            <div class="card text-center p-2 my-2">${this.answer2}</div>
        </div>`
    }
    get answer3Template() {
        return /*html*/`
        <div class="col-6">
            <div class="card text-center p-2 my-2">${this.answer3}</div>
        </div>`
    }

}
