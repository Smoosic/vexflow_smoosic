import { Element } from './element';
import { Factory } from './factory';
import { FormatParams, Formatter, FormatterOptions } from './formatter';
import { RenderContext } from './rendercontext';
import { Stave, StaveOptions } from './stave';
import { StaveConnector, StaveConnectorType } from './staveconnector';
import { Voice } from './voice';
export interface SystemFormatterOptions extends FormatterOptions {
    alpha?: number;
}
export interface SystemStave {
    voices: Voice[];
    stave?: Stave;
    noJustification?: boolean;
    options?: StaveOptions;
    spaceAbove?: number;
    spaceBelow?: number;
    debugNoteMetrics?: boolean;
}
interface StaveInfo {
    noJustification: boolean;
    options: StaveOptions;
    spaceAbove: number;
    spaceBelow: number;
    debugNoteMetrics: boolean;
}
export interface SystemOptions {
    factory?: Factory;
    noPadding?: boolean;
    debugFormatter?: boolean;
    spaceBetweenStaves?: number;
    formatIterations?: number;
    autoWidth?: boolean;
    x?: number;
    width?: number;
    y?: number;
    details?: SystemFormatterOptions;
    formatOptions?: FormatParams;
    noJustification?: boolean;
}
export declare class System extends Element {
    static get CATEGORY(): string;
    protected options: Required<SystemOptions>;
    protected factory: Factory;
    protected formatter?: Formatter;
    protected startX?: number;
    protected lastY?: number;
    protected partStaves: Stave[];
    protected partStaveInfos: StaveInfo[];
    protected partVoices: Voice[];
    protected connector?: StaveConnector;
    protected debugNoteMetricsYs?: {
        y: number;
        stave: Stave;
    }[];
    constructor(params?: SystemOptions);
    setOptions(options?: SystemOptions): void;
    getX(): number;
    setX(x: number): void;
    getY(): number;
    setY(y: number): void;
    getStaves(): Stave[];
    getVoices(): Voice[];
    setContext(context: RenderContext): this;
    addConnector(type?: StaveConnectorType): StaveConnector;
    addStave(params: SystemStave): Stave;
    addVoices(voices: Voice[]): void;
    format(): void;
    draw(): void;
}
export {};
//# sourceMappingURL=system.d.ts.map