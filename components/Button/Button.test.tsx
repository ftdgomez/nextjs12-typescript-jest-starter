import { render, screen } from '@testing-library/react';
import { Button } from './Button'

describe('<Button/>', ()=> {
    it('should render', () => {
        render(<Button />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
    it('should render with custom child', () => {
        render(<Button>Custom Child</Button>);
        expect(screen.getByText('Custom Child')).toBeInTheDocument();
    })
    it('should have primary color by default', () => {
        render(<Button>Hello World</Button>);
        expect(screen.getByRole('button'))
            .toHaveClass('button--primary')
    })
});