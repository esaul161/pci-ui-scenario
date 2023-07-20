import { render, screen } from '@testing-library/react';
import Grid from './Grid';

describe('Grid Test', () => {
    it('should contains the data grid', () => {
    render(<Grid/>);
        const grid = screen.getByTestId(/grid-data/i);
        expect(grid).toBeInTheDocument();
    });

});