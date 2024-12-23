"use client";
import styled from "styled-components";

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
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

  @media (min-width: 768px) {
    padding: 10px;
    align-items: center;
  }

  @media (min-width: 1420px) {
    flex-direction: row;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-grow: 1;

  @media (min-width: 1420px) {
    padding-left: 10px;
    align-items: flex-start;
    text-align: left;
  }
`;

export const ItemTitle = styled.h3`
  font-size: 14px;
  margin-top: 10px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ItemSubtitle = styled.p`
  font-size: 12px;
  color: #555;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const ExternalLink = styled.a`
  color: #d60017;
  font-size: 14px;
  text-decoration: none;
`;
