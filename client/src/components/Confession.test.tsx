import { render, screen } from '@testing-library/react';
import Confession from './Confession';

test('expect form to be in the component', () => {
    render(<Confession />);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
});

test('submit button should be disabled', () => {
    render(<Confession />);
    const submitButton = screen.getByRole('button', { name: /Confess/i });
    expect(submitButton).toBeDisabled();
});

test('renders an input field', () => {
    render(<Confession />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
});