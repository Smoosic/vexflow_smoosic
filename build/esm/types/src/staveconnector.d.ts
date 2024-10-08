import { Element } from './element';
import { FontInfo } from './font';
import { Stave } from './stave';
export type StaveConnectorType = 'singleRight' | 'singleLeft' | 'single' | 'double' | 'brace' | 'bracket' | 'boldDoubleLeft' | 'boldDoubleRight' | 'thinDouble' | 'none' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export declare class StaveConnector extends Element {
    static get CATEGORY(): string;
    static TEXT_FONT: Required<FontInfo>;
    static readonly type: Record<string, Exclude<StaveConnectorType, string>>;
    static readonly typeString: Record<Exclude<StaveConnectorType, number>, Exclude<StaveConnectorType, string>>;
    protected width: number;
    protected texts: {
        content: string;
        options: {
            shift_x: number;
            shift_y: number;
        };
    }[];
    protected type: typeof StaveConnector['type'][keyof typeof StaveConnector['type']];
    readonly top_stave: Stave;
    readonly bottom_stave: Stave;
    readonly thickness: number;
    protected x_shift: number;
    constructor(top_stave: Stave, bottom_stave: Stave);
    setType(type: StaveConnectorType): this;
    getType(): number;
    setText(text: string, options?: {
        shift_x?: number;
        shift_y?: number;
    }): this;
    setXShift(x_shift: number): this;
    getXShift(): number;
    draw(): void;
}
//# sourceMappingURL=staveconnector.d.ts.map