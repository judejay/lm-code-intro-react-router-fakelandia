import Punishment from "./Punishment";

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders without crashing', () => {
    render(<Punishment width={100} height={100} />);
    const punishmentElement = screen.getByTestId('punishment');
    expect(punishmentElement).toBeInTheDocument();
});
