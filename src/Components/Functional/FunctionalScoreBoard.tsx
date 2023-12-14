import { TScore } from '../../types/types';
import './styles/score-board.css';
//  Where the score is presented

const answersLeft = ['trout', 'salmon', 'tuna', 'shark'];

export function FunctionalScoreBoard({ currentScore }: { currentScore: TScore }) {
  const { incorrectCount, correctCount } = currentScore;
  const totalScore = incorrectCount + correctCount;
  const updatedList = answersLeft.slice(totalScore);

  return (
    <div id='score-board'>
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id='choices-left'>
        {updatedList.map((answer) => (
          <div key={answer} className='choice'>
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
