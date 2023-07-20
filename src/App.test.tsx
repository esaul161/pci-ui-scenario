import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Test', () => {
    it('should render the application', () => {
    render(<App/>);
        const grid = screen.getByTestId(/grid-data/i);
        expect(grid).toBeInTheDocument();
    });

});