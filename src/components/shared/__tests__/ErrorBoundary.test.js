import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundary from "../ErrorBoundary";
import '@testing-library/jest-dom'

describe('ErrorBoundary', () => {
    const ChildComponent = () => {
        throw new Error('Test error');
    };

    it('renders the error message when a child component throws an error', () => {
        const { getByText } = render(
            <ErrorBoundary>
                <ChildComponent />
            </ErrorBoundary>
        );
        expect(getByText(/Bad news. Error - Error: Test error/)).toBeInTheDocument();
    });

    it('renders the child component when no errors occur', () => {
        const { getByText } = render(
            <ErrorBoundary>
                <div>Test child component</div>
            </ErrorBoundary>
        );

        expect(getByText(/Test child component/)).toBeInTheDocument();
    });
});