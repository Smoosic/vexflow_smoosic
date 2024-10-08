import { FontInfo } from './font';
import { GroupAttributes, RenderContext, TextMeasure } from './rendercontext';
export type Attributes = {
    [name: string]: string | number | undefined;
    'font-family'?: string;
    'font-size'?: string | number;
    'font-style'?: string;
    'font-weight'?: string | number;
    scaleX?: number;
    scaleY?: number;
};
export interface State {
    state: Attributes;
    attributes: Attributes;
    shadow_attributes: Attributes;
    lineWidth: number;
}
declare class MeasureTextCache {
    protected txt?: SVGTextElement;
    protected cache: Record<string, Record<string, TextMeasure>>;
    lookup(text: string, svg: SVGSVGElement, attributes: Attributes): TextMeasure;
    measureImpl(text: string, svg: SVGSVGElement, attributes: Attributes): TextMeasure;
}
export declare class SVGContext extends RenderContext {
    protected static measureTextCache: MeasureTextCache;
    element: HTMLElement;
    svg: SVGSVGElement;
    width: number;
    height: number;
    path: string;
    pen: {
        x: number;
        y: number;
    };
    lineWidth: number;
    attributes: Attributes;
    shadow_attributes: Attributes;
    state: Attributes;
    state_stack: State[];
    parent: SVGGElement;
    groups: SVGGElement[];
    protected groupAttributes: Attributes[];
    protected precision: number;
    backgroundFillStyle: string;
    protected fontCSSString: string;
    constructor(element: HTMLElement);
    protected round(n: number): number;
    create(svgElementType: 'g'): SVGGElement;
    create(svgElementType: 'path'): SVGPathElement;
    create(svgElementType: 'rect'): SVGRectElement;
    create(svgElementType: 'svg'): SVGSVGElement;
    create(svgElementType: 'text'): SVGTextElement;
    create(svgElementType: string): SVGElement;
    openGroup(cls?: string, id?: string, attrs?: GroupAttributes): SVGGElement;
    closeGroup(): void;
    add(elem: SVGElement): void;
    setFillStyle(style: string): this;
    setBackgroundFillStyle(style: string): this;
    setStrokeStyle(style: string): this;
    setShadowColor(color: string): this;
    setShadowBlur(blur: number): this;
    setLineWidth(width: number): this;
    setLineDash(lineDash: number[]): this;
    setLineCap(capType: CanvasLineCap): this;
    resize(width: number, height: number): this;
    scale(x: number, y: number): this;
    setViewBox(viewBox_or_minX: string | number, minY?: number, width?: number, height?: number): void;
    applyAttributes(element: SVGElement, attributes: Attributes): SVGElement;
    clear(): void;
    rect(x: number, y: number, width: number, height: number, attributes?: Attributes): this;
    fillRect(x: number, y: number, width: number, height: number): this;
    clearRect(x: number, y: number, width: number, height: number): this;
    beginPath(): this;
    moveTo(x: number, y: number): this;
    lineTo(x: number, y: number): this;
    bezierCurveTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number): this;
    quadraticCurveTo(x1: number, y1: number, x: number, y: number): this;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise: boolean): this;
    closePath(): this;
    private getShadowStyle;
    fill(attributes?: Attributes): this;
    stroke(): this;
    measureText(text: string): TextMeasure;
    fillText(text: string, x: number, y: number): this;
    save(): this;
    restore(): this;
    set fillStyle(style: string | CanvasGradient | CanvasPattern);
    get fillStyle(): string | CanvasGradient | CanvasPattern;
    set strokeStyle(style: string | CanvasGradient | CanvasPattern);
    get strokeStyle(): string | CanvasGradient | CanvasPattern;
    setFont(f?: string | FontInfo, size?: string | number, weight?: string | number, style?: string): this;
    getFont(): string;
}
export {};
//# sourceMappingURL=svgcontext.d.ts.map