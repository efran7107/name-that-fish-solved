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

		return (
			<>
				<>
					<ClassScoreBoard currentScore={currentScore} />
					<ClassGameBoard
						currentScore={currentScore}
						handleScore={(currentScore) => {
							this.setState(currentScore);
						}}
					/>
				</>
				{false && <ClassFinalScore />}
			</>
		);
	}
}
