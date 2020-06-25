import * as React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	label: {
		color: 'red',
	},
});

const Label: React.FC<{ required?: boolean }> = ({
	children,
	required = false,
}) => {
	const classes = useStyles();
	return (
		<label className={classes.label}>
			{children} {required && '*'}
		</label>
	);
};

export default Label;
