export default class PessoaDTO {
    constructor(id, nome, email, telefoneList, tipoPessoa) {
        if (this.constructor === PessoaDTO){
            throw new Error("Você não deveria instanciar um objeto do tipo Pessoa diretamente, pois essa é uma classe abstata");
        }
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefoneList = telefoneList;
        this.tipoPessoa = tipoPessoa;
    }
}