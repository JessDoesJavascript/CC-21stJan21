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
        chunkySansSerif: "'Barlow', sans-serif",
        sansSerif: "'Barlow', sans-serif",
        fancy: "'Barlow', sans-serif"
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
