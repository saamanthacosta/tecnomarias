import Request from './Request';
import { API } from '../config/routes';

class FeedbackService {
    async buscar() {
        let resposta = await Request.get(API.FEEDBACK);
        return resposta.data;
    }
}

export default new FeedbackService();