import { screen, render } from '@testing-library/react';
import { Text } from './Text';

describe('<Text />', () => {
    it('should render', () => {
        render(<Text>Hello</Text>);
        expect(screen.getByText('Hello')).toBeInTheDocument();
    })
    it('should render a p tag by default', () => {
        render(<Text>Hello</Text>);
        expect(screen.getByText('Hello').tagName).toBe('P');
    });
    it('should render as a strong tag', () => {
        render(<Text as='strong'>Hello</Text>)
        expect(screen.getByText('Hello').tagName).toBe('STRONG');
    })
    it('should render with light font class', () => {
        render(<Text thin>Hello</Text>)
        expect(screen.getByText('Hello')).toHaveClass('text--is-thin');
    })
    it('should render with italic font class', () => {
        render(<Text italic>Hello</Text>)
        expect(screen.getByText('Hello')).toHaveClass('text--is-italic');
        expect(screen.getByText('Hello').tagName).toBe('I');
    })
})