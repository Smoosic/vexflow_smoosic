import { Glyph } from './glyph';
import { Stave } from './stave';
import { StaveModifier } from './stavemodifier';
export interface ClefType {
    code: string;
    line: number;
}
export interface ClefAnnotatiomType extends ClefType {
    x_shift: number;
    point: number;
}
export interface ClefMetrics {
    width: number;
    annotations: {
        [key: string]: {
            [type: string]: {
                line?: number;
                shiftX?: number;
            } | number;
        };
    };
}
export declare class Clef extends StaveModifier {
    static DEBUG: boolean;
    static get CATEGORY(): string;
    annotation?: ClefAnnotatiomType;
    clef: ClefType;
    protected attachment?: Glyph;
    protected size?: string;
    protected type?: string;
    static get types(): Record<string, ClefType>;
    static get annotationSmufl(): Record<string, string>;
    constructor(type: string, size?: string, annotation?: string);
    setType(type: string, size?: string, annotation?: string): this;
    getWidth(): number;
    static getPoint(size?: string): number;
    setStave(stave: Stave): this;
    draw(): void;
}
//# sourceMappingURL=clef.d.ts.map