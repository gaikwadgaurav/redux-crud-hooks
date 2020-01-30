import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const GetUserGlobalCss = withStyles({
    '@global': {
        '.MuiButton-containedPrimary': {
            backgroundColor: '#007bff !important',
        },
        '.MuiButton-containedPrimary:hover': {
            color: '#007bff',
            backgroundColor: 'white',
        },
        '.MuiButton-containedSecondary': {
            backgroundColor: '#dc3545 !important',
        },
        '.MuiButton-containedSecondary:hover': {
            color: '#dc3545',
            backgroundColor: 'white',
        }
    },
})(() => null);

export default GetUserGlobalCss