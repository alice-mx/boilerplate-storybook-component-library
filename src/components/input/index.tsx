import * as React from 'react';
import { createUseStyles } from 'react-jss';
import Label from '../label';

const useStyles = createUseStyles({
	input: {
		padding: '5px',
		display: 'block',
		width: '100%',
		boxSizing: 'border-box',
	},
});

const Input: React.FC<{ required?: boolean; type: string; label: string }> = ({
	type,
	label,
}) => {
	const classes = useStyles();
	return (
		<>
			<Label>{label}</Label>
			<input type={type} className={classes.input}></input>
		</>
	);
};

export default Input;
