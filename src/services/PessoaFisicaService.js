import Request from './Request';
import { API } from '../config/routes';

class PessoaFisicaService {

    async criar(pessoaFisica) {
        return await Request.post(API.PESSOA_FISICA, pessoaFisica);
    }

    async buscar(id) {
        var resposta = await Request.get(API.PESSOA_FISICA + `/${id}`);
        return resposta.data;
    }

    async alterar(pessoaFisica) {
        var resposta = await Request.put(API.PESSOA_FISICA + `/${pessoaFisica.id}`, pessoaFisica);
        return resposta;
    }

    async remover(id) {
        var resposta = await Request.delete(API.PESSOA_FISICA + `/${id}`);
        return resposta;
    }
}

export default new PessoaFisicaService();