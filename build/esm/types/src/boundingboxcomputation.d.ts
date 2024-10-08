export declare class BoundingBoxComputation {
    protected x1: number;
    protected y1: number;
    protected x2: number;
    protected y2: number;
    getX1(): number;
    getY1(): number;
    width(): number;
    height(): number;
    addPoint(x: number, y: number): void;
    addX(x: number): void;
    addY(y: number): void;
    addQuadraticCurve(p0x: number, p0y: number, p1x: number, p1y: number, p2x: number, p2y: number): void;
    addBezierCurve(p0x: number, p0y: number, p1x: number, p1y: number, p2x: number, p2y: number, p3x: number, p3y: number): void;
}
//# sourceMappingURL=boundingboxcomputation.d.ts.map