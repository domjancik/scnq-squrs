import * as Tone from 'tone'

// const notes = ['C', 'G', 'D', 'A', 'E']
// const notes = ['C', 'D', 'E', 'A', 'G']

const C = 'C'
const D = 'D'
const E = 'E'
const Eb = 'Eb'
const F = 'F'
const G = 'G'
const A = 'A'
const Ab = 'Ab'
const B = 'B'
const Bb = 'Bb'

const SCALE_5_MAJOR_PENTATONIC = [C, D, E, G, A]
const SCALE_5_EGYPTIAN_SUSPENDED = [C, D, F, G, Bb]
// const SCALE_5_BLUES_MINOR_MAN_GONG = [C, Eb, F, Ab, Bb, C]
const SCALE_5_BLUES_MINOR_MAN_GONG = [C, Eb, F, Ab, Bb]
const SCALE_5_BLUES_MAJOR_RITSUSEN = [C, D, F, G, A]
const SCALE_5_MINOR_PENTATONIC = [C, Eb, F, G, Bb]
const SCALE_4_TONEJS_SEQUENCER_EXAMPLE = [A, 'Db', E, 'Gb']
const notes = SCALE_5_EGYPTIAN_SUSPENDED

const getNote = (i: number) => {
    const note = notes[i % notes.length]
    const octave = Math.floor(i / notes.length)
    return `${note}${octave + 3}`
}
// const getNote = (i: number) => `C${i}`
const getNoteFrequency = (i: number) => Tone.Frequency(getNote(i)).toFrequency()

export { getNote, getNoteFrequency }