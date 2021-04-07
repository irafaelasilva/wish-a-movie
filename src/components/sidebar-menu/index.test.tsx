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

  test("render New Releases as menu item", () => {
    render(<MenuItem name="New releases" icon={<HomeOutlinedIcon />} />);
    const newReleasesItem = screen.queryByText("New releases");
    expect(newReleasesItem).toBeInTheDocument();
  });

  test("render Recently Watched as menu item", () => {
    render(<MenuItem name="Recently watched" icon={<HomeOutlinedIcon />} />);
    const recentlyWatchedItem = screen.queryByText("Recently watched");
    expect(recentlyWatchedItem).toBeInTheDocument();
  });

  test("render Own Collection as menu item", () => {
    render(<MenuItem name="Own collection" icon={<HomeOutlinedIcon />} />);
    const ownCollectionItem = screen.queryByText("Own collection");
    expect(ownCollectionItem).toBeInTheDocument();
  });
});
