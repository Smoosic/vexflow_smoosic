import { FontInfo } from './font';
import { TieNotes } from './stavetie';
import { TabTie } from './tabtie';
export declare class TabSlide extends TabTie {
    static get CATEGORY(): string;
    static TEXT_FONT: Required<FontInfo>;
    static get SLIDE_UP(): number;
    static get SLIDE_DOWN(): number;
    static createSlideUp(notes: TieNotes): TabSlide;
    static createSlideDown(notes: TieNotes): TabSlide;
    constructor(notes: TieNotes, direction?: number);
    renderTie(params: {
        direction: number;
        first_x_px: number;
        last_x_px: number;
        last_ys: number[];
        first_ys: number[];
    }): void;
}
//# sourceMappingURL=tabslide.d.ts.map