import { Modifier } from './modifier';
import { ModifierContext, ModifierContextState } from './modifiercontext';
import { RenderContext } from './rendercontext';
export interface VibratoRenderOptions {
    wave_height: number;
    wave_girth: number;
    vibrato_width: number;
    harsh: boolean;
    wave_width: number;
}
export declare class Vibrato extends Modifier {
    static get CATEGORY(): string;
    render_options: VibratoRenderOptions;
    static format(vibratos: Vibrato[], state: ModifierContextState, context: ModifierContext): boolean;
    constructor();
    setHarsh(harsh: boolean): this;
    setVibratoWidth(width: number): this;
    draw(): void;
    static renderVibrato(ctx: RenderContext, x: number, y: number, opts: VibratoRenderOptions): void;
}
//# sourceMappingURL=vibrato.d.ts.map