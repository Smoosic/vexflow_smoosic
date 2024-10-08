export interface Bounds {
    x: number;
    y: number;
    w: number;
    h: number;
}
export declare class BoundingBox implements Bounds {
    x: number;
    y: number;
    w: number;
    h: number;
    static copy(that: BoundingBox): BoundingBox;
    constructor(x: number, y: number, w: number, h: number);
    getX(): number;
    getY(): number;
    getW(): number;
    getH(): number;
    setX(x: number): this;
    setY(y: number): this;
    setW(w: number): this;
    setH(h: number): this;
    move(x: number, y: number): this;
    clone(): BoundingBox;
    mergeWith(boundingBox: BoundingBox): this;
}
//# sourceMappingURL=boundingbox.d.ts.map