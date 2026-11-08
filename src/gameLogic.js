const winTemplateField = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export const createUpdatedField = (field, cellIndex, currentPlayer) => {
	return field.map((cell, index) => (index === cellIndex ? currentPlayer : cell));
};

export const hasWinner = (updatedField, currentPlayer) => {
	return winTemplateField.some((combination) => {
		return combination.every((index) => updatedField[index] === currentPlayer);
	});
};
