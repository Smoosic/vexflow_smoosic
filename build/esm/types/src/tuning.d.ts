export declare class Tuning {
    protected tuningValues: number[];
    static get names(): Record<string, string>;
    constructor(tuningString?: string);
    noteToInteger(noteString: string): number;
    setTuning(tuningString: string): void;
    getValueForString(stringNum: string | number): number;
    getValueForFret(fretNum: string | number, stringNum: string | number): number;
    getNoteForFret(fretNum: string | number, stringNum: string | number): string;
}
//# sourceMappingURL=tuning.d.ts.map