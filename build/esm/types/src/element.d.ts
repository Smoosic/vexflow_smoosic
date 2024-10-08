import { BoundingBox } from './boundingbox';
import { FontInfo } from './font';
import { Registry } from './registry';
import { RenderContext } from './rendercontext';
export interface ElementAttributes {
    [name: string]: string | undefined;
    id: string;
    type: string;
    class: string;
}
export interface ElementStyle {
    shadowColor?: string;
    shadowBlur?: number;
    fillStyle?: string;
    strokeStyle?: string;
    lineWidth?: number;
}
export declare abstract class Element {
    static get CATEGORY(): string;
    protected children: Element[];
    protected static ID: number;
    static newID(): string;
    static TEXT_FONT: Required<FontInfo>;
    private context?;
    protected rendered: boolean;
    protected style?: ElementStyle;
    private attrs;
    protected boundingBox?: BoundingBox;
    protected registry?: Registry;
    protected textFont?: Required<FontInfo>;
    constructor();
    addChildElement(child: Element): this;
    getCategory(): string;
    setStyle(style: ElementStyle | undefined): this;
    setGroupStyle(style: ElementStyle): this;
    getStyle(): ElementStyle | undefined;
    applyStyle(context?: RenderContext | undefined, style?: ElementStyle | undefined): this;
    restoreStyle(context?: RenderContext | undefined, style?: ElementStyle | undefined): this;
    drawWithStyle(): void;
    abstract draw(...args: any[]): void;
    hasClass(className: string): boolean;
    addClass(className: string): this;
    removeClass(className: string): this;
    onRegister(registry: Registry): this;
    isRendered(): boolean;
    setRendered(rendered?: boolean): this;
    getAttributes(): ElementAttributes;
    getAttribute(name: string): any;
    getSVGElement(suffix?: string): SVGElement | undefined;
    setAttribute(name: string, value: string | undefined): this;
    getBoundingBox(): BoundingBox | undefined;
    getContext(): RenderContext | undefined;
    setContext(context?: RenderContext): this;
    checkContext(): RenderContext;
    set font(f: string);
    get font(): string;
    setFont(font?: string | FontInfo, size?: string | number, weight?: string | number, style?: string): this;
    getFont(): string;
    resetFont(): void;
    get fontInfo(): Required<FontInfo>;
    set fontInfo(fontInfo: FontInfo);
    setFontSize(size?: string | number): this;
    getFontSize(): string;
    set fontSize(size: string | number);
    get fontSize(): string;
    get fontSizeInPoints(): number;
    get fontSizeInPixels(): number;
    get fontStyle(): string;
    set fontStyle(style: string);
    get fontWeight(): string;
    set fontWeight(weight: string | number);
}
//# sourceMappingURL=element.d.ts.map