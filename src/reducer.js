import { createUpdatedField, hasWinner } from './gameLogic';

let initialState = {
	field: ['', '', '', '', '', '', '', '', ''],
	isDraw: false,
	isGameEnded: false,
	currentPlayer: 'X',
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'CELL_CLICK': {
			const { cellIndex } = payload;

			if (state.field[cellIndex] !== '' || state.isGameEnded) {
				return state;
			}

			const player = state.currentPlayer;
			const field = createUpdatedField(state.field, cellIndex, player);
			const isWinner = hasWinner(field, player);
			const hasEmptyFields = field.some((cell) => cell === '');
			const isDraw = !isWinner && !hasEmptyFields;
			const isGameEnded = isWinner || isDraw;

			return {
				...state,
				currentPlayer: isGameEnded ? player : player === 'X' ? 'O' : 'X',
				field,
				isDraw,
				isGameEnded,
			};
		}

		case 'GAME_RESTART': {
			return {
				...state,
				currentPlayer: 'X',
				field: ['', '', '', '', '', '', '', '', ''],
				isDraw: false,
				isGameEnded: false,
			};
		}
		default:
			return state;
	}
};
