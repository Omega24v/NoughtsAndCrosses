import styles from './FiledLayout.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectField } from '../../selectors/select-field';

export const FieldLayout = ({ handleCellClick }) => {
	const field = useSelector(selectField);

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
	handleCellClick: PropTypes.func.isRequired,
};
