import { GameLayout } from './GameLayout';
import { store } from './store';

export const Game = () => {
	const handleCellClick = (cellIndex) => {
		store.dispatch({ type: 'CELL_CLICK', payload: { cellIndex } });
	};

	const handleRestart = () => {
		store.dispatch({ type: 'GAME_RESTART' });
	};

	return <GameLayout handleCellClick={handleCellClick} handleRestart={handleRestart} />;
};
