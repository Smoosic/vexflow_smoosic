export declare class RuntimeError extends Error {
    code: string;
    constructor(code: string, message?: string);
}
export declare function globalObject(): typeof globalThis & any;
export declare function defined<T>(x?: T, code?: string, message?: string): T;
export declare function log(block: string, ...args: any[]): void;
export declare function warn(...args: any[]): void;
export declare function midLine(a: number, b: number): number;
export declare function prefix(text: string): string;
export declare function normalizeAngle(a: number): number;
export declare function sumArray(arr: number[]): number;
//# sourceMappingURL=util.d.ts.map