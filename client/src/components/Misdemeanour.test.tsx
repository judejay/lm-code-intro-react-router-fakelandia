import React from 'react';
import { render } from '@testing-library/react';
import Misdemeanour from './Misdemeanor';

describe('Misdemeanour', () => {
    it('renders the component without errors', () => {
        render(<Misdemeanour />);
    });

    it('displays the correct title', () => {
        const { getByText } = render(<Misdemeanour />);
        const titleElement = getByText('Misdemeanour');
        expect(titleElement).toBeInTheDocument();
    });



});
