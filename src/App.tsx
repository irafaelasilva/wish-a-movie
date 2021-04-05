import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Wrapper } from "./App.styles";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MovieFilterOutlinedIcon from "@material-ui/icons/MovieFilterOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import Home from "./components/main-view/home/Home";
import NewReleases from "./components/main-view/new-releases/NewReleases";
import MenuItem from "./components/sidebar-menu";
import {
  SidebarContainer,
  SidebarHeader,
} from "./components/sidebar-menu/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainView } from "./components/main-view/styles";

function App() {
  return (
    <Router>
      <Wrapper>
        <SidebarContainer>
          <SidebarHeader>
            <img src="logo2.png" alt="logo" width="100px" />
          </SidebarHeader>
          <Link style={{ textDecoration: "none" }} to="/">
            <MenuItem
              name="Home"
              icon={<HomeOutlinedIcon fontSize="small" />}
            />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Favorites">
            <MenuItem
              name="Favorites"
              icon={<FavoriteBorderOutlinedIcon fontSize="small" />}
            />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/new-releases">
            <MenuItem
              name="New releases"
              icon={<MovieFilterOutlinedIcon fontSize="small" />}
            />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/recently-watched">
            <MenuItem
              name="Recently watched"
              icon={<WatchLaterOutlinedIcon fontSize="small" />}
            />
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/collection"
          >
            <MenuItem
              name="Own collection"
              icon={<VideoLibraryOutlinedIcon fontSize="small" />}
            />
          </Link>
        </SidebarContainer>
        <MainView>
          <Route exact path="/" component={Home} />
          <Route path="/new-releases" component={NewReleases} />
        </MainView>
      </Wrapper>
    </Router>
  );
}

export default App;
