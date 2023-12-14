import './styles/game-board.css';
import { Images } from '../../assets/Images';
import { GameBoardProp, TInitialFishes } from '../../types/types';
import { useState } from 'react';

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

export function FunctionalGameBoard({ currentScore, handleScore }: GameBoardProp) {
	const [answer, setAnswer] = useState('');
	const { incorrectCount, correctCount } = currentScore;
	const totalScore = incorrectCount + correctCount;
	const nextFishToName = initialFishes[totalScore > 3 ? 0 : totalScore];
	return (
		<div id='game-board'>
			<div id='fish-container'>
				<img
					src={nextFishToName.url}
					alt={nextFishToName.name}
				/>
			</div>
			<form
				id='fish-guess-form'
				onSubmit={(e) => {
					e.preventDefault();
					if (answer === nextFishToName.name) handleScore({ incorrectCount: incorrectCount, correctCount: correctCount + 1 });
					else handleScore({ incorrectCount: incorrectCount + 1, correctCount: correctCount });
					setAnswer('');
				}}>
				<label htmlFor='fish-guess'>What kind of fish is this?</label>
				<input
					type='text'
					name='fish-guess'
					onChange={(e) => {
						setAnswer(e.target.value);
					}}
					value={answer}
				/>
				<input type='submit' />
			</form>
		</div>
	);
}
