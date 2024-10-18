import { styled } from 'styled-components'
function HeroSection() {
  return (
    <Box>
      {/* <img
        src='https://images.unsplash.com/photo-1717412059783-e58bf305db38?w=1000'
        alt=''
      /> */}
      <div>
        <svg
          className='svg-inline--fa fa-star fa-w-18'
          aria-hidden='true'
          focusable='false'
          data-prefix='fas'
          data-icon='star'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 576 512'
          data-fa-i2svg=''
          width={40}
        >
          <path
            fill='red'
            d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
          ></path>
        </svg>
        <Paragraph>
          A year after the Miles County massacre, Art the Clown is resurrected
          by a sinister entity. Art returns home, where he must hunt down and
          destroy teenage Sienna and her younger brother Jonathan on Halloween.
          As the body count rises, the siblings fight to stay alive while
          uncovering the true nature of Art&aposs evil intent.
        </Paragraph>
      </div>
    </Box>
  )
}

export default HeroSection

const Box = styled.div`
display: flex;
align-items: center;
  border: 1px solid red;
  height: 50vh;
  padding: 2rem 10%;
  ${'' /* background: url('https://images.unsplash.com/photo-1717412059783-e58bf305db38?q=80&fit=crop&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTI1MzM3MzJ8&ixlib=rb-4.0.3&w=924'); */}
  background-size: cover;
`

const Paragraph = styled.p`
 color: #ff3ab9;
  font-size: 1rem;
  max-width: 45rem;
`