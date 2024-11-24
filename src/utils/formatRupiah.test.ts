import { convertToRp } from "./formatRupiah"

describe("formatRupiah", () => {
    test("should format a valid value non decimal correctly", () => {
        expect(convertToRp(1000)).toBe("Rp 1.000");
        expect(convertToRp("2000")).toBe("Rp 2.000");
    })

    test("should format a valid decimal value correctly", () => {
        expect(convertToRp(1000.12, 2)).toBe("Rp 1.000,12");
        expect(convertToRp("1000.12", 2)).toBe("Rp 1.000,12");
    })

    test('should handle NaN values gracefully', () => {
        expect(convertToRp('invalid')).toBe('Rp 0');
        expect(convertToRp(NaN)).toBe('Rp 0');
    })
})