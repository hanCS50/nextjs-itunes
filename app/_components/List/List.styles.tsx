import styled from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  padding-left: 0;
  margin: 0 20px 0 20px;
  list-style-type: none;
`;