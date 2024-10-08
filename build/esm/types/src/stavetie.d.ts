import { Element } from './element';
import { FontInfo } from './font';
import { Note } from './note';
export interface TieNotes {
    first_note?: Note | null;
    last_note?: Note | null;
    first_indices?: number[];
    last_indices?: number[];
}
export declare class StaveTie extends Element {
    static get CATEGORY(): string;
    static TEXT_FONT: Required<FontInfo>;
    render_options: {
        cp2: number;
        last_x_shift: number;
        tie_spacing: number;
        cp1: number;
        first_x_shift: number;
        text_shift_x: number;
        y_shift: number;
    };
    protected text?: string;
    protected notes: TieNotes;
    protected direction?: number;
    constructor(notes: TieNotes, text?: string);
    setDirection(direction: number): this;
    setNotes(notes: TieNotes): this;
    isPartial(): boolean;
    renderTie(params: {
        direction: number;
        first_x_px: number;
        last_x_px: number;
        last_ys: number[];
        first_ys: number[];
    }): void;
    renderText(first_x_px: number, last_x_px: number): void;
    getNotes(): TieNotes;
    draw(): boolean;
}
//# sourceMappingURL=stavetie.d.ts.map