import { TScore } from '../../types/types';
import './styles/final-score.css';

export type FinalScoreProp = {
  finalScore: TScore;
};

export const FunctionalFinalScore = ({ finalScore }: FinalScoreProp) => {
  const { incorrectCount, correctCount } = finalScore;
  const total = correctCount + incorrectCount;
  return (
    <div id='final-score'>
      <h1>Your Final Score Was</h1>
      <div id='score'>
        <p>{correctCount}</p>
        <hr />
        <p>{total}</p>
      </div>
    </div>
  );
};
