import Request from './Request';
import { API } from '../config/routes';

class PessoaJuridicaService {

    async criar(pessoaJuridica) {
        return await Request.post(API.PESSOA_JURIDICA, pessoaJuridica);
    }

    async buscar(id) {
        let resposta = await Request.get(API.PESSOA_JURIDICA + `/${id}`);
        return resposta.data;
    }

    async alterar(pessoaJuridica) {
        return await Request.put(API.PESSOA_JURIDICA + `/${pessoaJuridica.id}`, pessoaJuridica);
    }

    async remover(id) {
        return await Request.delete(API.PESSOA_JURIDICA + `/${id}`);
    }

    async listar() {
        return await Request.get(API.PESSOA_JURIDICA);
    }

    async listarAreasAtuacao() {
        return await Request.get(API.PESSOA_JURIDICA + `/area_atuacao`)
    }

    async avaliar(id, avaliacao) {
        return await Request.get(API.PESSOA_JURIDICA + `/${id}/avaliacao`, avaliacao);
    }
}

export default new PessoaJuridicaService();