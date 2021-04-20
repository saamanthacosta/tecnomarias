import Request from './Request';
import { API } from '../config/routes';

class PessoaFisicaService {

    async criar(pessoaFisica) {
        return await Request.post(API.PESSOA_FISICA, pessoaFisica);
    }

    async buscar(id) {
        return await Request.get(API.PESSOA_FISICA + `/${id}`);
    }

    // async alterar(pessoaJuridica) {
    //     return await Request.put(API.PESSOA_JURIDICA + `/${pessoaJuridica.id}`, pessoaJuridica);
    // }

    // async remover(id) {
    //     return await Request.delete(API.PESSOA_JURIDICA + `/${id}`);
    // }
}

export default new PessoaFisicaService();