import React from 'react';
import { action } from '@storybook/addon-actions';
import Label from '../src/components/label/index.tsx';

export default {
	title: 'Label',
	component: Label,
};

export const Text = () => <Label>Some words on the label</Label>;

export const Required = () => <Label required>A required label</Label>;
