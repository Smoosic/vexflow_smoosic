import { ClefAnnotatiomType, ClefType } from './clef';
import { Note } from './note';
export declare class ClefNote extends Note {
    static get CATEGORY(): string;
    protected clef: ClefType;
    protected annotation?: ClefAnnotatiomType;
    protected type: string;
    protected size: string;
    constructor(type: string, size?: string, annotation?: string);
    setType(type: string, size: string, annotation: string): this;
    getClef(): ClefType;
    preFormat(): this;
    draw(): void;
}
//# sourceMappingURL=clefnote.d.ts.map