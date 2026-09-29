import { useState } from 'react';
import { GameLayout } from './GameLayout';

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

const createUpdatedField = (field, cellIndex, currentPlayer) => {
	return field.map((cell, index) => (index === cellIndex ? currentPlayer : cell));
};

const hasWinner = (updatedField, currentPlayer) => {
	return winTemplateField.some((combination) => {
		return combination.every((index) => updatedField[index] === currentPlayer);
	});
};

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const handleCellClick = (cellIndex) => {
		if (field[cellIndex] === '' && isGameEnded === false) {
			const updatedField = createUpdatedField(field, cellIndex, currentPlayer);
			setField(updatedField);

			const isWinner = hasWinner(updatedField, currentPlayer);
			const hasEmptyFields = updatedField.some((cell) => cell === '');

			if (isWinner) {
				return setIsGameEnded(true);
			}

			if (!hasEmptyFields) {
				setIsGameEnded(true);
				return setIsDraw(true);
			}

			currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
		}
	};

	const handleRestart = () => {
		setCurrentPlayer('X');
		setIsDraw(false);
		setIsGameEnded(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			handleCellClick={handleCellClick}
			handleRestart={handleRestart}
		/>
	);
};
