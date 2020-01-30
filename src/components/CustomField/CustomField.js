import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const CustomField = (
    { input, label, meta: { touched, error }, ...custom },
) => (
        <TextField
            fullWidth
            label={label}
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            {...custom}
        />
    );

export default CustomField