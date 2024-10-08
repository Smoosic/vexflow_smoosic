import { Beam } from './beam';
import { Fraction } from './fraction';
import { GlyphProps } from './glyph';
import { Modifier } from './modifier';
import { RenderContext } from './rendercontext';
import { Stave } from './stave';
import { Stroke } from './strokes';
import { Tickable } from './tickable';
import { TickContext } from './tickcontext';
import { Voice } from './voice';
export interface KeyProps {
    stem_down_x_offset?: number;
    stem_up_x_offset?: number;
    key: string;
    octave: number;
    line: number;
    int_value?: number;
    accidental?: string;
    code?: string;
    stroke: number;
    shift_right?: number;
    displaced: boolean;
}
export interface NoteMetrics {
    width: number;
    glyphWidth?: number;
    notePx: number;
    modLeftPx: number;
    modRightPx: number;
    leftDisplacedHeadPx: number;
    glyphPx: number;
    rightDisplacedHeadPx: number;
}
export interface NoteDuration {
    duration: string;
    dots: number;
    type: string;
}
export interface ParsedNote {
    duration: string;
    type: string;
    customTypes: string[];
    dots: number;
    ticks: number;
}
export interface NoteStruct {
    keys?: string[];
    duration: string;
    line?: number;
    dots?: number;
    type?: string;
    align_center?: boolean;
    duration_override?: Fraction;
}
export declare abstract class Note extends Tickable {
    static get CATEGORY(): string;
    static plotMetrics(ctx: RenderContext, note: Tickable, yPos: number): void;
    protected static parseDuration(durationString?: string): NoteDuration | undefined;
    protected static parseNoteStruct(noteStruct: NoteStruct): ParsedNote | undefined;
    glyphProps: GlyphProps;
    keys: string[];
    keyProps: KeyProps[];
    protected stave?: Stave;
    render_options: {
        draw_stem_through_stave?: boolean;
        draw?: boolean;
        draw_dots?: boolean;
        draw_stem?: boolean;
        y_shift: number;
        extend_left?: number;
        extend_right?: number;
        glyph_font_scale: number;
        annotation_spacing: number;
        glyph_font_size?: number;
        scale: number;
        font: string;
        stroke_px: number;
    };
    protected duration: string;
    protected leftDisplacedHeadPx: number;
    protected rightDisplacedHeadPx: number;
    protected noteType: string;
    protected customGlyphs: GlyphProps[];
    protected ys: number[];
    protected customTypes: string[];
    protected playNote?: Note;
    protected beam?: Beam;
    constructor(noteStruct: NoteStruct);
    getPlayNote(): Note | undefined;
    setPlayNote(note: Note): this;
    isRest(): boolean;
    addStroke(index: number, stroke: Stroke): this;
    getStave(): Stave | undefined;
    checkStave(): Stave;
    setStave(stave: Stave): this;
    getLeftDisplacedHeadPx(): number;
    getRightDisplacedHeadPx(): number;
    setLeftDisplacedHeadPx(x: number): this;
    setRightDisplacedHeadPx(x: number): this;
    shouldIgnoreTicks(): boolean;
    getLineNumber(isTopNote?: boolean): number;
    getLineForRest(): number;
    getGlyph(): any;
    getGlyphProps(): GlyphProps;
    getGlyphWidth(): number;
    setYs(ys: number[]): this;
    getYs(): number[];
    getYForTopText(text_line: number): number;
    getVoice(): Voice;
    setVoice(voice: Voice): this;
    getTickContext(): TickContext;
    setTickContext(tc: TickContext): this;
    getDuration(): string;
    isDotted(): boolean;
    hasStem(): boolean;
    getNoteType(): string;
    getBeam(): Beam | undefined;
    checkBeam(): Beam;
    hasBeam(): boolean;
    setBeam(beam: Beam): this;
    addModifier(modifier: Modifier, index?: number): this;
    getModifiersByType(type: string): Modifier[];
    getModifierStartXY(position?: number, index?: number, options?: any): {
        x: number;
        y: number;
    };
    getRightParenthesisPx(index: number): number;
    getLeftParenthesisPx(index: number): number;
    getFirstDotPx(): number;
    getMetrics(): NoteMetrics;
    getAbsoluteX(): number;
    static getPoint(size?: string): number;
    getStemDirection(): number;
    getStemExtents(): Record<string, number>;
    getTieRightX(): number;
    getTieLeftX(): number;
    getKeys(): string[];
    getKeyProps(): KeyProps[];
}
//# sourceMappingURL=note.d.ts.map