import { Modifier } from './modifier';
import { ModifierContextState } from './modifiercontext';
import { Note } from './note';
export declare class Dot extends Modifier {
    static get CATEGORY(): string;
    protected radius: number;
    protected dot_shiftY: number;
    static getDots(note: Note): Dot[];
    static buildAndAttach(notes: Note[], options?: {
        index?: number;
        all?: boolean;
    }): void;
    static format(dots: Dot[], state: ModifierContextState): boolean;
    constructor();
    setNote(note: Note): this;
    setDotShiftY(y: number): this;
    draw(): void;
}
//# sourceMappingURL=dot.d.ts.map