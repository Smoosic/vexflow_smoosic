export interface NoteAccidental {
    note: number;
    accidental: AccidentalValue;
}
export interface NoteParts {
    root: string;
    accidental: string;
}
export interface KeyParts {
    root: string;
    accidental: string;
    type: string;
}
export type KeyValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type RootValue = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type AccidentalValue = -2 | -1 | 0 | 1 | 2;
export interface Key {
    root_index: RootValue;
    int_val: KeyValue;
}
export declare class Music {
    static get NUM_TONES(): number;
    static get roots(): string[];
    static get root_values(): KeyValue[];
    static get root_indices(): Record<string, RootValue>;
    static get canonical_notes(): string[];
    static get diatonic_intervals(): string[];
    static get diatonic_accidentals(): Record<string, NoteAccidental>;
    static get intervals(): Record<string, number>;
    static get scales(): Record<string, number[]>;
    static get scaleTypes(): Record<string, number[]>;
    static get accidentals(): string[];
    static get noteValues(): Record<string, Key>;
    protected isValidNoteValue(note: number): boolean;
    protected isValidIntervalValue(interval: number): boolean;
    getNoteParts(noteString: string): NoteParts;
    getKeyParts(keyString: string): KeyParts;
    getNoteValue(noteString: string): number;
    getIntervalValue(intervalString: string): number;
    getCanonicalNoteName(noteValue: number): string;
    getCanonicalIntervalName(intervalValue: number): string;
    getRelativeNoteValue(noteValue: number, intervalValue: number, direction?: number): number;
    getRelativeNoteName(root: string, noteValue: number): string;
    getScaleTones(key: number, intervals: number[]): number[];
    getIntervalBetween(note1: number, note2: number, direction?: number): number;
    createScaleMap(keySignature: string): Record<string, string>;
}
//# sourceMappingURL=music.d.ts.map