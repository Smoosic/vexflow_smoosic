export declare const CommonMetrics: {
    smufl: boolean;
    stave: {
        padding: number;
        endPaddingMax: number;
        endPaddingMin: number;
        unalignedNotePadding: number;
    };
    accidental: {
        noteheadAccidentalPadding: number;
        leftPadding: number;
        accidentalSpacing: number;
    };
    chordSymbol: {
        global: {
            superscriptOffset: number;
            subscriptOffset: number;
            kerningOffset: number;
            lowerKerningText: string[];
            upperKerningText: string[];
            spacing: number;
            superSubRatio: number;
        };
        glyphs: {
            csymDiminished: {
                scale: number;
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymHalfDiminished: {
                scale: number;
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymAugmented: {
                scale: number;
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymParensLeftTall: {
                scale: number;
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymParensRightTall: {
                scale: number;
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymBracketLeftTall: {
                scale: number;
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymBracketRightTall: {
                scale: number;
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymParensLeftVeryTall: {
                scale: number;
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymParensRightVeryTall: {
                scale: number;
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymDiagonalArrangementSlash: {
                scale: number;
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymMinor: {
                scale: number;
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymMajorSeventh: {
                scale: number;
                leftSideBearing: number;
                yOffset: number;
                advanceWidth: number;
            };
            accidentalSharp: {
                scale: number;
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            accidentalFlat: {
                scale: number;
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
        };
    };
    clef_default: {
        width: number;
        annotations: {
            '8va': {
                treble: {
                    line: number;
                    shiftX: number;
                };
            };
            '8vb': {
                treble: {
                    line: number;
                    shiftX: number;
                };
                bass: {
                    line: number;
                    shiftX: number;
                };
            };
        };
    };
    clef_small: {
        width: number;
        annotations: {
            '8va': {
                treble: {
                    line: number;
                    shiftX: number;
                };
            };
            '8vb': {
                treble: {
                    line: number;
                    shiftX: number;
                };
                bass: {
                    line: number;
                    shiftX: number;
                };
            };
        };
    };
    ornament: {
        ornamentShortTrill: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        ornamentMordent: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        ornamentTurn: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        ornamentTurnSlash: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        ornamentTrill: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        ornamentPrecompSlideTrillDAnglebert: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        ornamentPrecompDoubleCadenceUpperPrefix: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        ornamentPrecompTrillSuffixDandrieu: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        ornamentPrecompTrillLowerSuffix: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        ornamentPrecompSlideTrillBach: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        ornamentPrecompDoubleCadenceUpperPrefixTurn: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        ornamentPrecompAppoggTrill: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        ornamentTremblement: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassScoop: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassDoitMedium: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassFallLipShort: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassLiftMedium: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassFallRoughMedium: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassBend: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassMuteClosed: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassMuteOpen: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassFlip: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassJazzTurn: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassSmear: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
    };
    parenthesis: {
        default: {
            width: number;
        };
        gracenote: {
            width: number;
        };
    };
    pedalMarking: {};
    digits: {
        shiftLine: number;
        shiftY: number;
    };
    articulation: {
        articStaccatissimoAbove: {
            padding: number;
        };
        articStaccatissimoBelow: {
            padding: number;
        };
    };
    tremolo: {
        default: {
            spacing: number;
            offsetYStemUp: number;
            offsetYStemDown: number;
            offsetXStemUp: number;
            offsetXStemDown: number;
        };
        grace: {
            spacing: number;
            offsetYStemUp: number;
            offsetYStemDown: number;
            offsetXStemUp: number;
            offsetXStemDown: number;
        };
    };
    staveRepetition: {
        symbolText: {
            offsetX: number;
            offsetY: number;
            spacing: number;
        };
        coda: {
            offsetY: number;
        };
        segno: {
            offsetY: number;
        };
    };
    noteHead: {
        minPadding: number;
    };
    stem: {
        heightAdjustmentForFlag: number;
        noteHead: {
            noteheadTriangleUpHalf: {
                offsetYBaseStemUp: number;
                offsetYBaseStemDown: number;
            };
            noteheadTriangleUpBlack: {
                offsetYBaseStemUp: number;
                offsetYBaseStemDown: number;
            };
            noteheadTriangleUpWhole: {
                offsetYBaseStemUp: number;
                offsetYBaseStemDown: number;
            };
            noteheadXHalf: {
                offsetYBaseStemUp: number;
                offsetYBaseStemDown: number;
            };
            noteheadXBlack: {
                offsetYBaseStemUp: number;
                offsetYBaseStemDown: number;
            };
            noteheadXWhole: {
                offsetYBaseStemUp: number;
                offsetYBaseStemDown: number;
            };
            noteheadHalf: {
                offsetYBaseStemUp: number;
                offsetYBaseStemDown: number;
            };
            noteheadBlack: {
                offsetYBaseStemUp: number;
                offsetYBaseStemDown: number;
            };
            noteheadSquareWhite: {
                offsetYBaseStemDown: number;
                offsetYBaseStemUp: number;
            };
        };
    };
    stringNumber: {
        verticalPadding: number;
        stemPadding: number;
        leftPadding: number;
        rightPadding: number;
    };
    tuplet: {
        noteHeadOffset: number;
        stemOffset: number;
        bottomLine: number;
        topModifierOffset: number;
    };
    glyphs: {
        coda: {
            point: number;
            shiftX: number;
            shiftY: number;
        };
        segno: {
            shiftX: number;
        };
        flag: {
            shiftX: number;
            staveTempo: {
                shiftX: number;
            };
        };
        clef_default: {};
        clef_small: {
            gClef: {
                shiftY: number;
            };
        };
        clefNote_default: {};
        clefNote_small: {};
        stroke_straight: {
            arrowheadBlackDown: {
                shiftX: number;
            };
            arrowheadBlackUp: {
                shiftX: number;
            };
        };
        stroke_wiggly: {
            arrowheadBlackDown: {
                shiftX: number;
                shiftY: number;
            };
            arrowheadBlackUp: {
                shiftX: number;
                shiftY: number;
            };
        };
        textNote: {
            breathMarkTick: {
                shiftY: number;
            };
            breathMarkComma: {};
            segno: {
                shiftX: number;
                shiftY: number;
            };
            coda: {
                shiftX: number;
                shiftY: number;
            };
            ornamentTrill: {
                shiftX: number;
                shiftY: number;
            };
            ornamentTurn: {};
            ornamentTurnSlash: {};
            ornamentMordent: {
                shiftX: number;
            };
            ornamentShortTrill: {
                shiftX: number;
            };
        };
        noteHead: {};
        chordSymbol: {
            scale: number;
        };
    };
};
//# sourceMappingURL=common_metrics.d.ts.map