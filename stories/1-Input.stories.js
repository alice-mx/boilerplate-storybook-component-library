import React from 'react';
import Input from '../src/components/input';

export default {
	title: 'Input',
	component: Input,
};

export const Text = () => (
	<Input type='text' value='My input value' label='A label'></Input>
);
