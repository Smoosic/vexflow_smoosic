import { Glyph } from './glyph';
import { StaveModifier } from './stavemodifier';
import { TimeSignatureGlyph } from './timesigglyph';
export interface TimeSignatureInfo {
    glyph: Glyph;
    line: number;
    num: boolean;
}
export declare class TimeSignature extends StaveModifier {
    static get CATEGORY(): string;
    static get glyphs(): Record<string, {
        code: string;
        line: number;
    }>;
    point: number;
    bottomLine: number;
    topLine: number;
    protected timeSpec: string;
    protected line: number;
    protected glyph: Glyph;
    protected is_numeric: boolean;
    protected validate_args: boolean;
    constructor(timeSpec?: string, customPadding?: number, validate_args?: boolean);
    parseTimeSpec(timeSpec: string): TimeSignatureInfo;
    makeTimeSignatureGlyph(topDigits: string, botDigits: string): TimeSignatureGlyph;
    getInfo(): TimeSignatureInfo;
    setTimeSig(timeSpec: string): this;
    getTimeSpec(): string;
    getLine(): number;
    setLine(line: number): void;
    getGlyph(): Glyph;
    setGlyph(glyph: Glyph): void;
    getIsNumeric(): boolean;
    setIsNumeric(isNumeric: boolean): void;
    draw(): void;
}
//# sourceMappingURL=timesignature.d.ts.map