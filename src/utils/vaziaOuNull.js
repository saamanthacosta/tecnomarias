export function vaziaOuNull(str) {
    return (!str || /^\s*$/.test(str));
}