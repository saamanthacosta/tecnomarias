export function primeiraLetraMaiuscula(frase) {
    let fraseConvertida = frase.toLowerCase().replace(/(?:^|\s)\S/g, palavra => {
        return palavra.toUpperCase();
      });

      return fraseConvertida
}