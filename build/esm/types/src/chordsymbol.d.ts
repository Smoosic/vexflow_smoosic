import { FontInfo } from './font';
import { Glyph } from './glyph';
import { Modifier } from './modifier';
import { ModifierContextState } from './modifiercontext';
import { TextFormatter } from './textformatter';
export interface ChordSymbolBlock {
    text: string;
    symbolType: SymbolTypes;
    symbolModifier: SymbolModifiers;
    xShift: number;
    yShift: number;
    vAlign: boolean;
    width: number;
    glyph?: Glyph;
}
export interface ChordSymbolGlyphMetrics {
    scale: number;
    leftSideBearing: number;
    advanceWidth: number;
    yOffset: number;
}
export interface ChordSymbolMetrics {
    global: {
        superscriptOffset: number;
        subscriptOffset: number;
        kerningOffset: number;
        lowerKerningText: string[];
        upperKerningText: string[];
        spacing: number;
        superSubRatio: number;
    };
    glyphs: Record<string, ChordSymbolGlyphMetrics>;
}
export declare enum ChordSymbolHorizontalJustify {
    LEFT = 1,
    CENTER = 2,
    RIGHT = 3,
    CENTER_STEM = 4
}
export declare enum ChordSymbolVerticalJustify {
    TOP = 1,
    BOTTOM = 2
}
export declare enum SymbolTypes {
    GLYPH = 1,
    TEXT = 2,
    LINE = 3
}
export declare enum SymbolModifiers {
    NONE = 1,
    SUBSCRIPT = 2,
    SUPERSCRIPT = 3
}
export declare class ChordSymbol extends Modifier {
    static DEBUG: boolean;
    static get CATEGORY(): string;
    static readonly HorizontalJustify: typeof ChordSymbolHorizontalJustify;
    static readonly HorizontalJustifyString: Record<string, ChordSymbolHorizontalJustify>;
    static readonly VerticalJustify: typeof ChordSymbolVerticalJustify;
    static readonly VerticalJustifyString: Record<string, ChordSymbolVerticalJustify>;
    static get superSubRatio(): number;
    static set NO_TEXT_FORMAT(val: boolean);
    static get NO_TEXT_FORMAT(): boolean;
    static getMetricForGlyph(glyphCode: string): ChordSymbolGlyphMetrics | undefined;
    static get engravingFontResolution(): number;
    static get spacingBetweenBlocks(): number;
    static getWidthForGlyph(glyph: Glyph): number;
    static getYShiftForGlyph(glyph: Glyph): number;
    static getXShiftForGlyph(glyph: Glyph): number;
    static get superscriptOffset(): number;
    static get subscriptOffset(): number;
    static get kerningOffset(): number;
    static readonly glyphs: Record<string, {
        code: string;
    }>;
    static readonly symbolTypes: typeof SymbolTypes;
    static readonly symbolModifiers: typeof SymbolModifiers;
    static get metrics(): ChordSymbolMetrics;
    static get lowerKerningText(): string[];
    static get upperKerningText(): string[];
    static isSuperscript(block: ChordSymbolBlock): boolean;
    static isSubscript(block: ChordSymbolBlock): boolean;
    static get minPadding(): number;
    static format(symbols: ChordSymbol[], state: ModifierContextState): boolean;
    protected static noFormat: boolean;
    protected symbolBlocks: ChordSymbolBlock[];
    protected horizontal: number;
    protected vertical: number;
    protected useKerning: boolean;
    protected reportWidth: boolean;
    protected textFormatter: TextFormatter;
    constructor();
    static get TEXT_FONT(): Required<FontInfo>;
    get superscriptOffset(): number;
    get subscriptOffset(): number;
    setReportWidth(value: boolean): this;
    getReportWidth(): boolean;
    updateOverBarAdjustments(): void;
    updateKerningAdjustments(): void;
    getKerningAdjustment(j: number): number;
    getSymbolBlock(params?: any): ChordSymbolBlock;
    addSymbolBlock(parameters: any): this;
    addText(text: string, parameters?: any): this;
    addTextSuperscript(text: string): this;
    addTextSubscript(text: string): this;
    addGlyphSuperscript(glyph: string): this;
    addGlyph(glyph: string, params?: any): this;
    addGlyphOrText(text: string, params?: any): this;
    addLine(width: number, params?: any): this;
    setFont(f?: string | FontInfo, size?: string | number, weight?: string | number, style?: string): this;
    setEnableKerning(val: boolean): this;
    setVertical(vj: ChordSymbolVerticalJustify | string | number): this;
    getVertical(): number;
    setHorizontal(hj: ChordSymbolHorizontalJustify | string | number): this;
    getHorizontal(): number;
    getWidth(): number;
    getYOffsetForText(text: string): number;
    draw(): void;
}
//# sourceMappingURL=chordsymbol.d.ts.map