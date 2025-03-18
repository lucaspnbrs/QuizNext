import RespostaModel from "./resposta";

export default class QuestaoModel {
    #id: number
    #enunciado: string
    #respostas: RespostaModel[]
    #acertou: boolean

    constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false){
        this.#id = id;
        this.#enunciado = enunciado;
        this.#respostas = respostas;
        this.#acertou = acertou;
    }

    getId(){
        return this.#id
    }
    getEnunciado(){
        return this.#enunciado
    }
    getRespostas(){
        return this.#respostas
    }
    getAcertou(){
        return this.#acertou
    }
    getRespondida(){
        for(let resposta of this.#respostas){
            if(resposta.revelada) return true
        }
        return true
    }
}