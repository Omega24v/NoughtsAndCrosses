import { createUpdatedField } from './logic/gameLogic';
import { selectWinner } from './selectors/select-winner';

let initialState = {
	field: ['', '', '', '', '', '', '', '', ''],
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'PLAYER_STEP': {
			const cellIndex = payload;

			if (state.field[cellIndex] !== '' || selectWinner(state) !== null) {
				return state;
			}

			const xCount = state.field.filter((cell) => cell === 'X').length;
			const oCount = state.field.filter((cell) => cell === 'O').length;
			const currentPlayer = xCount === oCount ? 'X' : 'O';

			const field = createUpdatedField(state.field, cellIndex, currentPlayer);

			return {
				...state,
				field,
			};
		}

		case 'RESTART_GAME': {
			return { field: ['', '', '', '', '', '', '', '', ''] };
		}
		default:
			return state;
	}
};
