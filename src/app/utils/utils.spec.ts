import { pluck, range } from "./utils";

describe('utils', () => {
    describe('sanity', () => {
        it('should work', () => {
            expect(true).toBe(true);
        })
    })
    describe('range', () => {
        it('returns correct range from 2 to 6', () => {
            expect(range(2, 6)).toEqual([2, 3, 4, 5]);
        })
    })

    describe('pluck', () => {
        it('pluck test', () => {
            expect(pluck([{a: 1}, {a: 2}, {a: 3}], 'a')).toEqual([1, 2, 3]);
        })
    })
})
