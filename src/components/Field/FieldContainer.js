import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';

export const FieldContainer = ({ handleCellClick }) => {
	return <FieldLayout handleCellClick={handleCellClick} />;
};

FieldContainer.propTypes = {
	handleCellClick: PropTypes.func.isRequired,
};
