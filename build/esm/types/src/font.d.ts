import { ChordSymbolMetrics } from './chordsymbol';
import { ClefMetrics } from './clef';
import { NoteHeadMetrics } from './notehead';
import { OrnamentMetrics } from './ornament';
import { StringNumberMetrics } from './stringnumber';
import { TupletMetrics } from './tuplet';
export interface FontInfo {
    family?: string;
    size?: number | string;
    weight?: string | number;
    style?: string;
}
export type FontModule = {
    data: FontData;
    metrics: FontMetrics;
};
export interface FontData {
    glyphs: Record<string, FontGlyph>;
    fontFamily?: string;
    resolution: number;
    generatedOn?: string;
}
export interface FontMetrics extends Record<string, any> {
    smufl: boolean;
    stave?: Record<string, number>;
    accidental?: Record<string, number>;
    clef_default?: ClefMetrics;
    clef_small?: ClefMetrics;
    pedalMarking?: Record<string, Record<string, number>>;
    digits?: Record<string, number>;
    articulation?: Record<string, Record<string, number>>;
    tremolo?: Record<string, Record<string, number>>;
    chordSymbol?: ChordSymbolMetrics;
    ornament?: Record<string, OrnamentMetrics>;
    noteHead?: NoteHeadMetrics;
    stringNumber?: StringNumberMetrics;
    tuplet?: TupletMetrics;
    glyphs: Record<string, {
        point?: number;
        shiftX?: number;
        shiftY?: number;
        scale?: number;
        [key: string]: {
            point?: number;
            shiftX?: number;
            shiftY?: number;
            scale?: number;
        } | number | undefined;
    }>;
}
export interface FontGlyph {
    x_min: number;
    x_max: number;
    y_min?: number;
    y_max?: number;
    ha: number;
    leftSideBearing?: number;
    advanceWidth?: number;
    o?: string;
    cached_outline?: number[];
}
export declare enum FontWeight {
    NORMAL = "normal",
    BOLD = "bold"
}
export declare enum FontStyle {
    NORMAL = "normal",
    ITALIC = "italic"
}
export declare class Font {
    static SANS_SERIF: string;
    static SERIF: string;
    static SIZE: number;
    static scaleToPxFrom: Record<string, number>;
    static convertSizeToPixelValue(fontSize?: string | number): number;
    static convertSizeToPointValue(fontSize?: string | number): number;
    static validate(f?: string | FontInfo, size?: string | number, weight?: string | number, style?: string): Required<FontInfo>;
    static fromCSSString(cssFontShorthand: string): Required<FontInfo>;
    static toCSSString(fontInfo?: FontInfo): string;
    static scaleSize<T extends number | string>(fontSize: T, scaleFactor: number): T;
    static isBold(weight?: string | number): boolean;
    static isItalic(style?: string): boolean;
    static WEB_FONT_HOST: string;
    static WEB_FONT_FILES: Record<string, string>;
    static loadWebFont(fontName: string, woffURL: string, includeWoff2?: boolean): Promise<FontFace>;
    static loadWebFonts(): Promise<void>;
    static load(fontName: string, data?: FontData, metrics?: FontMetrics): Font;
    protected name: string;
    protected data?: FontData;
    protected metrics?: FontMetrics;
    private constructor();
    getName(): string;
    getData(): FontData;
    getMetrics(): FontMetrics;
    setData(data: FontData): void;
    setMetrics(metrics: FontMetrics): void;
    hasData(): boolean;
    getResolution(): number;
    getGlyphs(): Record<string, FontGlyph>;
    lookupMetric(key: string, defaultValue?: Record<string, any> | number): any;
    toString(): string;
}
//# sourceMappingURL=font.d.ts.map