import { store } from '../../store';
import { useSyncExternalStore } from 'react';
import styles from './InformationLayout.module.css';

export const InformationLayout = () => {
	const { isDraw, isGameEnded, currentPlayer } = useSyncExternalStore(
		store.subscribe,
		store.getState,
	);

	return (
		<div className={styles.status}>
			{isDraw ? 'Ничья' : ''}
			{isDraw === false && isGameEnded === true ? `Победа ${currentPlayer}` : ''}
			{isDraw === false && isGameEnded === false ? `Ходит ${currentPlayer}` : ''}
		</div>
	);
};
