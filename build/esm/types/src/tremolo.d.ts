import { Modifier } from './modifier';
export declare class Tremolo extends Modifier {
    static get CATEGORY(): string;
    protected readonly code: string;
    protected readonly num: number;
    y_spacing_scale: number;
    extra_stroke_scale: number;
    constructor(num: number);
    draw(): void;
}
//# sourceMappingURL=tremolo.d.ts.map