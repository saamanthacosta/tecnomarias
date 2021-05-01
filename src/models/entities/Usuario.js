export class Usuario {

    constructor(email, senha) {
        this._email = email;
        this._senha = senha;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }
    
    get senha() {
        return this._senha;
    }

    set senha(senha) {
        this._senha = senha;
    }

}