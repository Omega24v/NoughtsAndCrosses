import { InformationContainer } from './components/Informaiton/InformationContainer';
import { FieldContainer } from './components/Field/FieldContainer';
import PropTypes from 'prop-types';

import styles from './GameLayout.module.css';

export const GameLayout = ({
	currentPlayer,
	isGameEnded,
	isDraw,
	field,
	handleCellClick,
	handleRestart,
}) => {
	return (
		<div className={styles.game}>
			<InformationContainer
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<FieldContainer field={field} handleCellClick={handleCellClick} />
			<button className={styles.restartButton} onClick={handleRestart}>
				Начать заново
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	isDraw: PropTypes.bool.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	currentPlayer: PropTypes.string.isRequired,
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleCellClick: PropTypes.func.isRequired,
	handleRestart: PropTypes.func.isRequired,
};
