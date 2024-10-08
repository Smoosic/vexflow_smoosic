import { Glyph, GlyphProps } from './glyph';
import { Note, NoteStruct } from './note';
import { Stem, StemOptions } from './stem';
export declare abstract class StemmableNote extends Note {
    static get CATEGORY(): string;
    stem_direction?: number;
    stem?: Stem;
    protected flag?: Glyph;
    protected stem_extension_override?: number;
    constructor(noteStruct: NoteStruct);
    getStem(): Stem | undefined;
    checkStem(): Stem;
    setStem(stem: Stem): this;
    buildStem(): this;
    buildFlag(category?: string): void;
    getBaseCustomNoteHeadGlyphProps(): GlyphProps;
    getStemLength(): number;
    getBeamCount(): number;
    getStemMinimumLength(): number;
    getStemDirection(): number;
    setStemDirection(direction?: number): this;
    getStemX(): number;
    getCenterGlyphX(): number;
    getStemExtension(): number;
    setStemLength(height: number): this;
    getStemExtents(): {
        topY: number;
        baseY: number;
    };
    getYForTopText(textLine: number): number;
    getYForBottomText(textLine: number): number;
    hasFlag(): boolean;
    postFormat(): this;
    drawStem(stemOptions: StemOptions): void;
}
//# sourceMappingURL=stemmablenote.d.ts.map