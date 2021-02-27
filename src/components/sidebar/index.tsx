import React from "react";
import { SidebarContainer, SidebarHeader } from "./styles";
import { sidebarData } from "./menu/items";
import MenuItem from "./menu";

const SideBar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <img src="logo2.png" alt="logo" width="100px" />
      </SidebarHeader>
      {sidebarData.map((item, key) => {
        return (
          <div key={key}>
            <MenuItem name={item.name} icon={item.icon} />
          </div>
        );
      })}
    </SidebarContainer>
  );
};

export default SideBar;