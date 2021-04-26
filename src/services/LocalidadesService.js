import axios from "axios";

class LocalidadesService {

    async listarMunicipios(id) {
        return await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`);
    }

    async listarEstados() {
        return await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`);
    }

    async buscarMunicipio(id) {
        return await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${id}`)
    }
}

export default new LocalidadesService();