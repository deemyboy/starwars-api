import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders Star Wara", () => {
    render(<App />);
    const title = screen.getByText(/This is Star Wars/i);
    expect(title).toBeInTheDocument();
});
test("renders Luke Skywalker", async () => {
    render(<App />);
    const person = await waitFor(() => screen.findByText(/Luke Skywalker/i), {
        timeout: 2000,
    });
    expect(person).toBeInTheDocument();
});
