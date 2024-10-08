import { FontInfo } from './font';
import { Modifier } from './modifier';
import { ModifierContextState } from './modifiercontext';
export declare enum AnnotationHorizontalJustify {
    LEFT = 1,
    CENTER = 2,
    RIGHT = 3,
    CENTER_STEM = 4
}
export declare enum AnnotationVerticalJustify {
    TOP = 1,
    CENTER = 2,
    BOTTOM = 3,
    CENTER_STEM = 4
}
export declare class Annotation extends Modifier {
    static DEBUG: boolean;
    static get CATEGORY(): string;
    static TEXT_FONT: Required<FontInfo>;
    static HorizontalJustify: typeof AnnotationHorizontalJustify;
    static HorizontalJustifyString: Record<string, number>;
    static VerticalJustify: typeof AnnotationVerticalJustify;
    static VerticalJustifyString: Record<string, number>;
    static get minAnnotationPadding(): number;
    static format(annotations: Annotation[], state: ModifierContextState): boolean;
    protected horizontalJustification: AnnotationHorizontalJustify;
    protected verticalJustification: AnnotationVerticalJustify;
    protected text: string;
    constructor(text: string);
    setVerticalJustification(just: string | AnnotationVerticalJustify): this;
    getJustification(): AnnotationHorizontalJustify;
    setJustification(just: string | AnnotationHorizontalJustify): this;
    draw(): void;
}
//# sourceMappingURL=annotation.d.ts.map