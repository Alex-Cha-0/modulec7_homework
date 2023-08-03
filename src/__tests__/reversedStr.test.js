import { reversedStr } from "../reversedStr.js"

describe("test for revers string function", () => {
    const str = 'My Home'
    it("should be correct reversed string", () => {
        expect(reversedStr(str)).toBe('emoH yM')
    })
})