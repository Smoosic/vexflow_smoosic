import { Element } from './element';
import { Glyph } from './glyph';
import { Note } from './note';
export interface TupletOptions {
    beats_occupied?: number;
    bracketed?: boolean;
    location?: number;
    notes_occupied?: number;
    num_notes?: number;
    ratioed?: boolean;
    y_offset?: number;
}
export interface TupletMetrics {
    noteHeadOffset: number;
    stemOffset: number;
    bottomLine: number;
    topModifierOffset: number;
}
export declare const enum TupletLocation {
    BOTTOM = -1,
    TOP = 1
}
export declare class Tuplet extends Element {
    static get CATEGORY(): string;
    notes: Note[];
    protected options: TupletOptions;
    protected num_notes: number;
    protected point: number;
    protected bracketed: boolean;
    protected y_pos: number;
    protected x_pos: number;
    protected width: number;
    protected location: number;
    protected notes_occupied: number;
    protected ratioed: boolean;
    protected numerator_glyphs: Glyph[];
    protected denom_glyphs: Glyph[];
    static get LOCATION_TOP(): number;
    static get LOCATION_BOTTOM(): number;
    static get NESTING_OFFSET(): number;
    static get metrics(): TupletMetrics;
    constructor(notes: Note[], options?: TupletOptions);
    attach(): void;
    detach(): void;
    setBracketed(bracketed: boolean): this;
    setRatioed(ratioed: boolean): this;
    setTupletLocation(location: number): this;
    getNotes(): Note[];
    getNoteCount(): number;
    beatsOccupiedDeprecationWarning(): void;
    getBeatsOccupied(): number;
    setBeatsOccupied(beats: number): void;
    getNotesOccupied(): number;
    setNotesOccupied(notes: number): void;
    resolveGlyphs(): void;
    getNestedTupletCount(): number;
    getYPosition(): number;
    draw(): void;
}
//# sourceMappingURL=tuplet.d.ts.map