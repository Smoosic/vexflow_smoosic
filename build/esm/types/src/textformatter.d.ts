import { FontGlyph, FontInfo } from './font';
export interface TextFormatterInfo extends Record<string, unknown> {
    family: string;
    resolution?: number;
    glyphs?: Record<string, FontGlyph>;
    serifs: boolean;
    monospaced: boolean;
    italic: boolean;
    bold: boolean;
    maxSizeGlyph?: string;
    superscriptOffset?: number;
    subscriptOffset?: number;
    description: string;
}
export interface yExtent {
    yMin: number;
    yMax: number;
    height: number;
}
export declare class TextFormatter {
    static DEBUG: boolean;
    static getFontFamilies(): TextFormatterInfo[];
    static create(requestedFont?: FontInfo): TextFormatter;
    static getInfo(fontFamily: string): TextFormatterInfo | undefined;
    static registerInfo(info: TextFormatterInfo, overwrite?: boolean): void;
    protected family: string;
    protected size: number;
    protected resolution: number;
    protected glyphs: Record<string, FontGlyph>;
    protected description?: string;
    protected serifs: boolean;
    protected monospaced: boolean;
    protected italic: boolean;
    protected bold: boolean;
    protected superscriptOffset: number;
    protected subscriptOffset: number;
    protected maxSizeGlyph: string;
    protected cacheKey: string;
    private constructor();
    get localHeightCache(): Record<string, yExtent | undefined>;
    updateParams(params: TextFormatterInfo): void;
    updateCacheKey(): void;
    getGlyphMetrics(character: string): FontGlyph;
    get maxHeight(): number;
    getWidthForCharacterInEm(c: string): number;
    getYForCharacterInPx(c: string): yExtent;
    getYForStringInPx(str: string): yExtent;
    getWidthForTextInEm(text: string): number;
    getWidthForTextInPx(text: string): number;
    setFontSize(size: number): this;
    get fontSizeInPixels(): number;
    getResolution(): number;
}
//# sourceMappingURL=textformatter.d.ts.map