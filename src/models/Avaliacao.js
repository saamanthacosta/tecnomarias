export class Avaliacao {
    constructor(id, comentario, nota, data, nomeAvaliadora, idEmpresa) {
        this._id = id;
        this._comentario = comentario;
        this._nota = nota;
        this._data = data;
        this._nomeAvaliadora = nomeAvaliadora;
        this._idEmpresa = idEmpresa;
    }

    get id() {
        return this._id;
    };

    set id(id) {
        this._id = id;
    }

    get comentario() {
        return this._comentario;
    }
    
    set comentario(comentario) {
        this._comentario = comentario;
    }

    get nota() {
        return this._nota;
    }
    
    set nota(nota) {
        this._nota = nota;
    }

    get data() {
        return this._data;
    }
    
    set data(data) {
        this._data = data;
    }

    get nomeAvaliadora() {
        return this._nomeAvaliadora;
    }
    
    set nomeAvaliadora(nomeAvaliadora) {
        this._nomeAvaliadora = nomeAvaliadora;
    }

    get idEmpresa() {
        return this._idEmpresa;
    }
    
    set idEmpresa(idEmpresa) {
        this._idEmpresa = idEmpresa;
    }
}