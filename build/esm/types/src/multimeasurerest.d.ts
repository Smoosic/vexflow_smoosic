import { Element } from './element';
import { RenderContext } from './rendercontext';
import { Stave } from './stave';
export interface MultimeasureRestRenderOptions {
    number_of_measures: number;
    use_symbols?: boolean;
    symbol_spacing?: number;
    show_number?: boolean;
    number_line?: number;
    number_glyph_point?: number;
    padding_left?: number;
    padding_right?: number;
    line?: number;
    spacing_between_lines_px?: number;
    semibreve_rest_glyph_scale?: number;
    line_thickness?: number;
    serif_thickness?: number;
}
export declare class MultiMeasureRest extends Element {
    static get CATEGORY(): string;
    render_options: Required<MultimeasureRestRenderOptions>;
    protected xs: {
        left: number;
        right: number;
    };
    protected number_of_measures: number;
    protected stave?: Stave;
    private hasPaddingLeft;
    private hasPaddingRight;
    private hasLineThickness;
    private hasSymbolSpacing;
    constructor(number_of_measures: number, options: MultimeasureRestRenderOptions);
    getXs(): {
        left: number;
        right: number;
    };
    setStave(stave: Stave): this;
    getStave(): Stave | undefined;
    checkStave(): Stave;
    drawLine(stave: Stave, ctx: RenderContext, left: number, right: number, spacingBetweenLines: number): void;
    drawSymbols(stave: Stave, ctx: RenderContext, left: number, right: number, spacingBetweenLines: number): void;
    draw(): void;
}
//# sourceMappingURL=multimeasurerest.d.ts.map