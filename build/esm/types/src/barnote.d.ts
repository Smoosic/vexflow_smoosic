import { ModifierContext } from './modifiercontext';
import { Note } from './note';
import { Barline, BarlineType } from './stavebarline';
export declare class BarNote extends Note {
    static DEBUG: boolean;
    static get CATEGORY(): string;
    protected metrics: {
        widths: Record<string, number>;
    };
    protected type: BarlineType;
    barline: Barline;
    constructor(type?: string | BarlineType);
    getType(): BarlineType;
    setType(type: string | BarlineType): this;
    addToModifierContext(mc: ModifierContext): this;
    preFormat(): this;
    draw(): void;
}
//# sourceMappingURL=barnote.d.ts.map