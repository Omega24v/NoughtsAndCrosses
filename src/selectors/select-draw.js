import { selectWinner } from './select-winner';

export const selectDraw = (state) => {
	return !state.field.some((cell) => cell === '') && selectWinner(state) === null;
};
