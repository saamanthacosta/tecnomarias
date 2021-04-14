import Request from './Request';
import { API } from '../config/routes';

class VagaService {

    async criar(vaga) {
        return await Request.post(API.VAGA, vaga);
    }

    async buscar(id) {
        return await Request.get(API.VAGA + `/${id}`);
    }

    async alterar(vaga) {
        return await Request.put(API.VAGA + `/${vaga.id}`, vaga);
    }

    async remover(id) {
        return await Request.delete(API.VAGA + `/${id}`);
    }

    async listar(paginaInicial, itensPorPagina) {
        let parametros = `?start=${paginaInicial}&pageSize=${itensPorPagina}`
        return await Request.get(API.VAGA + parametros);
    }

    async listarPorEmpresa(id) {
        return await Request.get(API.VAGA + `/empresa/${id}`)
    }

    async filtrar(tipo, valor) {
        let parametros = `/filtro?filtro=${tipo}&valor=${valor}`
        return await Request.get(API.VAGA + parametros);
    }
}

export default new VagaService();