import { Component } from 'react';
import './styles/game-board.css';
import { Images } from '../../assets/Images';
import { TScore } from '../../types/types';

const initialFishes = [
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

export class ClassGameBoard extends Component<{
	currentScore: TScore;
	handleScore: (score: TScore) => void;
}> {
	render() {
		const { incorrectCount, correctCount } = this.props.currentScore;
		const totalScore: number = incorrectCount + correctCount;
		const nextFishToName = initialFishes[totalScore];
		console.log(nextFishToName);

		return (
			<div id='game-board'>
				<div id='fish-container'>
					<img
						src={nextFishToName.url}
						alt={nextFishToName.name}
					/>
				</div>
				<form id='fish-guess-form'>
					<label htmlFor='fish-guess'>What kind of fish is this?</label>
					<input
						type='text'
						name='fish-guess'
					/>
					<input type='submit' />
				</form>
			</div>
		);
	}
}
