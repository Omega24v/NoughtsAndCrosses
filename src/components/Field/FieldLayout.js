import { useSyncExternalStore } from 'react';
import { store } from '../../store';
import styles from './FiledLayout.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ handleCellClick }) => {
	const { field } = useSyncExternalStore(store.subscribe, store.getState);

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
