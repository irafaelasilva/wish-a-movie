import React from "react";
import { ItemIcon, ItemText, MenuItemContainer } from "./styles";

interface Props {
  name: string;
  icon: JSX.Element;
  key: string;
}

const MenuItem = ({ name, icon, key }: Props) => {
  return (
    <MenuItemContainer key={key}>
      <ItemIcon>{icon}</ItemIcon>
      <ItemText>{name}</ItemText>
    </MenuItemContainer>
  );
};

export default MenuItem;
