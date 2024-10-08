import { Fraction } from './fraction';
import { NoteMetrics } from './note';
import { Tickable } from './tickable';
export interface TickContextMetrics extends NoteMetrics {
    totalLeftPx: number;
    totalRightPx: number;
}
export interface TickContextOptions {
    tickID: number;
}
export declare class TickContext {
    protected readonly tickID: number;
    protected readonly tickables: Tickable[];
    protected readonly tickablesByVoice: Record<string, Tickable>;
    protected currentTick: Fraction;
    protected maxTicks: Fraction;
    protected padding: number;
    protected xBase: number;
    protected x: number;
    protected xOffset: number;
    protected notePx: number;
    protected glyphPx: number;
    protected leftDisplacedHeadPx: number;
    protected rightDisplacedHeadPx: number;
    protected modLeftPx: number;
    protected modRightPx: number;
    protected totalLeftPx: number;
    protected totalRightPx: number;
    protected maxTickable?: Tickable;
    protected minTicks?: Fraction;
    protected minTickable?: Tickable;
    tContexts: TickContext[];
    protected preFormatted: boolean;
    protected postFormatted: boolean;
    protected width: number;
    protected formatterMetrics: {
        freedom: {
            left: number;
            right: number;
        };
    };
    static getNextContext(tContext: TickContext): TickContext | undefined;
    constructor(options?: TickContextOptions);
    getTickID(): number;
    getX(): number;
    setX(x: number): this;
    getXBase(): number;
    setXBase(xBase: number): void;
    getXOffset(): number;
    setXOffset(xOffset: number): void;
    getWidth(): number;
    setPadding(padding: number): this;
    getMaxTicks(): Fraction;
    getMinTicks(): Fraction | undefined;
    getMaxTickable(): Tickable | undefined;
    getMinTickable(): Tickable | undefined;
    getTickables(): Tickable[];
    getTickableForVoice(voiceIndex: number): Tickable;
    getTickablesByVoice(): Record<string, Tickable>;
    getCenterAlignedTickables(): Tickable[];
    getMetrics(): TickContextMetrics;
    getCurrentTick(): Fraction;
    setCurrentTick(tick: Fraction): void;
    addTickable(tickable: Tickable, voiceIndex?: number): this;
    preFormat(): this;
    postFormat(): this;
    getFormatterMetrics(): {
        freedom: {
            left: number;
            right: number;
        };
    };
}
//# sourceMappingURL=tickcontext.d.ts.map