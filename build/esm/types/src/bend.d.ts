import { FontInfo } from './font';
import { Modifier } from './modifier';
import { ModifierContextState } from './modifiercontext';
export interface BendPhrase {
    x?: number;
    type: number;
    text: string;
    width?: number;
    draw_width?: number;
}
export declare class Bend extends Modifier {
    static get CATEGORY(): string;
    static get UP(): number;
    static get DOWN(): number;
    static TEXT_FONT: Required<FontInfo>;
    static format(bends: Bend[], state: ModifierContextState): boolean;
    protected text: string;
    protected tap: string;
    protected release: boolean;
    protected phrase: BendPhrase[];
    render_options: {
        line_width: number;
        release_width: number;
        bend_width: number;
        line_style: string;
    };
    constructor(text: string, release?: boolean, phrase?: BendPhrase[]);
    setXShift(value: number): this;
    setTap(value: string): this;
    getText(): string;
    getTextHeight(): number;
    protected updateWidth(): this;
    draw(): void;
}
//# sourceMappingURL=bend.d.ts.map