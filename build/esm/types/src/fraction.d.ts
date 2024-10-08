export declare class Fraction {
    static get CATEGORY(): string;
    private static __staticFractionA;
    private static __staticFractionB;
    private static __staticFractionTmp;
    static GCD(a: number, b: number): number;
    static LCM(a: number, b: number): number;
    static LCMM(args: number[]): number;
    numerator: number;
    denominator: number;
    constructor(numerator?: number, denominator?: number);
    set(numerator?: number, denominator?: number): this;
    value(): number;
    simplify(): this;
    add(param1?: Fraction | number, param2?: number): this;
    subtract(param1?: Fraction | number, param2?: number): this;
    multiply(param1?: Fraction | number, param2?: number): this;
    divide(param1?: Fraction | number, param2?: number): this;
    equals(compare: Fraction | number): boolean;
    greaterThan(compare: Fraction | number): boolean;
    greaterThanEquals(compare: Fraction | number): boolean;
    lessThan(compare: Fraction | number): boolean;
    lessThanEquals(compare: Fraction | number): boolean;
    clone(): Fraction;
    copy(other: Fraction | number): this;
    quotient(): number;
    remainder(): number;
    makeAbs(): this;
    toString(): string;
    toSimplifiedString(): string;
    toMixedString(): string;
    parse(str: string): this;
}
//# sourceMappingURL=fraction.d.ts.map