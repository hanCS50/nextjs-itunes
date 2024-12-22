"use client";
import styled from "styled-components";

export const StyledItem = styled.li`
  display: flex;
  flex-direction: row;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  transition: all 0.3s ease; // transition for hover effect

  // Hover effect for desktop
  &:hover {
    transform: translateY(-5px); // Slight lift effect
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
    align-items: center;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  justify-content: space-between;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding-left: 0;
    text-align: center;
  }
`;

export const ItemTitle = styled.h3`
  font-size: 16px;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ItemSubtitle = styled.p`
  font-size: 14px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
