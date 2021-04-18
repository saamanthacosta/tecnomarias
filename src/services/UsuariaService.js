import Request from './Request';
import { API } from '../config/routes';

class UsuariaService {

    async criar(usuaria) {
        return await Request.post(API.USUARIA, usuaria);
    }

    async buscar(usuaria) {
        return await Request.get(API.USUARIA + `/${usuaria.id}`, usuaria);
    }

    async alterar(usuaria) {
        return await Request.put(API.USUARIA + `/${usuaria.id}`, usuaria);
    }

    async remover(id) {
        return await Request.delete(API.USUARIA + `/${id}`);
    }

    async criarPerfil(usuaria, tipo) {
        let parametros = `/perfil?tipo=${tipo}`
        return await Request.post(API.USUARIA + parametros, usuaria);
    }
}

export default new UsuariaService();