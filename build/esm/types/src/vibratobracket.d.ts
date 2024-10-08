import { Element } from './element';
import { Note } from './note';
export declare class VibratoBracket extends Element {
    static DEBUG: boolean;
    static get CATEGORY(): string;
    protected line: number;
    protected start?: Note;
    protected stop?: Note;
    render_options: {
        vibrato_width: number;
        wave_height: number;
        wave_girth: number;
        harsh: boolean;
        wave_width: number;
    };
    constructor(bracket_data: {
        stop?: Note | null;
        start?: Note | null;
    });
    setLine(line: number): this;
    setHarsh(harsh: boolean): this;
    draw(): void;
}
//# sourceMappingURL=vibratobracket.d.ts.map