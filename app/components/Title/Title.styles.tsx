"use client";
import styled from "styled-components";

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 20px;
  font-size: 40px;
  text-align: center;
  font-family: "Playfair Display", serif;
  color: #d60017;
  transition: font-size 0.3s ease-in-out;
  animation: shimmer 1.5s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      text-shadow: 2px 2px 4px rgba(255, 215, 0, 0.5),
        0 0 25px rgba(255, 215, 0, 0.4), 0 0 50px rgba(255, 215, 0, 0.3);
    }
    50% {
      text-shadow: 2px 2px 4px rgba(255, 215, 0, 0.8),
        0 0 25px rgba(255, 215, 0, 0.5), 0 0 50px rgba(255, 215, 0, 0.2);
    }
    100% {
      text-shadow: 2px 2px 4px rgba(255, 215, 0, 0.5),
        0 0 25px rgba(255, 215, 0, 0.4), 0 0 50px rgba(255, 215, 0, 0.3);
    }
  }

  // Tablet size
  @media (min-width: 768px) {
    font-size: 48px; 
  }

  // Desktop size
  @media (min-width: 1024px) {
    font-size: 64px;
  }
`;
