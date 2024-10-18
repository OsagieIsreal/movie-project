import styled from 'styled-components'
import Movie from '../components/Movie'

export default function Movielayout() {
  return (
    <>
      All movies will be rendered in this layout wrapper
      <Container>
        <Movie />
      </Container>
    </>
  )
}

const Container = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1rem;
justify-content: space-between;
  margin: 2rem 0;
  border: 1px solid green;
`


