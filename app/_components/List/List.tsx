"use client"

import React, { ReactNode } from 'react';
import { StyledList } from './List.styles';

type ListProps = {
  children: ReactNode;
}

const List = ({ children }: ListProps) => {
  return <StyledList>{children}</StyledList>;
};

export default List;
