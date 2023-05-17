import { MemoryRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import Home from "./Home";
import { drinks, snacks } from '../db.json';

describe("Test Home component", () => {
    it("smoke test", () => {
        render(
            <MemoryRouter>
                <Home drinks={drinks} snacks={snacks} />
            </MemoryRouter>
        );
    });
})