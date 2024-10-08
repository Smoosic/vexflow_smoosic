import { Element } from './element';
import { FontInfo } from './font';
import { StaveNote } from './stavenote';
export declare class PedalMarking extends Element {
    static DEBUG: boolean;
    static get CATEGORY(): string;
    static TEXT_FONT: Required<FontInfo>;
    protected line: number;
    protected type: number;
    protected custom_depress_text: string;
    protected custom_release_text: string;
    render_options: {
        color: string;
        bracket_height: number;
        text_margin_right: number;
        bracket_line_width: number;
    };
    protected notes: StaveNote[];
    static readonly GLYPHS: Record<string, {
        code: string;
    }>;
    static readonly type: {
        TEXT: number;
        BRACKET: number;
        MIXED: number;
    };
    static readonly typeString: Record<string, number>;
    static createSustain(notes: StaveNote[]): PedalMarking;
    static createSostenuto(notes: StaveNote[]): PedalMarking;
    static createUnaCorda(notes: StaveNote[]): PedalMarking;
    constructor(notes: StaveNote[]);
    setType(type: string | number): this;
    setCustomText(depress: string, release?: string): this;
    setLine(line: number): this;
    drawBracketed(): void;
    drawText(): void;
    draw(): void;
}
//# sourceMappingURL=pedalmarking.d.ts.map