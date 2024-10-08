import { BoundingBox } from './boundingbox';
import { Element } from './element';
import { Fraction } from './fraction';
import { RenderContext } from './rendercontext';
import { Stave } from './stave';
import { Tickable } from './tickable';
export interface VoiceTime {
    num_beats: number;
    beat_value: number;
    resolution?: number;
}
export declare enum VoiceMode {
    STRICT = 1,
    SOFT = 2,
    FULL = 3
}
export declare class Voice extends Element {
    static get CATEGORY(): string;
    static get Mode(): typeof VoiceMode;
    protected resolutionMultiplier: number;
    protected smallestTickCount: Fraction;
    protected stave?: Stave;
    protected mode: VoiceMode;
    protected expTicksUsed?: number;
    protected preFormatted: boolean;
    protected options: {
        softmaxFactor: number;
    };
    protected readonly totalTicks: Fraction;
    protected readonly ticksUsed: Fraction;
    protected readonly largestTickWidth: number;
    protected readonly tickables: Tickable[];
    protected readonly time: Required<VoiceTime>;
    constructor(time?: VoiceTime | string);
    getTotalTicks(): Fraction;
    getTicksUsed(): Fraction;
    getLargestTickWidth(): number;
    getSmallestTickCount(): Fraction;
    getTickables(): Tickable[];
    getMode(): number;
    setMode(mode: number): this;
    getResolutionMultiplier(): number;
    getActualResolution(): number;
    setStave(stave: Stave): this;
    getStave(): Stave | undefined;
    getBoundingBox(): BoundingBox | undefined;
    setStrict(strict: boolean): this;
    isComplete(): boolean;
    setSoftmaxFactor(factor: number): this;
    protected reCalculateExpTicksUsed(): number;
    softmax(tickValue: number): number;
    addTickable(tickable: Tickable): this;
    addTickables(tickables: Tickable[]): this;
    preFormat(): this;
    checkStave(): Stave;
    draw(context?: RenderContext, stave?: Stave): void;
}
//# sourceMappingURL=voice.d.ts.map