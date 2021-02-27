import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MenuItem from "./App";

test("render Home as menu item", () => {
  render(<MenuItem />);
  const homeItem = screen.queryByText("Home");
  expect(homeItem).toBeInTheDocument();
});

test("render Favorites as menu item", () => {
  render(<MenuItem />);
  const favoriteItem = screen.queryByText("Favorites");
  expect(favoriteItem).toBeInTheDocument();
});

test("render New Releases as menu item", () => {
  render(<MenuItem />);
  const newReleasesItem = screen.queryByText("New releases");
  expect(newReleasesItem).toBeInTheDocument();
});

test("render Recently Watched as menu item", () => {
  render(<MenuItem />);
  const recentlyWatchedItem = screen.queryByText("Recently watched");
  expect(recentlyWatchedItem).toBeInTheDocument();
});

test("render Own Collection as menu item", () => {
  render(<MenuItem />);
  const ownCollectionItem = screen.queryByText("Own collection");
  expect(ownCollectionItem).toBeInTheDocument();
});
