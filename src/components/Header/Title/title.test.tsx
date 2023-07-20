import { render, screen } from '@testing-library/react';
import Title from './Title';
import { HeaderType } from './title.types';

describe('Title Test', () => {
    it('should contains the title name', () => {
    render(<Title content='test' headerType={HeaderType.H1} />);
        const heading = screen.getByText(/test/i);
        expect(heading).toBeInTheDocument()
    });
    it('should contains the heading 1', () => {
        render(<Title content='test' headerType={HeaderType.H1} />);
            const heading = screen.getByTestId('title-H1');
            expect(heading).toBeInTheDocument()
    });
    it('should contains the heading 2', () => {
        render(<Title content='test' headerType={HeaderType.H2} />);
            const heading = screen.getByTestId('title-H2');
            expect(heading).toBeInTheDocument()
    });
    it('should contains the heading 3', () => {
        render(<Title content='test' headerType={HeaderType.H3} />);
            const heading = screen.getByTestId('title-H3');
            expect(heading).toBeInTheDocument()
    });
    it('should contains the heading 4', () => {
        render(<Title content='test' headerType={HeaderType.H4} />);
            const heading = screen.getByTestId('title-H4');
            expect(heading).toBeInTheDocument()
    });
    it('should contains the heading 5', () => {
        render(<Title content='test' headerType={HeaderType.H5} />);
                const heading = screen.getByTestId('title-H5');
                expect(heading).toBeInTheDocument()
    });
    it('should contains the heading 6', () => {
        render(<Title content='test' headerType={HeaderType.H6} />);
            const heading = screen.getByTestId('title-H6');
            expect(heading).toBeInTheDocument()
    });
});