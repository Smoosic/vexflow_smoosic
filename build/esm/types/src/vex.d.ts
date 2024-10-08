import { Flow } from './flow';
import { RuntimeError } from './util';
export declare class Vex {
    static Flow: typeof Flow;
    static sortAndUnique(arr: any[], cmp: any, eq: any): any[];
    static contains(arr: any[], obj: any): boolean;
    static getCanvasContext(canvasSelector: string): RenderingContext;
    static benchmark(s: any, f: any): void;
    static stackTrace(): string | undefined;
    static RERR: RuntimeError;
    static RuntimeError: RuntimeError;
}
//# sourceMappingURL=vex.d.ts.map