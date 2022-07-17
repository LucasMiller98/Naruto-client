import { useState, useEffect, useRef } from 'react'
import { Container, Img } from '../styles/pages/styles'
import narutoImg from '../../images/naruto.png'
import { Quotes } from '../../components/quotes/Quotes'
import { getQuote } from '../../services/quotesService/quotesService'
// import jutsoSound from '../../sounds/jutso.mp3'


export function App() {

  // const audio = new Audio(jutsoSound)
  
  const isMounted = useRef(true)
  
  const [quoteState, setQuoteState] = useState({ quote: 'loading quote...', speaker: 'loading Speaker...' })

  const onUpdate = async () => {
    const quote = await getQuote()
    
    
    // audio.play()
    setQuoteState(quote)

  }

  useEffect(() => {
    onUpdate()

    return () => {
      isMounted.current = false
    }
    
  }, [])
  
  return (
    
    <>
      <Container>
        <Quotes { ...quoteState } onUpdate={onUpdate} children='Quote No Jutsu' />
        <Img src={narutoImg} alt="img naruto" />
      </Container>
    </>
  )
}

