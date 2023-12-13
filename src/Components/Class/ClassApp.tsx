import { Component } from 'react';
import { ClassScoreBoard } from './ClassScoreBoard';
import { ClassGameBoard } from './ClassGameBoard';
import { ClassFinalScore } from './ClassFinalScore';

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };
  render() {
    const currentScore = this.state;
    const { incorrectCount, correctCount } = this.state;
    const total = incorrectCount + correctCount;

    return (
      <>
        <div
          style={
            total > 3
              ? {
                  display: 'none',
                }
              : undefined
          }
        >
          <ClassScoreBoard currentScore={currentScore} />
          <ClassGameBoard
            currentScore={currentScore}
            handleScore={(currentScore) => {
              this.setState(currentScore);
            }}
          />
        </div>
        {total === 4 ? <ClassFinalScore finalScore={currentScore} /> : null}
      </>
    );
  }
}
