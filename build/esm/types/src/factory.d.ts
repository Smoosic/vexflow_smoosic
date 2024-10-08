import { Accidental } from './accidental';
import { Annotation, AnnotationHorizontalJustify, AnnotationVerticalJustify } from './annotation';
import { Articulation } from './articulation';
import { BarNote } from './barnote';
import { Beam, PartialBeamDirection } from './beam';
import { ChordSymbol } from './chordsymbol';
import { ClefNote } from './clefnote';
import { Curve, CurveOptions } from './curve';
import { EasyScore, EasyScoreOptions } from './easyscore';
import { Element } from './element';
import { FontInfo } from './font';
import { Formatter, FormatterOptions } from './formatter';
import { FretHandFinger } from './frethandfinger';
import { GhostNote } from './ghostnote';
import { Glyph } from './glyph';
import { GlyphNote, GlyphNoteOptions } from './glyphnote';
import { GraceNote, GraceNoteStruct } from './gracenote';
import { GraceNoteGroup } from './gracenotegroup';
import { KeySigNote } from './keysignote';
import { ModifierContext } from './modifiercontext';
import { MultiMeasureRest, MultimeasureRestRenderOptions } from './multimeasurerest';
import { Note, NoteStruct } from './note';
import { NoteSubGroup } from './notesubgroup';
import { Ornament } from './ornament';
import { PedalMarking } from './pedalmarking';
import { RenderContext } from './rendercontext';
import { RepeatNote } from './repeatnote';
import { Stave, StaveOptions } from './stave';
import { BarlineType } from './stavebarline';
import { StaveConnector, StaveConnectorType } from './staveconnector';
import { StaveLine } from './staveline';
import { StaveNote, StaveNoteStruct } from './stavenote';
import { StaveTie } from './stavetie';
import { StemmableNote } from './stemmablenote';
import { StringNumber } from './stringnumber';
import { System, SystemOptions } from './system';
import { TabNote, TabNoteStruct } from './tabnote';
import { TabStave } from './tabstave';
import { TextBracket } from './textbracket';
import { TextDynamics } from './textdynamics';
import { TextNote, TextNoteStruct } from './textnote';
import { TickContext } from './tickcontext';
import { TimeSigNote } from './timesignote';
import { Tuplet, TupletOptions } from './tuplet';
import { VibratoBracket } from './vibratobracket';
import { Voice, VoiceTime } from './voice';
export interface FactoryOptions {
    stave?: {
        space: number;
    };
    renderer?: {
        elementId: string | null;
        backend?: number;
        width: number;
        height: number;
        background?: string;
    };
    font?: FontInfo;
}
export declare class Factory {
    static DEBUG: boolean;
    static TEXT_FONT: Required<FontInfo>;
    static newFromElementId(elementId: string | null, width?: number, height?: number): Factory;
    protected options: Required<FactoryOptions>;
    protected stave?: Stave;
    protected context: RenderContext;
    protected staves: Stave[];
    protected voices: Voice[];
    protected renderQ: Element[];
    protected systems: System[];
    constructor(options?: FactoryOptions);
    reset(): void;
    setOptions(options?: FactoryOptions): void;
    initRenderer(): void;
    getContext(): RenderContext;
    setContext(context: RenderContext): this;
    getStave(): Stave | undefined;
    getVoices(): Voice[];
    Stave(params?: {
        x?: number;
        y?: number;
        width?: number;
        options?: StaveOptions;
    }): Stave;
    TabStave(params?: {
        x?: number;
        y?: number;
        width?: number;
        options?: StaveOptions;
    }): TabStave;
    StaveNote(noteStruct: StaveNoteStruct): StaveNote;
    GlyphNote(glyph: Glyph, noteStruct: NoteStruct, options?: GlyphNoteOptions): GlyphNote;
    RepeatNote(type: string, noteStruct?: NoteStruct, options?: GlyphNoteOptions): RepeatNote;
    GhostNote(noteStruct: string | NoteStruct): GhostNote;
    TextNote(noteStruct: TextNoteStruct): TextNote;
    BarNote(params?: {
        type?: BarlineType | string;
    }): BarNote;
    ClefNote(params?: {
        type?: string;
        options?: {
            size?: string;
            annotation?: string;
        };
    }): ClefNote;
    TimeSigNote(params?: {
        time?: string;
    }): TimeSigNote;
    KeySigNote(params: {
        key: string;
        cancelKey?: string;
        alterKey?: string[];
    }): KeySigNote;
    TabNote(noteStruct: TabNoteStruct): TabNote;
    GraceNote(noteStruct: GraceNoteStruct): GraceNote;
    GraceNoteGroup(params: {
        notes: StemmableNote[];
        slur?: boolean;
    }): GraceNoteGroup;
    Accidental(params: {
        type: string;
    }): Accidental;
    Annotation(params?: {
        text?: string;
        hJustify?: string | AnnotationHorizontalJustify;
        vJustify?: string | AnnotationVerticalJustify;
        font?: FontInfo;
    }): Annotation;
    ChordSymbol(params?: {
        vJustify?: string;
        hJustify?: string;
        kerning?: boolean;
        reportWidth?: boolean;
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: string;
    }): ChordSymbol;
    Articulation(params?: {
        betweenLines?: boolean;
        type?: string;
        position?: string | number;
    }): Articulation;
    Ornament(type: string, params?: {
        position?: string | number;
        upperAccidental?: string;
        lowerAccidental?: string;
        delayed?: boolean;
    }): Ornament;
    TextDynamics(params?: {
        text?: string;
        duration?: string;
        dots?: number;
        line?: number;
    }): TextDynamics;
    Fingering(params: {
        number?: string;
        position?: string;
    }): FretHandFinger;
    StringNumber(params: {
        number: string;
        position: string;
    }, drawCircle?: boolean): StringNumber;
    TickContext(): TickContext;
    ModifierContext(): ModifierContext;
    MultiMeasureRest(params: MultimeasureRestRenderOptions): MultiMeasureRest;
    Voice(params?: {
        time?: VoiceTime | string;
    }): Voice;
    StaveConnector(params: {
        top_stave: Stave;
        bottom_stave: Stave;
        type: StaveConnectorType;
    }): StaveConnector;
    Formatter(options?: FormatterOptions): Formatter;
    Tuplet(params?: {
        notes?: Note[];
        options?: TupletOptions;
    }): Tuplet;
    Beam(params: {
        notes: StemmableNote[];
        options?: {
            autoStem?: boolean;
            secondaryBeamBreaks?: number[];
            partialBeamDirections?: {
                [noteIndex: number]: PartialBeamDirection;
            };
        };
    }): Beam;
    Curve(params: {
        from: Note;
        to: Note;
        options: CurveOptions;
    }): Curve;
    StaveTie(params: {
        from?: Note | null;
        to?: Note | null;
        first_indices?: number[];
        last_indices?: number[];
        text?: string;
        options?: {
            direction?: number;
        };
    }): StaveTie;
    StaveLine(params: {
        from: StaveNote;
        to: StaveNote;
        first_indices: number[];
        last_indices: number[];
        options?: {
            text?: string;
            font?: FontInfo;
        };
    }): StaveLine;
    VibratoBracket(params: {
        from: Note | null;
        to: Note | null;
        options: {
            harsh?: boolean;
            line?: number;
        };
    }): VibratoBracket;
    TextBracket(params: {
        from: Note;
        to: Note;
        text: string;
        options: {
            superscript: string;
            position: string;
            line?: number;
            font?: FontInfo;
        };
    }): TextBracket;
    System(params?: SystemOptions): System;
    EasyScore(options?: EasyScoreOptions): EasyScore;
    PedalMarking(params?: {
        notes?: StaveNote[];
        options?: {
            style: string;
        };
    }): PedalMarking;
    NoteSubGroup(params?: {
        notes?: Note[];
    }): NoteSubGroup;
    draw(): void;
}
//# sourceMappingURL=factory.d.ts.map