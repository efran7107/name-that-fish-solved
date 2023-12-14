export type TScore = {
	incorrectCount: number;
	correctCount: number;
};

export type TInitialFishes = {
	name: string;
	url: string;
};

export type ScoreBoardProp = {
	currentScore: TScore;
};

export type GameBoardProp = {
	currentScore: TScore;
	handleScore: (currentScore: TScore) => void;
};

export type FinalScoreProp = {
	finalScore: TScore;
};
