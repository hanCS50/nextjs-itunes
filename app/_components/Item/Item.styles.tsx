import styled from "styled-components";

export const StyledItem = styled.li`
  display: flex;
  flex-direction: row;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const ItemTitle = styled.h3`
  font-size: 16px;
  margin-top: 10px;
`;

export const ItemSubtitle = styled.p`
  font-size: 14px;
  color: #555;
`;