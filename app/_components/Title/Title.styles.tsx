"use client";
import styled from "styled-components";

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 20px;
  font-size: 4rem;
  text-align: center;
  font-family: "Playfair Display", serif;
  color: #f00; // Red
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

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
  @media (max-width: 768px) {
    font-size: 3rem;
  }

  // Mobile size
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;
