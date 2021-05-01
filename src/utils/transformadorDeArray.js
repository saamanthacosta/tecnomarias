import { vaziaOuNull } from './vaziaOuNull'

export default function transformadorDeArray(objeto) {

    var arrayTransformado = []

    for (var property in objeto) {
        if (!vaziaOuNull(objeto[property])) {
            arrayTransformado.push(objeto[property]);
        }
    }

    return arrayTransformado;
}