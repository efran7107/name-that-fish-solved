import { Component } from 'react';
import { FinalScoreProp } from '../../types/types';

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
