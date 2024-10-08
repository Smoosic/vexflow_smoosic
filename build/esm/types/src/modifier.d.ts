import { Element } from './element';
import { ModifierContext } from './modifiercontext';
import { Note } from './note';
export declare enum ModifierPosition {
    CENTER = 0,
    LEFT = 1,
    RIGHT = 2,
    ABOVE = 3,
    BELOW = 4
}
export declare class Modifier extends Element {
    static get CATEGORY(): string;
    static get Position(): typeof ModifierPosition;
    static get PositionString(): Record<string, number>;
    protected note?: Note;
    protected index?: number;
    protected width: number;
    protected text_line: number;
    protected position: ModifierPosition;
    protected y_shift: number;
    protected x_shift: number;
    private spacingFromNextModifier;
    private modifierContext?;
    constructor();
    protected reset(): void;
    getWidth(): number;
    setWidth(width: number): this;
    getNote(): Note;
    checkAttachedNote(): Note;
    setNote(note: Note): this;
    getIndex(): number | undefined;
    checkIndex(): number;
    setIndex(index: number): this;
    getModifierContext(): ModifierContext | undefined;
    checkModifierContext(): ModifierContext;
    setModifierContext(c: ModifierContext): this;
    getPosition(): number;
    setPosition(position: string | number): this;
    setTextLine(line: number): this;
    setYShift(y: number): this;
    setSpacingFromNextModifier(x: number): void;
    getSpacingFromNextModifier(): number;
    setXShift(x: number): this;
    getXShift(): number;
    draw(): void;
    alignSubNotesWithNote(subNotes: Note[], note: Note): void;
}
//# sourceMappingURL=modifier.d.ts.map