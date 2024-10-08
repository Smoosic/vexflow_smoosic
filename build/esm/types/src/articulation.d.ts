import { Builder } from './easyscore';
import { Glyph } from './glyph';
import { Modifier } from './modifier';
import { ModifierContextState } from './modifiercontext';
import { StemmableNote } from './stemmablenote';
export interface ArticulationStruct {
    code?: string;
    aboveCode?: string;
    belowCode?: string;
    between_lines: boolean;
}
export declare class Articulation extends Modifier {
    static DEBUG: boolean;
    static get CATEGORY(): string;
    protected static readonly INITIAL_OFFSET: number;
    readonly type: string;
    render_options: {
        font_scale: number;
    };
    protected articulation: ArticulationStruct;
    protected glyph: Glyph;
    static format(articulations: Articulation[], state: ModifierContextState): boolean;
    static easyScoreHook({ articulations }: {
        articulations: string;
    }, note: StemmableNote, builder: Builder): void;
    constructor(type: string);
    protected reset(): void;
    setBetweenLines(betweenLines?: boolean): this;
    draw(): void;
}
//# sourceMappingURL=articulation.d.ts.map