import { Modifier, ModifierPosition } from './modifier';
import { ModifierContextState } from './modifiercontext';
import { Note } from './note';
export declare class Parenthesis extends Modifier {
    static get CATEGORY(): string;
    protected point: number;
    static buildAndAttach(notes: Note[]): void;
    static format(parentheses: Parenthesis[], state: ModifierContextState): boolean;
    constructor(position: ModifierPosition);
    setNote(note: Note): this;
    draw(): void;
}
//# sourceMappingURL=parenthesis.d.ts.map