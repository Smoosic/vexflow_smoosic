import { Fraction } from '../src/fraction';
import { NoteMetrics } from '../src/note';
import { Stave } from '../src/stave';
import { Tickable } from '../src/tickable';
import { TickContext } from '../src/tickcontext';
import { Voice } from '../src/voice';
declare class MockTickable extends Tickable {
    tickContext?: TickContext;
    ticks: Fraction;
    voice?: Voice;
    stave?: Stave;
    width: number;
    ignore_ticks: boolean;
    init(): void;
    getX(): number;
    getIntrinsicTicks(): number;
    getTicks(): Fraction;
    setTicks(t: number): this;
    getMetrics(): NoteMetrics;
    getWidth(): number;
    setWidth(w: number): this;
    setVoice(v: Voice): this;
    setStave(stave: Stave): this;
    getStave(): Stave | undefined;
    setTickContext(tc: TickContext): this;
    setIgnoreTicks(flag: boolean): this;
    shouldIgnoreTicks(): boolean;
    preFormat(): void;
    draw(...args: any[]): void;
}
export { MockTickable };
//# sourceMappingURL=mocks.d.ts.map