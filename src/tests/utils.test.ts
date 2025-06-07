import {minus, sum} from '../utils'
import {test, expect} from 'vitest'

test('expects 1 + 3 to equal 4', () => {
    expect(sum(1, 3)).toBe(4);
})

test('expects 3 - 3 to equal 0', () => {
    expect(minus(3, 3)).toBe(0);
})