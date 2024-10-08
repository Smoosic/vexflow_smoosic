import { Glyph } from './glyph';
import { Modifier } from './modifier';
import { ModifierContextState } from './modifiercontext';
export interface OrnamentMetrics {
    xOffset: number;
    yOffset: number;
    stemUpYOffset: number;
    reportedWidth: number;
}
export declare class Ornament extends Modifier {
    static DEBUG: boolean;
    static get CATEGORY(): string;
    static get minPadding(): number;
    protected ornament: {
        code: string;
    };
    protected stemUpYOffset: number;
    protected ornamentAlignWithNoteHead: string[] | boolean;
    protected type: string;
    protected delayed: boolean;
    protected reportedWidth: number;
    protected adjustForStemDirection: boolean;
    render_options: {
        accidentalUpperPadding: number;
        accidentalLowerPadding: number;
        font_scale: number;
    };
    protected glyph: Glyph;
    protected accidentalUpper?: Glyph;
    protected accidentalLower?: Glyph;
    protected delayXShift?: number;
    static format(ornaments: Ornament[], state: ModifierContextState): boolean;
    static get ornamentNoteTransition(): string[];
    static get ornamentAttack(): string[];
    static get ornamentAlignWithNoteHead(): string[];
    static get ornamentRelease(): string[];
    static get ornamentArticulation(): string[];
    getMetrics(): OrnamentMetrics;
    constructor(type: string);
    setDelayed(delayed: boolean): this;
    setUpperAccidental(accid: string): this;
    setLowerAccidental(accid: string): this;
    draw(): void;
}
//# sourceMappingURL=ornament.d.ts.map