import { Component } from 'react';
import './styles/game-board.css';
import { Images } from '../../assets/Images';
import { TScore } from '../../types/types';

export type GameBoardProp = {
  currentScore: TScore;
  handleScore: (currentScore: TScore) => void;
};

export type TInitialFishes = {
  name: string;
  url: string;
};

const initialFishes: TInitialFishes[] = [
  {
    name: 'trout',
    url: Images.trout,
  },
  {
    name: 'salmon',
    url: Images.salmon,
  },
  {
    name: 'tuna',
    url: Images.tuna,
  },
  {
    name: 'shark',
    url: Images.shark,
  },
];

export class ClassGameBoard extends Component<GameBoardProp> {
  state = {
    answerInput: '',
  };

  render() {
    const { incorrectCount, correctCount } = this.props.currentScore;
    const { handleScore } = this.props;
    const totalScore: number = incorrectCount + correctCount;
    const nextFishToName: TInitialFishes = initialFishes[totalScore > 3 ? 0 : totalScore];
    const answerInput = this.state.answerInput;

    return (
      <div id='game-board'>
        <div id='fish-container'>
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form
          id='fish-guess-form'
          onSubmit={(e) => {
            e.preventDefault();
            if (answerInput === nextFishToName.name) {
              handleScore({
                incorrectCount: incorrectCount,
                correctCount: correctCount + 1,
              });
            } else {
              handleScore({
                incorrectCount: incorrectCount + 1,
                correctCount: correctCount,
              });
            }
            this.setState({ answerInput: '' });
          }}
        >
          <label htmlFor='fish-guess'>What kind of fish is this?</label>
          <input
            type='text'
            name='fish-guess'
            onChange={(e) => {
              this.setState({ answerInput: e.target.value });
            }}
            value={answerInput}
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
}
