import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  width: 15%;
  background: white;
  align-content: center;
  justify-content: center;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  position: fixed;
  bottom: 0;
  top: 0;
`;

export const SidebarHeader = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding: 50px;
`;

export const MenuItemContainer = styled.div`
  display: flex;
  vertical-align: middle;
  margin-left: 15px;
  color: #7e7e7e;
  padding: 15px;
  &:hover {
    color: #3ed6da;
  }
`;

export const ItemIcon = styled.div`
  display: flex;
  margin-right: 5px;
  line-height: 16px;
`;

export const ItemText = styled.p`
  display: flex;
`;
