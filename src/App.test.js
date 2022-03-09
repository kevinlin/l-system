import {produce} from "./algae";

test('n=0, returns A', () => {
    expect(produce('A', 0)).toBe('A')
});

test('n=1, returns AB', () => {
    expect(produce('A', 1)).toBe('AB');
});

test('n=2, returns ABA', () => {
    expect(produce('A', 2)).toBe('ABA');
});

test('n=7, returns ABAABABAABAABABAABABAABAABABAABAAB', () => {
    expect(produce('A', 7)).toBe('ABAABABAABAABABAABABAABAABABAABAAB');
});