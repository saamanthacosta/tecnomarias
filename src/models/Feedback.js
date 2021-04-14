export class Feedback {
    constructor(id, comentario, idPessoa) {
        this._id = id;
        this._comentario = comentario;
        this._idPessoa = idPessoa;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get comentario() {
        return this._comentario;
    }

    set comentario(comentario) {
        this._comentario = comentario;
    }

    get idPessoa() {
        return this._idPessoa;
    }

    set idPessoa(idPessoa) {
        this._idPessoa = idPessoa;
    }
}