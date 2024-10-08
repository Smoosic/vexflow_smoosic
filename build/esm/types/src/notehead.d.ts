import { BoundingBox } from './boundingbox';
import { ElementStyle } from './element';
import { Note, NoteStruct } from './note';
import { Stave } from './stave';
export interface NoteHeadMetrics {
    minPadding?: number;
    displacedShiftX?: number;
}
export interface NoteHeadStruct extends NoteStruct {
    line?: number;
    glyph_font_scale?: number;
    slashed?: boolean;
    style?: ElementStyle;
    stem_down_x_offset?: number;
    stem_up_x_offset?: number;
    custom_glyph_code?: string;
    x_shift?: number;
    stem_direction?: number;
    displaced?: boolean;
    note_type?: string;
    x?: number;
    y?: number;
    index?: number;
}
export declare class NoteHead extends Note {
    static DEBUG: boolean;
    static get CATEGORY(): string;
    glyph_code: string;
    protected custom_glyph: boolean;
    protected stem_up_x_offset: number;
    protected stem_down_x_offset: number;
    protected displaced: boolean;
    protected stem_direction: number;
    protected x: number;
    protected y: number;
    protected line: number;
    protected index?: number;
    protected slashed: boolean;
    constructor(noteStruct: NoteHeadStruct);
    getWidth(): number;
    isDisplaced(): boolean;
    setX(x: number): this;
    getY(): number;
    setY(y: number): this;
    getLine(): number;
    setLine(line: number): this;
    getAbsoluteX(): number;
    getBoundingBox(): BoundingBox;
    setStave(stave: Stave): this;
    preFormat(): this;
    draw(): void;
}
//# sourceMappingURL=notehead.d.ts.map