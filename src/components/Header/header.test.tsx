import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header Test', () => {
    it('should contains the title name', () => {
    render(<Header/>);
        const title = screen.getByTestId(/title/i);
        expect(title).toBeInTheDocument();
    });

    it('should contains the clear filters button', () => {
        render(<Header/>);
            const button = screen.getByTestId(/clear-button/i);
            fireEvent.click(button);
            expect(button).toBeInTheDocument();
        });
});