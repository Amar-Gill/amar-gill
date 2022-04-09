import Crystal from '../components/Crystal'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Header = styled.header`
  width: 100%;
  background: #a5d5d8;
  height: 400px;
`

export default function Home() {

  return (
    <>
     <Header>
       <Canvas>
       <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
      <Crystal />

       </Canvas>
     </Header>
     <Title>My page</Title>
    </>
  )
}
