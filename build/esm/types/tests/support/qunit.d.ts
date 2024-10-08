export var urlParams: {};
export var isLocal: boolean;
export var version: string;
export function reset(): void;
export function pushFailure(...args: any[]): any;
export namespace assert {
    function expect(asserts: any, ...args: any[]): any;
    function async(): () => void;
    function push(...args: any[]): any;
    function ok(result: any, message: any): void;
    function notOk(result: any, message: any): void;
    function equal(actual: any, expected: any, message: any): void;
    function notEqual(actual: any, expected: any, message: any): void;
    function propEqual(actual: any, expected: any, message: any): void;
    function notPropEqual(actual: any, expected: any, message: any): void;
    function deepEqual(actual: any, expected: any, message: any): void;
    function notDeepEqual(actual: any, expected: any, message: any): void;
    function strictEqual(actual: any, expected: any, message: any): void;
    function notStrictEqual(actual: any, expected: any, message: any): void;
    function throws(block: any, expected: any, message: any): void;
}
export function equiv(...args: any[]): any;
export namespace dump {
    export function parse(obj: any, objType: any, stack: any): any;
    export function typeOf(obj: any): string;
    export function separator(): " " | "\n" | "<br />" | "&#160;";
    export function indent(extra: any): string;
    export function up(a: any): void;
    export function down(a: any): void;
    export function setParser(name: any, parser: any): void;
    export { quote };
    export { literal };
    export { join };
    export let depth: number;
    export let maxDepth: any;
    export namespace parsers {
        export let window: string;
        export let document: string;
        export function error(error: any): string;
        export let unknown: string;
        let _null: string;
        export { _null as null };
        export let undefined: string;
        export function _function(fn: any): any;
        export { _function as function };
        export { array };
        export { array as nodelist };
        export { array as arguments };
        export function object(map: any, stack: any): any;
        export function node(node: any): string;
        export function functionArgs(fn: any): string;
        export { quote as key };
        export let functionCode: string;
        export { quote as attribute };
        export { quote as string };
        export { quote as date };
        export { literal as regexp };
        export { literal as number };
        export { literal as boolean };
    }
    export let HTML: boolean;
    export let indentChar: string;
    export let multiline: boolean;
}
export function diff(o: any, n: any): string;
declare function quote(str: any): string;
declare function literal(o: any): string;
declare function join(pre: any, arr: any, post: any): any;
declare function array(arr: any, stack: any): any;
export { dump as jsDump, QUnit };
//# sourceMappingURL=qunit.d.ts.map