import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Wrapper } from "./App.styles";
import TheatersOutlinedIcon from "@material-ui/icons/TheatersOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import Home from "./components/pages/home/Home";
import MenuItem from "./components/sidebar-menu";
import {
  SidebarContainer,
  SidebarHeader,
} from "./components/sidebar-menu/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainView } from "./components/pages/styles";
import Favorites from "./components/pages/favorites/favorites";

function App() {
  return (
    <Router>
      <Wrapper>
        <SidebarContainer>
          <SidebarHeader>
            <img src="logo2.png" alt="logo" width="100px" />
          </SidebarHeader>
          <Link style={{ textDecoration: "none" }} to="/">
            <MenuItem name="Movies" icon={<TheatersOutlinedIcon />} />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Favorites">
            <MenuItem name="Wacthed" icon={<FavoriteBorderOutlinedIcon />} />
          </Link>
        </SidebarContainer>
        <MainView>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
        </MainView>
      </Wrapper>
    </Router>
  );
}

export default App;
