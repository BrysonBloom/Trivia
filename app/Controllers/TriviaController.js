import { triviaService } from '../Services/TriviaService.js'
import { Pop } from '../Utils/Pop.js'
import { setHTML } from '../Utils/Writer.js'
import { appState } from '../AppState.js'
let template = ''
function _drawCorrect() {
    let trivia = appState.trivia
    let answer = trivia.correctTemplate
    template += answer
    _drawAnswer1()
}
function _drawAnswer1() {
    let trivia = appState.trivia
    let answer = trivia.answer1Template
    console.log(trivia);
    _drawAnswer2()

}
function _drawAnswer2() {
    let trivia = appState.trivia
    let answer = trivia.answer2Template
    template += answer
    _drawAnswer3()
}
function _drawAnswer3() {
    let trivia = appState.trivia
    let answer = trivia.answer3Template
    template += answer
    _drawAnswerCards()
}

function _drawAnswerCards() {
    setHTML('answers', template)
    console.log('test');
    console.log(template);
}

export class TriviaController {
    constructor() {
        this.getTrivia()
        appState.on('draw', _drawCorrect())
    }
    async getTrivia() {
        console.log('getTrivia');
        try {
            await triviaService.getTrivia()
        } catch (error) {
            Pop.error(error)
        }
    }
}
