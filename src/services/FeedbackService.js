import Request from './Request';
import { API } from '../config/routes';

class FeedbackService {

    async criar(feedback) {
        return await Request.post(API.FEEDBACK, feedback);
    }

    async buscar() {
        return await Request.get(API.FEEDBACK);
    }

    // async alterar(pessoaJuridica) {
    //     return await Request.put(API.PESSOA_JURIDICA + `/${pessoaJuridica.id}`, pessoaJuridica);
    // }

    // async remover(id) {
    //     return await Request.delete(API.PESSOA_JURIDICA + `/${id}`);
    // }
}

export default new FeedbackService();