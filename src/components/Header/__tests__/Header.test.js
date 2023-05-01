import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";
import '@testing-library/jest-dom'

describe("Header", () => {
    it("renders the title correctly", () => {
        const { getByText } = render(<Header />);
        const titleElement = getByText("Daily News");
        expect(titleElement).toBeInTheDocument();
    });
});