import { trivia_api } from "./AxiosService.js"
import { Trivia } from "../Models/Trivia.js";
import { appState } from "../AppState.js";
class TriviaService {
    async getTrivia() {
        const res = await trivia_api.get('api.php?amount=40&category=20')
        const triviaData = res.data
        console.log(triviaData);
        appState.trivia = [triviaData]

    }
}

export const triviaService = new TriviaService()