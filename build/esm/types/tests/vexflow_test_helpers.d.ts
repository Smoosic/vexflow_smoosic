/// <reference types="qunit" />
import { ContextBuilder, Factory, RenderContext } from '../src/index';
export interface TestOptions {
    elementId: string;
    params: any;
    assert: Assert;
    backend: number;
    contextBuilder?: ContextBuilder;
}
export type TestFunction = (options: TestOptions, contextBuilder: ContextBuilder) => void;
export type RunOptions = {
    jobs: number;
    job: number;
};
interface Test {
    Start(): void;
}
export declare class VexFlowTests {
    static tests: Test[];
    static register(test: Test): void;
    static parseJobOptions(runOptions: RunOptions | undefined): RunOptions;
    static run(runOptions: RunOptions | undefined): void;
    static shims: any;
    static RUN_CANVAS_TESTS: boolean;
    static RUN_SVG_TESTS: boolean;
    static RUN_NODE_TESTS: boolean;
    static NODE_IMAGEDIR: 'images';
    static Font: {
        size: number;
    };
    static FONT_STACKS: Record<string, string[]>;
    static set NODE_FONT_STACKS(fontStacks: string[]);
    private static NEXT_TEST_ID;
    static generateTestID(prefix: string): string;
    static runTests(name: string, testFunc: TestFunction, params?: any): void;
    static runTextTests(name: string, testFunc: TestFunction, params?: any): void;
    static createTest(elementId: string, testTitle: string, tagName: string, titleId?: string): HTMLElement;
    static makeFactory(options: TestOptions, width?: number, height?: number): Factory;
    static runCanvasTest(name: string, testFunc: TestFunction, params: any): void;
    static runCanvasText(name: string, testFunc: TestFunction, params: any): void;
    static runSVGTest(name: string, testFunc: TestFunction, params?: any): void;
    static runSVGText(name: string, testFunc: TestFunction, params?: any): void;
    static runNodeTest(name: string, testFunc: TestFunction, params: any): void;
    static runNodeTestHelper(fontName: string, element: HTMLElement): void;
    static runWithParams({ fontStacks, testFunc, name, params, backend, tagName, testType, helper }: any): void;
    static plotLegendForNoteWidth(ctx: RenderContext, x: number, y: number): void;
}
export declare const concat: (a: any[], b: any[]) => any[];
export declare const MAJOR_KEYS: string[];
export declare const MINOR_KEYS: string[];
export {};
//# sourceMappingURL=vexflow_test_helpers.d.ts.map