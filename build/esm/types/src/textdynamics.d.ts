import { Glyph } from './glyph';
import { Note } from './note';
import { TextNoteStruct } from './textnote';
export declare class TextDynamics extends Note {
    static DEBUG: boolean;
    static get CATEGORY(): string;
    protected sequence: string;
    protected line: number;
    protected glyphs: Glyph[];
    static get GLYPHS(): Record<string, {
        code: string;
        width: number;
    }>;
    constructor(noteStruct: TextNoteStruct);
    setLine(line: number): this;
    preFormat(): this;
    draw(): void;
}
//# sourceMappingURL=textdynamics.d.ts.map