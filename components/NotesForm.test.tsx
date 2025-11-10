import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { NotesApp } from "./NotesForm";

describe("Testing NotesApp Component", () => {
    beforeEach(() => {
        render(<NotesApp />);
    });
    test("renders a title", () => {
        const title = screen.getByRole("heading", {level: 2});
        expect(title).toBeInTheDocument();
    })
    test("renders a description", () => {
       const description = screen.getByTestId("desc");
       expect(description).toBeInTheDocument();
       expect(description).toHaveTextContent(/Write a note and it will appear below./i);
    })
    test("renders a input", () => {
        const input = screen.getByRole("textbox");
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("placeholder", "Write a note...");
    })
    test("renders a submit button", () => {
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/Add Note/i);
    })
    test("button is diabled when input is empty", () => {
        const button = screen.getByRole("button");
        expect(button).toBeDisabled();
    })
    test("button is enabled when input is not empty", () => {
        const input = screen.getByRole("textbox");
        fireEvent.change(input, { target: { value: "test note" } });
        const button = screen.getByRole("button");
        expect(button).toBeEnabled();
    });
    test("Test NotesList Component", () => {
        const input = screen.getByRole("textbox");
        const button = screen.getByRole("button");
        const notesList = screen.getByTestId("notes-list");
        
        expect(notesList.querySelectorAll("li")).toHaveLength(0);
        fireEvent.change(input, { target: { value: "test note 1" } });
        fireEvent.click(button);
        expect(notesList.querySelectorAll("li")).toHaveLength(1);
        fireEvent.change(input, { target: { value: "test note 2" } });
        fireEvent.click(button);
        expect(notesList.querySelectorAll("li")).toHaveLength(2);
    })
});