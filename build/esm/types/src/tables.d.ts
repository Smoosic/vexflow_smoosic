import { ArticulationStruct } from './articulation';
import { Font } from './font';
import { Fraction } from './fraction';
import { GlyphProps } from './glyph';
import { KeyProps } from './note';
export declare class Tables {
    static UNISON: boolean;
    static SOFTMAX_FACTOR: number;
    static STEM_WIDTH: number;
    static STEM_HEIGHT: number;
    static STAVE_LINE_THICKNESS: number;
    static RENDER_PRECISION_PLACES: number;
    static RESOLUTION: number;
    static MUSIC_FONT_STACK: Font[];
    static currentMusicFont(): Font;
    static NOTATION_FONT_SCALE: number;
    static TABLATURE_FONT_SCALE: number;
    static SLASH_NOTEHEAD_WIDTH: number;
    static STAVE_LINE_DISTANCE: number;
    static TEXT_HEIGHT_OFFSET_HACK: number;
    static clefProperties(clef: string): {
        line_shift: number;
    };
    static keyProperties(keyOctaveGlyph: string, clef?: string, params?: {
        octave_shift?: number;
    }): KeyProps;
    static integerToNote(integer?: number): string;
    static tabToGlyphProps(fret: string, scale?: number): GlyphProps;
    static textWidth(text: string): number;
    static articulationCodes(artic: string): ArticulationStruct;
    static accidentalMap: Record<string, {
        code: string;
        parenRightPaddingAdjustment: number;
    }>;
    static accidentalCodes(acc: string): {
        code: string;
        parenRightPaddingAdjustment: number;
    };
    static accidentalColumnsTable: Record<number, {
        [name: string]: number[];
    }>;
    static ornamentCodes(acc: string): {
        code: string;
    };
    static keySignature(spec: string): {
        type: string;
        line: number;
    }[];
    static getKeySignatures(): Record<string, {
        acc?: string;
        num: number;
    }>;
    static hasKeySignature(spec: string): boolean;
    static unicode: {
        sharp: string;
        flat: string;
        natural: string;
        triangle: string;
        'o-with-slash': string;
        degrees: string;
        circle: string;
    };
    static sanitizeDuration(duration: string): string;
    static durationToFraction(duration: string): Fraction;
    static durationToNumber(duration: string): number;
    static durationToTicks(duration: string): number;
    static codeNoteHead(type: string, duration: string): string;
    static getGlyphProps(duration: string, type?: string): GlyphProps;
    static validTypes: Record<string, {
        name: string;
    }>;
    static TIME4_4: {
        num_beats: number;
        beat_value: number;
        resolution: number;
    };
}
//# sourceMappingURL=tables.d.ts.map