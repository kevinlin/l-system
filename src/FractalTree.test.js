import {produce} from "./FractalTree";

test('n=1, returns 1[0]0', () => {
    expect(produce('0', 1)).toBe('1[0]0')
});

test('n=3, returns 1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0', () => {
    expect(produce('0', 3)).toBe('1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0')
});