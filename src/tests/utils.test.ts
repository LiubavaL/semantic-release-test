import {sum} from '../utils'
import {test, expect} from 'vitest'

test('expects 1 + 3 to equal 4', () => {
    expect(sum(1, 3)).toBe(4);
})