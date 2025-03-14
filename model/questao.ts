export default class QuestaoModel {
    #id: number
    #enunciado: string
    #respostas: any[]
    #acertou: boolean

    constructor(id: number, enunciado: string, respostas: any[], acertou = false){
        this.#id = id;
        this.#enunciado = enunciado;
        this.#respostas = respostas;
        this.#acertou = acertou;
    }
}