/* eslint-disable react/prop-types, react/jsx-filename-extension */

import * as React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {FieldRenderProps} from 'react-final-form';

type CheckboxProps = FieldRenderProps<any, HTMLInputElement>;

const CheckboxWrapper: React.ComponentType<CheckboxProps> = ({input: {checked, name, onChange, ...restInput}, meta, ...rest}) => (
	<Checkbox
		{...rest}
		name={name}
		inputProps={restInput}
		onChange={onChange}
		checked={checked}
	/>
);

export default CheckboxWrapper;
