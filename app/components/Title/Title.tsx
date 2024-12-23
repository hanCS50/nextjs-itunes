"use client"

import React from 'react'
import { StyledTitle } from './Title.styles'

type TitleProps = {
    title: string
}

const Title = ({ title }: TitleProps) => {
  return <StyledTitle>{title}</StyledTitle>
}

export default Title