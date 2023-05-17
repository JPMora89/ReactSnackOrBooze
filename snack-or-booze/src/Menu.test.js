import { MemoryRouter } from 'react-router-dom';
import { render } from "@testing-library/react";
import Menu from "./Menu";
import { drinks, snacks } from '../db.json';

describe("Test FoodMenu component", () => {

    it("smoke test for drinks", () => {
        render(
            <MemoryRouter>
                <Menu items={ drinks } url="drinks" title="Drinks" />
            </MemoryRouter>
        );
    });

    it("smoke test for snacks", () => {
        render(
            <MemoryRouter>
                <Menu items={ snacks } url="snacks" title="Snacks" />
            </MemoryRouter>
        );
    });
})