import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const PageButton = styled.button<{ disabled: boolean }>`
  padding: 10px 20px;
  font-size: 14px;
  color: #fff;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#d60017")};
  border: 1px solid #000;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  margin: 0 10px;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#7c0310")};
  }
`;

export const PageInfo = styled.span`
  font-size: 16px;
  color: #fff;
`;