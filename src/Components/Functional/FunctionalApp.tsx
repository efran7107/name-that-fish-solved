import { FunctionalGameBoard } from './FunctionalGameBoard';
import { FunctionalScoreBoard } from './FunctionalScoreBoard';
import { FunctionalFinalScore } from './FunctionalFinalScore';
import { useState } from 'react';

export function FunctionalApp() {
  const [currentScore, setCurrentScore] = useState({ incorrectCount: 0, correctCount: 0 });

  const total = currentScore.correctCount + currentScore.incorrectCount;

  return (
    <>
      <div style={total > 3 ? { display: 'none' } : undefined}>
        <FunctionalScoreBoard currentScore={currentScore} />
        <FunctionalGameBoard currentScore={currentScore} handleScore={(currentScore) => setCurrentScore(currentScore)} />
      </div>

      {total === 4 ? <FunctionalFinalScore currentScore={currentScore} /> : null}
    </>
  );
}
