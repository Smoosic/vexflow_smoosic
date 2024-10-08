import { BoundingBox } from './boundingbox';
import { ModifierContext } from './modifiercontext';
import { RenderContext } from './rendercontext';
import { Stave } from './stave';
import { StemmableNote } from './stemmablenote';
import { TabNote } from './tabnote';
import { TabStave } from './tabstave';
import { Tickable } from './tickable';
import { TickContext } from './tickcontext';
import { Voice } from './voice';
export interface FormatterOptions {
    softmaxFactor?: number;
    globalSoftmax?: boolean;
    maxIterations?: number;
}
export interface FormatParams {
    align_rests?: boolean;
    stave?: Stave;
    context?: RenderContext;
    auto_beam?: boolean;
}
export interface AlignmentContexts<T> {
    list: number[];
    map: Record<number, T>;
    array: T[];
    resolutionMultiplier: number;
}
export interface AlignmentModifierContexts {
    map: Map<Stave | undefined, Record<number, ModifierContext>>;
    array: ModifierContext[];
    resolutionMultiplier: number;
}
export declare class Formatter {
    static DEBUG: boolean;
    protected hasMinTotalWidth: boolean;
    protected minTotalWidth: number;
    protected contextGaps: {
        total: number;
        gaps: {
            x1: number;
            x2: number;
        }[];
    };
    protected justifyWidth: number;
    protected totalCost: number;
    protected totalShift: number;
    protected tickContexts: AlignmentContexts<TickContext>;
    protected formatterOptions: Required<FormatterOptions>;
    protected modifierContexts: AlignmentModifierContexts[];
    protected voices: Voice[];
    protected lossHistory: number[];
    protected durationStats: Record<string, {
        mean: number;
        count: number;
    }>;
    static SimpleFormat(notes: Tickable[], x?: number, { paddingBetween }?: {
        paddingBetween?: number | undefined;
    }): void;
    static plotDebugging(ctx: RenderContext, formatter: Formatter, xPos: number, y1: number, y2: number, options?: {
        stavePadding: number;
    }): void;
    static FormatAndDraw(ctx: RenderContext, stave: Stave, notes: StemmableNote[], params?: FormatParams | boolean): BoundingBox | undefined;
    static FormatAndDrawTab(ctx: RenderContext, tabstave: TabStave, stave: Stave, tabnotes: TabNote[], notes: Tickable[], autobeam: boolean, params: FormatParams): void;
    static AlignRestsToNotes(tickables: Tickable[], alignAllNotes: boolean, alignTuplets?: boolean): void;
    constructor(options?: FormatterOptions);
    alignRests(voices: Voice[], alignAllNotes: boolean): void;
    preCalculateMinTotalWidth(voices: Voice[]): number;
    getMinTotalWidth(): number;
    static getResolutionMultiplier(voices: Voice[]): number;
    createModifierContexts(voices: Voice[]): void;
    createTickContexts(voices: Voice[]): AlignmentContexts<TickContext>;
    getTickContexts(): AlignmentContexts<TickContext> | undefined;
    preFormat(justifyWidth?: number, renderingContext?: RenderContext, voicesParam?: Voice[], stave?: Stave): number;
    evaluate(): number;
    tune(options?: {
        alpha?: number;
    }): number;
    postFormat(): this;
    joinVoices(voices: Voice[]): this;
    format(voices: Voice[], justifyWidth?: number, options?: FormatParams): this;
    formatToStave(voices: Voice[], stave: Stave, optionsParam?: FormatParams): this;
    getTickContext(tick: number): TickContext | undefined;
}
//# sourceMappingURL=formatter.d.ts.map