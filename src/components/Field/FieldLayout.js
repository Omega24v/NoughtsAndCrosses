import styles from './FiledLayout.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, handleCellClick }) => {
	return (
		<div className={styles['grid-board']}>
			{field.map((cell, index) => {
				return (
					<button
						key={index}
						className={styles.cell}
						data-mark={cell || undefined}
						onClick={() => handleCellClick(index)}
					>
						{cell}
					</button>
				);
			})}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleCellClick: PropTypes.func.isRequired,
};
