import PropTypes from 'prop-types';
import styles from './InformationLayout.module.css';

export const InformationLayout = ({isDraw, isGameEnded, currentPlayer}) => {
	return (
		<div className={styles.status}>
			{isDraw === true ? 'Ничья' : ''}
			{isDraw === false && isGameEnded === true ? `Победа ${currentPlayer}` : ''}
			{isDraw === false && isGameEnded === false ? `Ходит ${currentPlayer}` : ''}
		</div>
	);
}

InformationLayout.propTypes = {
	isDraw: PropTypes.bool.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	currentPlayer: PropTypes.string.isRequired,
};
