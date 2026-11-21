import { winTemplateField } from '../logic/gameLogic';

export const selectWinner = ({ field }) => {
	const xWins = winTemplateField.some((combination) => {
		return combination.every((index) => field[index] === 'X');
	});

	const oWins = winTemplateField.some((combination) => {
		return combination.every((index) => field[index] === 'O');
	});

	if (xWins) {
		return 'X';
	} else if (oWins) {
		return 'O';
	}

	return null;
};
