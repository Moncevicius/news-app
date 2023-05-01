import '@testing-library/jest-dom'
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import SearchTitle from "../SearchTitle";
import {setFilter} from "../../../store/slices/searchByTitleSlice";

jest.mock('react-redux');

describe('SearchTitle', () => {
    beforeEach(() => {
        useDispatch.mockReturnValue(jest.fn());
        useSelector.mockImplementation((selector) =>
            selector({
                searchByTitle: {
                    filter: 'initial filter',
                },
            })
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders the search input', () => {
        const { getByText } = render(<SearchTitle />);

        expect(getByText('SEARCH')).toBeInTheDocument();
    });

    it('dispatches setFilter action on input change', () => {
        const dispatchMock = jest.fn();
        useDispatch.mockReturnValue(dispatchMock);

        const { getByTestId } = render(<SearchTitle />);
        const input = getByTestId('search');

        fireEvent.change(input, { target: { value: 'new filter' } });

        expect(dispatchMock).toHaveBeenCalledWith(setFilter('new filter'));
    });

    it('displays the correct initial value in the input', () => {
        const { getByTestId } = render(<SearchTitle />);

        expect(getByTestId('search')).toHaveValue('initial filter');
    });
});