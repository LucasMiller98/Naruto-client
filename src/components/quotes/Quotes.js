import { Speaker, Text, Container } from './styles/styles'
import { string, func } from 'prop-types'
import { Button } from '../button/Button'

export const Quotes = ({ quote, speaker, onUpdate, children }) => {
  return (
    <>
      <Container>
        <Text>{quote}</Text>
        <Speaker>-{speaker}</Speaker>
        <Button onClick={onUpdate}>{ children }</Button>
      </Container>
    </>
  )
}

Quotes.propTypes = { // tipando as props
  quote: string,
  speaker: string,
  onUpdate: func,
  children: string
}