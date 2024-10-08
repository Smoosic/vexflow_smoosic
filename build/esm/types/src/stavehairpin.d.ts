import { Element } from './element';
import { Note } from './note';
import { RenderContext } from './rendercontext';
export interface StaveHairpinRenderOptions {
    right_shift_ticks?: number;
    left_shift_ticks?: number;
    left_shift_px: number;
    right_shift_px: number;
    height: number;
    y_shift: number;
}
export declare class StaveHairpin extends Element {
    static get CATEGORY(): string;
    protected hairpin: number;
    protected position: number;
    render_options: StaveHairpinRenderOptions;
    protected notes: Record<string, Note>;
    protected first_note?: Note;
    protected last_note?: Note;
    static readonly type: {
        CRESC: number;
        DECRESC: number;
    };
    static FormatByTicksAndDraw(ctx: RenderContext, formatter: {
        pixelsPerTick: number;
    }, notes: Record<string, Note>, type: number, position: number, options: StaveHairpinRenderOptions): void;
    constructor(notes: Record<string, Note>, type: number);
    setPosition(position: number): this;
    setRenderOptions(options: StaveHairpinRenderOptions): this;
    setNotes(notes: Record<string, Note>): this;
    renderHairpin(params: {
        first_x: number;
        last_x: number;
        first_y: number;
        last_y: number;
        staff_height: number;
    }): void;
    draw(): void;
}
//# sourceMappingURL=stavehairpin.d.ts.map