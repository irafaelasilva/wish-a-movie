import React from "react";
import { ItemIcon, ItemText, MenuItemContainer } from "./styles";

interface Props {
  name: string;
  icon: JSX.Element;
}

const MenuItem = ({ name, icon }: Props) => {
  return (
    <MenuItemContainer>
      <ItemIcon>{icon}</ItemIcon>
      <ItemText>{name}</ItemText>
    </MenuItemContainer>
  );
};

export default MenuItem;
