import { InformationContainer } from './components/Informaiton/InformationContainer';
import { FieldContainer } from './components/Field/FieldContainer';
import PropTypes from 'prop-types';
import styles from './GameLayout.module.css';

export const GameLayout = ({ handleCellClick, handleRestart }) => {

	return (
		<div className={styles.game}>
			<InformationContainer />
			<FieldContainer handleCellClick={handleCellClick} />
			<button className={styles.restartButton} onClick={handleRestart}>
				Начать заново
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	handleCellClick: PropTypes.func.isRequired,
	handleRestart: PropTypes.func.isRequired,
};
