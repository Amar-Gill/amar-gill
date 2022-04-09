import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

import Crystal from '../components/Crystal';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Header = styled.header`
  width: 100%;
  background: #383e75;
  height: 512px;
`;

const CanvasContainer = styled.div`
  width: 192px;
  height: 192px;
  margin: auto;
`;

export default function Home() {
  return (
    <>
      <Header>
        <CanvasContainer>
          <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight color='white' position={[-2, 4, 6]} />
            <Crystal />
          </Canvas>
        </CanvasContainer>
      </Header>
      <Title>My page</Title>
    </>
  );
}
