import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavHomeButton from "../NavHomeButton";
import '@testing-library/jest-dom'

describe('NavHomeButton', () => {
    it('renders the home button with the correct link and text', () => {
        // Render the component inside a MemoryRouter to simulate routing context
        const { getByRole } = render(
            <MemoryRouter>
                <NavHomeButton />
            </MemoryRouter>
        );

        // Expect the link to be rendered with the correct URL and text
        const homeButtonLink = getByRole('link');
        expect(homeButtonLink).toHaveAttribute('href', '/');
        expect(homeButtonLink).toHaveTextContent('Home Page');
    });
});