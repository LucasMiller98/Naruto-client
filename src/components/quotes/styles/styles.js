import styled from 'styled-components'

export const Container = styled.div `
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`

export const Text = styled.p`
  font-size: 2em; // respeita conforme a fonte aumenta ou diminuei
  flex: 1;
`

export const Speaker = styled(Text) `
  text-align: right;
  margin-bottom: 50px;
`