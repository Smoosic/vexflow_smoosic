import { FontInfo } from './font';
import { GroupAttributes, RenderContext, TextMeasure } from './rendercontext';
interface OffscreenCanvas extends EventTarget {
    width: number;
    height: number;
}
interface OffscreenCanvasRenderingContext2D extends CanvasState, CanvasTransform, CanvasCompositing, CanvasImageSmoothing, CanvasFillStrokeStyles, CanvasShadowStyles, CanvasFilters, CanvasRect, CanvasDrawPath, CanvasText, CanvasDrawImage, CanvasImageData, CanvasPathDrawingStyles, CanvasTextDrawingStyles, CanvasPath {
    readonly canvas: OffscreenCanvas;
}
export declare class CanvasContext extends RenderContext {
    context2D: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D;
    canvas: HTMLCanvasElement | OffscreenCanvas | {
        width: number;
        height: number;
    };
    textHeight: number;
    static get WIDTH(): number;
    static get HEIGHT(): number;
    static get CANVAS_BROWSER_SIZE_LIMIT(): number;
    static sanitizeCanvasDims(width: number, height: number): [number, number];
    constructor(context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D);
    clear(): void;
    openGroup(cls?: string, id?: string, attrs?: GroupAttributes): any;
    closeGroup(): void;
    add(child: any): void;
    setFillStyle(style: string): this;
    setBackgroundFillStyle(style: string): this;
    setStrokeStyle(style: string): this;
    setShadowColor(color: string): this;
    setShadowBlur(blur: number): this;
    setLineWidth(width: number): this;
    setLineCap(capType: CanvasLineCap): this;
    setLineDash(dash: number[]): this;
    scale(x: number, y: number): this;
    resize(width: number, height: number): this;
    rect(x: number, y: number, width: number, height: number): this;
    fillRect(x: number, y: number, width: number, height: number): this;
    clearRect(x: number, y: number, width: number, height: number): this;
    beginPath(): this;
    moveTo(x: number, y: number): this;
    lineTo(x: number, y: number): this;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): this;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): this;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise: boolean): this;
    fill(): this;
    stroke(): this;
    closePath(): this;
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
//# sourceMappingURL=canvascontext.d.ts.map