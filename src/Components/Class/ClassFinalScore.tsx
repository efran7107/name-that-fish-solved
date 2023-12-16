import { Component } from 'react';
import { TScore } from '../../types/types';

export type FinalScoreProp = {
  finalScore: TScore;
};

export class ClassFinalScore extends Component<FinalScoreProp> {
  render() {
    const { incorrectCount, correctCount } = this.props.finalScore;
    const totalCount = incorrectCount + correctCount;
    return (
      <div id='final-score'>
        <h1>Your Final Score Was</h1>
        <div id='score'>
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
