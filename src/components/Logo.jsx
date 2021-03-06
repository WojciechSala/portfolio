import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Logo = () => {
  return (
    <Link to="/">
      <Container data-sal="zoom-in" data-sal-easing="ease-out">
        S
      </Container>
    </Link>
  )
}

export default Logo

const Container = styled.div`
  width: 50px;
  height: 50px;
  z-index: 998;
  margin-left: -1.1rem;
  font-family: ${({ theme }) => theme.font.familySans};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.black};
  font-size: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.25s ease-in, transform 0.5s ease-out;
  pointer-events: auto;

  :hover {
    transform: rotate(-30deg);
    color: ${({ theme }) => theme.color.grey[800]};
  }
`
