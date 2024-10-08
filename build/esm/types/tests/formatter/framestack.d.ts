export class FrameStack {
    constructor(parentEl: any, numFrames: any, params: any);
    parentEl: any;
    numFrames: any;
    options: any;
    frames: HTMLDivElement[];
    currentFrame: number;
    frameID(i: any): string;
    install(): void;
    get(i: any): HTMLDivElement;
    show(i: any): void;
    start(params: any): void;
    animationTimer: NodeJS.Timeout | undefined;
    stop(): void;
}
//# sourceMappingURL=framestack.d.ts.map