import styled from "styled-components";

export const Button = styled.button `
  background-color: #dc872c;
  color: #fff;
  border: none;
  border-radius: none;
  font-size: 1.5em;
  padding: 10px 20px;
  font-family: 'New Tegomin', self;
  cursor: pointer;
  box-shadow: #333 3px 3px;
  transition: all ease-out .2s;

  &:hover {
    background: #a40000;
  }

  &:focus {
    outline: none;
  }
`