import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MenuItem from ".";

describe("Menu List", () => {
  test("render Home as menu item", () => {
    render(<MenuItem name="Home" icon={<HomeOutlinedIcon />} />);
    const homeItem = screen.queryByText("Home");
    expect(homeItem).toBeInTheDocument();
  });

  test("render Favorites as menu item", () => {
    render(<MenuItem name="Favorites" icon={<HomeOutlinedIcon />} />);
    const favoriteItem = screen.queryByText("Favorites");
    expect(favoriteItem).toBeInTheDocument();
  });
});
