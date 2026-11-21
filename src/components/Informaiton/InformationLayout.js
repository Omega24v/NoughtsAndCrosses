import { useSelector } from 'react-redux';
import { selectDraw, selectPlayer, selectWinner } from '../../selectors';
import styles from './InformationLayout.module.css';

export const InformationLayout = () => {
	const haveWinner = useSelector(selectWinner);
	const isDraw = useSelector(selectDraw);
	const currentPlayer = useSelector(selectPlayer);

	return (
		<div className={styles.status}>
			{isDraw && haveWinner === null ? 'Ничья' : ''}
			{isDraw === false && haveWinner ? `Победа ${haveWinner}` : ''}
			{isDraw === false && !haveWinner ? `Ходит ${currentPlayer}` : ''}
		</div>
	);
};
