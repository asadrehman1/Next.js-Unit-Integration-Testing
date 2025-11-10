import { render, screen, waitFor } from "@testing-library/react";
import { TodosAndPhotosList } from "./TodosAndPhotosList";
import axios from "axios";

jest.mock("axios");
const mockedAxios = jest.mocked(axios);

describe("Testing TodosAndPhotosList Component", () => {
  test("should fetch todos and photos from API and display them", async () => {
    const mockTodos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Todo 3", completed: false },
    ];
    const mockPhotos = [
      { id: 1, title: "Photo 1", thumbnailUrl: "url1" },
      { id: 2, title: "Photo 2", thumbnailUrl: "url2" },
      { id: 3, title: "Photo 3", thumbnailUrl: "url3" },
    ];


    mockedAxios.get
      .mockResolvedValueOnce({ data: mockTodos })
      .mockResolvedValueOnce({ data: mockPhotos });

    render(<TodosAndPhotosList />);

    await waitFor(() => {
      expect(screen.getByText(/Todo 1\s*\(Pending\)/i)).toBeInTheDocument();
      expect(screen.getByText(/Todo 2\s*\(Completed\)/i)).toBeInTheDocument();
      expect(screen.getByText(/Todo 3\s*\(Pending\)/i)).toBeInTheDocument();

      expect(screen.getByText("Photo 1")).toBeInTheDocument();
      expect(screen.getByText("Photo 2")).toBeInTheDocument();
      expect(screen.getByText("Photo 3")).toBeInTheDocument();
    });
  });
});
