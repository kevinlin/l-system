const applyRules = char => {
    switch (char) {
        case 'A':
            return 'AB'
        case 'B':
            return 'A';
    }
}

export const produce = (axiom, n) => {
    if (n === 0) {
        return axiom;
    }
    const returnValue = produce(axiom, n - 1).split('').map(applyRules).join('');

    return returnValue;
}


function reduce(current) {
    let temp = '';
    for (let i = 0; i < current.length; i++) {
        if (current[i] == 'A') {
            temp.concat('A', 'B')
        }
        else if (current[i] == 'B'){
            temp.concat('B');
        }
    }

    return temp;
}