"use client";
import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 100%;
`;

export const SearchInput = styled.input`
  height: 48px;
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline: none;

  &:focus {
    border-color: #0070f3;
  }

  &::placeholder {
    font-style: italic;
  }
`;

export const Button = styled.button`
  padding: 12px 20px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Playfair Display", serif;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  height: 48px;
  color: #212529;

  &:focus {
    border-color: #0070f3;
  }
`;
