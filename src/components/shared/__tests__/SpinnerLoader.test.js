import React from 'react';
import { render } from '@testing-library/react';
import SpinnerLoader from "../SpinnerLoader";
import '@testing-library/jest-dom'


describe('SpinnerLoader', () => {
    it('renders without crashing', () => {
        render(<SpinnerLoader />);
    });

    it('renders the loader element with the "loader" class', () => {
        const { getByTestId } = render(<SpinnerLoader />);
        const loaderElement = getByTestId('loader');
        expect(loaderElement).toBeInTheDocument();
        expect(loaderElement).toHaveClass('loader');
    });
});