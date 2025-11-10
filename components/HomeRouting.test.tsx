/* eslint-disable @typescript-eslint/ban-ts-comment */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

test("Test navigation to another page", () => {
    const mockPush = jest.fn();
    // @ts-expect-error
    useRouter.mockImplementation(() => ({
      push: mockPush,
    }));
    render(<Home />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockPush).toHaveBeenCalledWith("/about");
})

