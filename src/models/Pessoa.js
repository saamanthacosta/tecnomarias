export class Pessoa {
    constructor(id, nome, email, listaTelefones) {
        if (this.constructor == Pessoa){
            throw new Error("Você não deveria instanciar um objeto do tipo Pessoa diretamente, pois essa é uma classe abstata");
        }
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._listaTelefones = listaTelefones;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }
    
    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }
    
    get listaTelefones() {
        return this._listaTelefones;
    }

    set listaTelefones(listaTelefones) {
        this._listaTelefones = listaTelefones;
    }
}