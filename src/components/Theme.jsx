import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: { 
        sage: '#b6b298',
        lilac: '#7B518A',
        peach: '#eda5ae',
        pink: '#eeaddb',
        cream: '#feefd5',
        palePink: '#fbe3f8',
        darkPurple: '#362867'
    },
    fonts: {
        chunkySansSerif: '"Open Sans Condensed", sans- serif',
        sansSerif: '"Open Sans Condensed", sans-serif',
        fancy: '"Inria Serif", serif'
    },
    fontSize: {
        small: '1.2rem',
        medium: '1.6rem',
        large: '2.3rem'
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme; 
