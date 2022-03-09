export const produce = (axiom, n) => {
    if (n === 0) {
        return axiom;
    }
    const returnValue = produce(axiom, n - 1).split('').map(applyRules).join('');

    return returnValue;
}

const applyRules = char => {
    switch (char) {
        case '1':
            return '11'
        case '0':
            return '1[0]0';
        default:
            return char;
    }
}
