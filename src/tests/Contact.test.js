import {render, screen } from '@testing-library/react';
import Contact from '../components/Contact';
import "@testing-library/jest-dom";

test('Contact component', () => {
    render(<Contact />);
    const contactElement = screen.getByRole('heading');
    expect(contactElement).toBeInTheDocument();
})