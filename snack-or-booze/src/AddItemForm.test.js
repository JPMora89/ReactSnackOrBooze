import { MemoryRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import AddItemForm from "./AddItemForm";

describe("Test CreateMenu component", () => {
    it("smoke test", () => {
        render(
            <MemoryRouter>
                <AddItemForm />
            </MemoryRouter>
        );
    });
})