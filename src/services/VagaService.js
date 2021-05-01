import Request from './Request';
import { API } from '../config/routes';

class VagaService {

    async criar(vaga) {
        return await Request.post(API.VAGA, vaga);
    }

    async buscar(id) {
        let resposta = await Request.get(API.VAGA + `/${id}`);
        return resposta.data;
    }

    async alterar(vaga) {
        return await Request.put(API.VAGA + `/${vaga.id}`, vaga);
    }

    async remover(id) {
        return await Request.delete(API.VAGA + `/${id}`);
    }

    async listar() {
        // let parametros = `?start=${paginaInicial}&pageSize=${itensPorPagina}`
        let resposta = await Request.get(API.VAGA);
        return resposta.data;
    }

    async listarPorEmpresa(id) {
        let resposta = await Request.get(API.VAGA + `/empresa/${id}`)
        return resposta.data;
    }

    async filtrar(tipo, valor) {
        let resposta = await Request.get(API.VAGA + `/filtro?filtro=${tipo}&valor=${valor}`);
        return resposta.data;
    }
}

export default new VagaService();