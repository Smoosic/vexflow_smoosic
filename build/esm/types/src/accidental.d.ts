import { Glyph } from './glyph';
import { Modifier } from './modifier';
import { ModifierContextState } from './modifiercontext';
import { Note } from './note';
import { Voice } from './voice';
export type Line = {
    column: number;
    line: number;
    flatLine: boolean;
    dblSharpLine: boolean;
    numAcc: number;
    width: number;
};
export declare class Accidental extends Modifier {
    readonly type: string;
    static DEBUG: boolean;
    protected accidental: {
        code: string;
        parenRightPaddingAdjustment: number;
    };
    render_options: {
        parenLeftPadding: number;
        font_scale: number;
        parenRightPadding: number;
    };
    protected cautionary: boolean;
    protected glyph: Glyph;
    protected parenRight?: Glyph;
    protected parenLeft?: Glyph;
    static get CATEGORY(): string;
    static format(accidentals: Accidental[], state: ModifierContextState): void;
    static checkCollision(line1: Line, line2: Line): boolean;
    static applyAccidentals(voices: Voice[], keySignature: string): void;
    constructor(type: string);
    protected reset(): void;
    getWidth(): number;
    setNote(note: Note): this;
    setAsCautionary(): this;
    draw(): void;
}
//# sourceMappingURL=accidental.d.ts.map