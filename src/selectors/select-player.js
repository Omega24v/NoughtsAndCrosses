export const selectPlayer = ({ field }) => {
	const xCount = field.filter((cell) => cell === 'X').length;
	const oCount = field.filter((cell) => cell === 'O').length;

	return xCount === oCount ? 'X' : 'O';
};
