import { StaveTie, TieNotes } from './stavetie';
export declare class TabTie extends StaveTie {
    static get CATEGORY(): string;
    static createHammeron(notes: TieNotes): TabTie;
    static createPulloff(notes: TieNotes): TabTie;
    constructor(notes: TieNotes, text?: string);
}
//# sourceMappingURL=tabtie.d.ts.map