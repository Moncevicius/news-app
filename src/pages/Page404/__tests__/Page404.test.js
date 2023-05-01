import React from "react";
import { render } from "@testing-library/react";
import Page404 from "../Page404";
import '@testing-library/jest-dom'

describe("Page404", () => {
    it("renders the correct text and image", () => {
        const { getByAltText, getByText } = render(<Page404 />);
        const imageElement = getByAltText("Image of an confused man looking at a map");
        const titleElement = getByText("404 Page Not Found");
        const subtitleElement = getByText("This Page is Not on the Map");
        const messageElement = getByText(/So here you are/);

        expect(imageElement).toBeInTheDocument();
        expect(titleElement).toBeInTheDocument();
        expect(subtitleElement).toBeInTheDocument();
        expect(messageElement).toBeInTheDocument();
    });
});