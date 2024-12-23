"use client";
import styled from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  padding-left: 0;
  margin: 0 20px;
  list-style-type: none;
  padding-bottom: 40px;

  // Tablet layout: reduce columns to fit the screen size
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  // Mobile layout: single column
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0 10px;
  }
`;

export const NoMatch = styled.p`
  margin: 20px;
  font-size: 19.2px;
  text-align: center;
  color: #fff;
`;
