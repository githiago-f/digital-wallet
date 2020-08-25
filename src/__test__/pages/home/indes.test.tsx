import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from 'pages/Home';

describe('#Home screen', () => {
    beforeEach(() => {
        render(<Home/>);
    });

    it('should render propely', () => {
        expect(screen).toMatchSnapshot();
    });

    it('should have a hello world ', () => {
        const title = screen.getByText('Hello World');

        expect(title).toBeInTheDOM();
    });
});
