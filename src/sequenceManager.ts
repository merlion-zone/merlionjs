export class SequenceManager {
  _initial: number | null = null;
  _deltaCount: number = 0;

  mayInit(sequence: number) {
    if (this._initial === null) {
      this._initial = sequence;
    }
  }

  getSequence(): number {
    return this._initial! + this._deltaCount;
  }

  setSequence(sequence: number) {
    this._initial = sequence;
    this._deltaCount = 0;
  }

  incrementSequence() {
    this._deltaCount += 1;
  }
}
