"use client";
import styled from "styled-components";

export const ListContainer = styled.div`
  padding: 20px;
`;

export const StyledList = styled.ul`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr; /* 1 column */
  gap: 20px;
  padding-left: 0;

  list-style-type: none;
  padding-bottom: 40px;

  // Tablet layout
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr)); /* 2 columns */
  }

  // Desktop layout
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(250px, 1fr)); /* 3 columns */
  }

  // Large Desktop layout
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, minmax(250px, 1fr)); /* 4 columns max */
  }
`;
