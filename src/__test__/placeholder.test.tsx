import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('#Test', () => {
    test('Should create a new dom element', ()=> {
        render(<div role={'test-div'}>TEXT</div>);

        expect(screen.getByRole('test-div')).toHaveTextContent('TEXT');
    });
});
