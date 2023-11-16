//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// No Sharps or Flats: C major, a minor


// Use Sharps: G, D, A, E, B, F# major, e, b, f#, c#, g#, d# minor

// Use Flats: F, Bb, Eb, Ab, Db, Gb major, d, g, c, f, bb, eb minor
// const sharp = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
// const flat = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
export class Scale {
  constructor(tonic) {
    this.tonic = tonic;
  }

  convertToFlat(note) {
    const index = notes.findIndex((note) => note == this.tonic);
    if (note.endsWith('#')) {
      console.log("+++", notes[(index+1) % 12]);
      // return notes[(index+1) % 12] + 'b';
    }
  }

  chromatic() {
    const chromaticResult = [];
    const index = notes.findIndex((note) => note == this.tonic);
    if (index < 6) {
      for (let i = 0; i < 12; i++){
        chromaticResult.push(notes[(i + index) % 12])
      }

    } else {
      for (let i = 0; i < 12; i++){
        console.log(notes[(i + index) % 12]);
        // console.log(this.convertToFlat(notes[(i + index) % 12]));
        chromaticResult.push(
          this.convertToFlat(notes[(i + index) % 12]) 
          );
      }
    }
    return chromaticResult;
  }

  interval(intervals) {
    throw new Error('Remove this statement and implement this function');
  }
}
