import { useDispatch } from 'react-redux';
import { GameLayout } from './GameLayout';
import { playerStep, restartGame } from './actions';

export const Game = () => {
	const dispatch = useDispatch();

	const handleCellClick = (cellIndex) => {
		dispatch(playerStep(cellIndex));
	};

	const handleRestart = () => {
		dispatch(restartGame());
	};

	return <GameLayout handleCellClick={handleCellClick} handleRestart={handleRestart} />;
};
