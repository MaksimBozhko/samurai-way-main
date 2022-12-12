import {mult, sum} from "./function";


let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    //action
    let result1 = sum(a, b)
    let result2 = sum(b, c)

    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)

})

test('mult should be correct', () => {
    //action
    let result1 = mult(a, b)
    let result2 = mult(b, c)

    //expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)

})